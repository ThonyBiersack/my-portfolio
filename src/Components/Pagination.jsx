import React from "react";
import { Link } from "react-router-dom";

const Pagination = ({currentPage, totlaPages}) => {
    const pageNumbers = [];

    for (let i = 1; i <= totlaPages; i++){
        pageNumbers.push(i);
}
    return(
        <>
            {pageNumbers.map((number) => (
                <Link 
                key={number}
                to={`/${number}`}
                className={currentPage === number ? 'active' : ''}>
                    {number}
                </Link>
            ))}
            {pageNumbers.map((number) => (
                <Link 
                key={number}
                to={`/carkus${number}`}
                className={currentPage === number ? 'active' : ''}>
                    {number}
                </Link>
            ))}
            {pageNumbers.map((number) => (
                <Link 
                key={number}
                to={`/blog${number}`}
                className={currentPage === number ? 'active' : ''}>
                    {number}
                </Link>
            ))}
        </>
    )
}
export default Pagination;