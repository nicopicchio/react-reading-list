import { useState } from 'react';

function AddBook({ setBooks, books }) {
  const [formInitialState, setFormInitialState] = useState({
    title: '',
		author: '',
		genre: '',
  })
	const [newBook, setNewBook] = useState(formInitialState);

	const onTitleChange = (event) => {
		setNewBook({ ...newBook, title: event.target.value });
	};

	const onAuthorChange = (event) => {
		setNewBook({ ...newBook, author: event.target.value });
	};

	const onGenreChange = (event) => {
		setNewBook({ ...newBook, genre: event.target.value });
	};

	const onFormSubmit = (event) => {
		event.preventDefault();

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: newBook.title,
        author: newBook.author,
        genre: newBook.genre
      })
    }

    fetch('http://localhost:4000/books', options)
      .then(res => res.json())
      .then(jsonRes => {
        setBooks([...books, jsonRes])
        setNewBook(formInitialState)
      })
	};

	return (
		<form onSubmit={onFormSubmit}>
			<h2>Add Book</h2>

			<label>
				Title
				<input
					id="title"
					name="title"
					type="text"
					value={newBook.title}
					onChange={onTitleChange}
					required
				/>
			</label>

			<label>
				Author
				<input
					id="author"
					name="author"
					type="text"
					value={newBook.author}
					onChange={onAuthorChange}
					required
				/>
			</label>

			<label>
				Genre
				<select
					id="title"
					name="title"
					value={newBook.genre}
					onChange={onGenreChange}
					required
				>
					<option>Select genre...</option>
					<option>Horror</option>
					<option>Science Fiction</option>
					<option>Nonfiction</option>
					<option>History</option>
					<option>Thriller</option>
          <option>Productivity</option>
				</select>
			</label>

			<div>
				<button type="submit">Add</button>
			</div>
		</form>
	);
}

export default AddBook;
