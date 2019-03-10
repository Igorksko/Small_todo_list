import React, {Component} from "react";
import styled from "styled-components/macro";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {toastr} from "react-redux-toastr";

import * as usersDuck from "../../ducks";
import {Button} from "../../Components/Shared/Styled/Button";
import {border, colors, fontSizes, fontWeight, margins, paddings} from "../../utils/variables";
import {px2rem} from "../../utils/helpers";

class Login extends Component {
  state = {
    login: '',
    password: ''
  };

  handleLoginInput = (e) => {
    const {value} = e.target;
    this.setState({login: value});
  };

  handlePasswordInput = (e) => {
    const {value} = e.target;
    this.setState({password: value});
  };

  HandleLoginClick = (e) => {
    const {name} = e.target;
    const {history:{ push }} = this.props;
    if (name === "continue") {
      return push("/")
    }
    this.loginValidation();
  };

  loginValidation = () => {
    const {login, password} = this.state;
    const {history:{ push }, updateRole} = this.props;
    if (login === "admin" && password === "123") {
      updateRole();
      push("/")
    } else {
      toastr.error("Error", "Invalid Login or Password");
    }
  };

  render() {
    return (
    <LoginWrapperPage>
      <LoginFormWrapper>
        <LoginTitle>
          Enter Login and Password
        </LoginTitle>
        <LoginInput onChange={e => this.handleLoginInput(e)}/>
        <LoginInput onChange={e => this.handlePasswordInput(e)}/>
        <ButtonsWrapper onClick={e => this.HandleLoginClick(e)}>
          <Button name="login">Login</Button>
          <Button name="continue">Continue as a user</Button>
        </ButtonsWrapper>
      </LoginFormWrapper>
    </LoginWrapperPage>
    )
  }
}


const LoginWrapperPage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${colors.lightGray};
`;

const LoginFormWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${paddings.small} ${paddings.big};
  background-color: ${colors.blue};
  border-radius: ${border.medium};
`;

const LoginInput = styled.input`
  width: ${px2rem(400)};
  height: ${px2rem(50)};
  border-radius: ${border.small};
  margin-bottom: ${margins.small};
  font-weight: ${fontWeight.bold};
  font-size: ${fontSizes.large};
`;

const LoginTitle = styled.span`
  width: 100%;
  height: ${px2rem(50)};
  text-align: center;
  color: ${colors.white};
  font-weight: ${fontWeight.bold};
  font-size: ${fontSizes.large};
`;

const ButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
`;

export default withRouter(connect(null,
dispatch => ({
  updateRole: () => dispatch(usersDuck.updateRole())
}))(Login));
