import './App.css';
import ReactPaginate from 'react-paginate';

function App() {
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
