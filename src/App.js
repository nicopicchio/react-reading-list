import { useEffect, useState } from 'react';
import {Routes} from 'react-router-dom'
import './App.css';
import BooksList from './components/BooksList'

function App() {

  const [books, setBooks] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/books')
    .then(res => res.json())
    .then(jsonData => {
      setBooks(jsonData)
    })
  }, [setBooks])

  return (
    <div className="App">
      <h1>📚 Reading List</h1>
      <nav>
        <ul>
          <li>Books</li>
          <li>Add Book</li>
        </ul>
      </nav>
      <BooksList books={books}/>
      <Routes>
        
      </Routes>
    </div>
  );
}

export default App;
