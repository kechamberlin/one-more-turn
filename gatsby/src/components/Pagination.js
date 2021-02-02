import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const PaginationStyles = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  justify-items: center;
  margin: 4rem 0;
  padding: 1rem;
  background-color: whitesmoke;
  border-radius: 4rem;
  box-shadow: 0 5px 25px 0 rgba(0, 0, 0, 0.5);
  text-align: center;
  font-weight: 400;
  & > * {
    padding: 1rem;
    flex: 1;
    width: 10rem;
    background-color: var(--white);
    border-radius: 0.4rem;
    margin: 2px;
    box-shadow: inset 0 5px 10px rgba(0, 0, 0, 0.1),
      0 2px 5px rgba(0, 0, 0, 0.5);
    text-decoration: none;
    &:first-child {
      border-radius: 40px 0 0 40px;
    }
    &:last-child {
      border-radius: 0 40px 40px 0;
    }

    &[aria-current],
    &.current {
      color: var(--red);
      border-bottom: 0.4rem solid var(--red);
      box-shadow: inset 0 5px 10px rgba(0, 0, 0, 0.2),
        0 4px 5px rgba(0, 0, 0, 0.5);
    }
    &[disabled] {
      pointer-events: none;
      color: lightgray;
    }
  }
  @media (max-width: 800px) {
    .PagPrevNext {
      display: none;
    }
    font-size: 1.4rem;
  }
  @media (max-width: 375px) {
    & > * {
      &[aria-current],
      &.current {
        border-bottom: none;
      }
    }
  }
`;

export default function Pagination({
  pageSize,
  totalCount,
  currentPage,
  base,
}) {
  const totalPages = Math.ceil(totalCount / pageSize);
  const prevPage = currentPage - 1;
  const nextPage = currentPage + 1;
  const hasNextPage = nextPage <= totalPages;
  const hasPrevPage = prevPage >= 1;
  return (
    <PaginationStyles>
      <Link
        title="Previous Page"
        disabled={!hasPrevPage}
        to={`${base}/${prevPage}`}
      >
        ⬅ {!hasPrevPage ? '' : <span className="PagPrevNext">Prev</span>}
      </Link>
      {Array.from({ length: totalPages }).map((_, i) => (
        <Link
          className={currentPage === 1 && i === 0 ? 'current' : ''}
          to={`${base}/${i > 0 ? i + 1 : ''}`}
          key={`page${i}`}
        >
          {i + 1}
        </Link>
      ))}
      <Link
        title="Next Page"
        disabled={!hasNextPage}
        to={`${base}/${nextPage}`}
      >
        {!hasNextPage ? '' : <span className="PagPrevNext">Next</span>}{' '}
        {'\u2b95'}
      </Link>
    </PaginationStyles>
  );
}
