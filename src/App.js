import './App.css';
import ReactPaginate from 'react-paginate';
import { useEffect } from 'react';

function App() {

  let fetchUsers = async () => {
    let request = await fetch("https://jsonplaceholder.typicode.com/users?_page=1&_limit=3")
    let requestedData = await request.json()

    let totalPages = Math.ceil(10/3)
    let datas = requestedData
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <div className="App">
      <ReactPaginate pageCount={10}
        containerClassName="pagination-container"
        pageClassName="page"
        previousClassName="prev"
        nextClassName="next"
        breakClassName="break"
        activeClassName="active"
      />
    </div>
  );
}

export default App;
