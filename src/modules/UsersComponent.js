import { useEffect, useState } from 'react';
import PaginationComponent from './../PaginationComponent';
import Users from './Users';
import { fetchDatas } from './../Helper';

export default function UsersComponent() {
    let url = `https://jsonplaceholder.typicode.com/users?_page=[page]&_limit=3`
    let [users, setUsers] = useState([])
    let [pageCount, setPageCount] = useState(0)

    useEffect(() => {
        onPageChange()
    }, [])

    let onPageChange = async (page = 0) => {
        let { totalPages, datas } = await
            fetchDatas(url, page + 1)

        setPageCount(totalPages)
        setUsers(datas)
    }

    return (
        <div className="App">
            <Users users={users} />

            <PaginationComponent
                pageCount={pageCount}
                onPageChange={onPageChange}
            />
        </div>
    );
}