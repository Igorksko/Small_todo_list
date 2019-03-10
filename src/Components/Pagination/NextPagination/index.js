import {Pagination} from "react-bootstrap";
import React from "react";

const nextPagination = (props) => {
  const {page, pages, nextPage, onPaginationClick} = props;

  if (page === pages) {
    return (
    <Pagination.Last onClick={() => onPaginationClick(pages)}/>
    )
  }

  return (
  <>
    {nextPage !== pages
    &&
    <>
      <Pagination.Item onClick={() => onPaginationClick(page + 1)}>{nextPage}</Pagination.Item>
      <Pagination.Ellipsis disabled/>
    </>
    }
    <Pagination.Item onClick={() => onPaginationClick(pages)}>
      {pages}
    </Pagination.Item>
    <Pagination.Last onClick={() => onPaginationClick(pages)}/>
  </>
  )
};

export default nextPagination;
