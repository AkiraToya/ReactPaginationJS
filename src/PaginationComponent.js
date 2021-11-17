import ReactPaginate from "react-paginate"

export default function PaginationComponent({pageCount, onPageChange}){
    return (
        <ReactPaginate pageCount={pageCount}
            containerClassName="pagination-container"
            pageClassName="page"
            previousClassName="prev"
            nextClassName="next"
            breakClassName="break"
            activeClassName="active"

            breakLabel="(...)"
            previousLabel="< Prev"
            nextLabel="Next >"

            marginPagesDisplayed={2}
            pageRangeDisplayed={2}

            onPageChange={(page) => { onPageChange(page.selected) }}
        />
    )
}