import { useEffect, useState } from 'react';
import {Routes} from 'react-router-dom'
import './App.css';

function App() {

  const [books, setBooks] = useState([])

  useEffect( () => {
    fetch("http://localhost:4000/books")
      .then(res => res.json())
      .then(json => setBooks(json))
  }, [])
  return (
    <div className="App">
      <h1>📚 Reading List</h1>
      <nav>
        <ul>
          <li>Books</li>
          <li>Add Book</li>
        </ul>
      </nav>
      <Routes>
        
      </Routes>
    </div>
  );
}

export default App;
