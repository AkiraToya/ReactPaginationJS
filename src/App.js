import './App.css';
import ReactPaginate from 'react-paginate';
import { useEffect, useState } from 'react';

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

  return (
    <div className="App">
      <div className="user-list-container">
        {users.map((user, index) => 
          <div className="user-container" key={index}>
            <div className="user-name">{user.name}</div>
            <div className="user-email">{user.email}</div>
          </div>
        )}
        
      </div>

      <ReactPaginate pageCount={pageCount}
        containerClassName="pagination-container"
        pageClassName="page"
        previousClassName="prev"
        nextClassName="next"
        breakClassName="break"
        activeClassName="active"

        onPageChange={(page) => {
          fetchUsers(page.selected + 1)
        }}
      />
    </div>
  );
}

export default App;
