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

            onPageChange={(page) => { onPageChange(page.selected) }}
        />
    )
}