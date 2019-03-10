import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {Alert, ListGroup} from "react-bootstrap";
import styled from "styled-components/macro";

import Pagination from "../../Components/Pagination";
import ListItem from "../../Components/ListItem";
import NewTask from "../../Components/NewTask";
import Select from "../../Components/Select";
import {Button} from "../../Components/Shared/Styled/Button";

import * as usersDuck from "../../ducks";
import {margins} from "../../utils/variables";
import {sortTypes, sortDirections} from "../../utils/helpers";
import {addTask} from "./../../api";

class Main extends Component {

  componentDidMount() {
    this.props.loadTasksByPage(1);
  }

  handlePaginationClick = (e) => {
    this.props.loadTasksByPage(e);
  };

  handleLoginButton = () => {
    this.props.history.push("/login")
  };

  handleSortFieldChange = (e) => {
    this.props.loadTasksBySortField(e)
  };

  handleSortSortDirectionChange = (e) => {
    this.props.loadTasksBySortDirection(e)
  };

  handleAddTask = (e) => {

    const {email, username, text} = e;

    addTask({email, username, text});
    this.triggerUpdateTaskList();
  };

  triggerUpdateTaskList = () => {
    const {
      tasks: {
        page,
        sortField,
        sortDirection
      },
      onTasksFetchByAllFields
    } = this.props;

    if (page !== 1 || sortField !== "id" || sortDirection !== "asc") {
      onTasksFetchByAllFields(page, sortField, sortDirection)
    }
  };

  render() {
    const {
      tasks: {
        taskList,
        totalTasks,
        page,
        sortField,
        sortDirection,
        loading,
        error
      },
      user: {isAdmin}
    } = this.props;

    return (
    <MainWrapper>
      {error && <Alert variant={"danger"}>Something went wrong :(, try to reload</Alert>}
      {loading &&
      <div className="spinner-border text-dark" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      }

      {taskList && taskList.length &&
      <>
        <CustomListGroup>
          <ListGroupItem>
            <NewTask onAddTask={e => this.handleAddTask(e)}/>
          </ListGroupItem>
          {taskList.map(task => (
          <ListGroupItem key={task.id}>{<ListItem task={task} isAdmin={isAdmin}/>}</ListGroupItem>
          ))}
        </CustomListGroup>
        <SortWrapper>
          <span> Select sort field:&nbsp;&nbsp;&nbsp;</span>
          <Select
          sortType="sort field"
          sortValues={sortTypes}
          selected={sortField}
          onChangeOption={e => this.handleSortFieldChange(e)}
          />
          <span> Select sort direction:&nbsp;&nbsp;&nbsp;</span>
          <Select
          sortType="sort direction"
          sortValues={sortDirections}
          selected={sortDirection}
          onChangeOption={e => this.handleSortSortDirectionChange(e)}
          />
        </SortWrapper>
        <Pagination page={page} totalTasks={totalTasks} onPaginationClick={e => this.handlePaginationClick(e)}/>
        <Button onClick={() => this.handleLoginButton()}>Login as admin</Button>
      </>
      }
    </MainWrapper>
    )
  }
}


export default withRouter(connect(state => (
{
  tasks: state.tasks,
  user: state.user
}),
dispatch => ({
  loadTasksByPage: (page) => dispatch(usersDuck.onTasksFetchByPage(page)),
  loadTasksBySortField: (sortField) => dispatch(usersDuck.onTasksFetchBySortField(sortField)),
  loadTasksBySortDirection: (sortDirection) => dispatch(usersDuck.onTasksFetchBySortDirection(sortDirection)),
  onTasksFetchByAllFields: (page, sortField, sortDirection) => dispatch(usersDuck.onTasksFetchByAllFields(page, sortField, sortDirection))
}))(Main));

const ListGroupItem = styled(ListGroup.Item)`
  display: flex;
  margin-bottom: ${margins.small};
`;

const CustomListGroup = styled(ListGroup)`
  width: 80%;
  margin-bottom: ${margins.small};
`;

const MainWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SortWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
