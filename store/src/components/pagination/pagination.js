import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import classes from './pagination.module.css';

const Pagination = ({ items, children, ...props }) => {
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 8;

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(items.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(items.length / itemsPerPage));
    }, [itemOffset, itemsPerPage,items]);

    const handlePageClick = (event) => {
        const newOffset = event.selected * itemsPerPage % items.length;
        setItemOffset(newOffset);
    };
    return (
        <div>
            {React.Children.map(children, child => {
                return React.cloneElement(child, { currentItems })
            })}
            <ReactPaginate
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                pageCount={pageCount}
                previousLabel="<"
                pageClassName={classes.item}
                pageLinkClassName={classes.link}
                previousClassName={classes.item}
                previousLinkClassName={classes.link}
                nextClassName={classes.item}
                nextLinkClassName={classes.link}
                breakLabel="..."
                breakClassName={classes.item}
                breakLinkClassName={classes.link}
                containerClassName={classes.pagination}
                activeClassName={classes.active}
                renderOnZeroPageCount={null}
                marginPagesDisplayed={1}
            />
        </div>
    );
}

export default Pagination;