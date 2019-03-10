import React from "react";
import {Pagination} from "react-bootstrap";
import PreviousPagination from "./PreviusPagination"
import NextPagination from "./NextPagination"

const PaginationContainer = (props) => {
  const {page, totalTasks, onPaginationClick} = props;
  const perPage = 3;
  const pages = Math.ceil(totalTasks / perPage);
  const prevPage = page - 1;
  const nextPage = page + 1;

  return (
  <Pagination>
    <PreviousPagination prevPage={prevPage} page={page} onPaginationClick={onPaginationClick}/>
    <Pagination.Item active>
      {page}
    </Pagination.Item>
    <NextPagination page={page} pages={pages} nextPage={nextPage} onPaginationClick={onPaginationClick}/>
  </Pagination>
  )
};

export default PaginationContainer;
