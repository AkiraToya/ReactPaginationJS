import './App.css';
import ReactPaginate from 'react-paginate';
import { useEffect, useState } from 'react';
import PaginationComponent from './PaginationComponent';
import Users from './modules/Users';

function App() {
  let [users, setUsers] = useState([])
  let [pageCount, setPageCount] = useState(0)

  let fetchUsers = async (page=1) => {
    let request = await fetch(`https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=3`)
    let requestedData = await request.json()

    let totalPages = Math.ceil(10/3)
    let datas = requestedData

    setPageCount(totalPages)
    setUsers(datas)
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  let onPageChange = (page) => {
    fetchUsers(page.selected + 1)
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

export default App;
