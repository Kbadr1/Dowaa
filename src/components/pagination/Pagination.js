import React, { useState } from "react";
import "./pagination.scss";

const Pagination = ({
  previousPage,
  pageNumbers,
  paginate,
  nextPage,
  currentPage,
}) => {
  return (
    <div className="PaginationBar">
      <div className="pagination-nav">
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-end">
            <li className="page-item">
              <a
                className={
                  currentPage == 1
                    ? "page-link shadow-none disabled"
                    : "page-link shadow-none prev-next"
                }
                href="#"
                onClick={previousPage}
              >
                <i class="fas fa-chevron-left"></i>
              </a>
            </li>
            {pageNumbers.map((number) => (
              <li className="page-item" key={number}>
                <a
                  className={
                    number === currentPage
                      ? "page-link shadow-none active"
                      : "page-link shadow-none"
                  }
                  onClick={() => paginate(number)}
                  href="#"
                >
                  {number}
                </a>
              </li>
            ))}
            <li className="page-item">
              <a
                className={
                  currentPage == pageNumbers.length
                    ? "page-link shadow-none disabled"
                    : "page-link shadow-none prev-next"
                }
                href="#"
                onClick={nextPage}
              >
                <i class="fas fa-chevron-right"></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Pagination;
