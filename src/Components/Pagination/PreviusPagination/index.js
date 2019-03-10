import {Pagination} from "react-bootstrap";
import React from "react";

const prevPagination = (props) => {
  const {prevPage, page, onPaginationClick} = props;

  if (!prevPage) {
    return (
    <Pagination.First onClick={() => onPaginationClick(1)}/>
    )
  }

  return (
  <>
    <Pagination.First onClick={() => onPaginationClick(1)}/>
    {prevPage !== 1 &&
    <>
      <Pagination.Item onClick={() => onPaginationClick(1)}>{1}</Pagination.Item>
      <Pagination.Ellipsis disabled/>
    </>
    }
    <Pagination.Item onClick={() => onPaginationClick(page - 1)}> {prevPage}</Pagination.Item>
  </>
  )
};

export default prevPagination;
