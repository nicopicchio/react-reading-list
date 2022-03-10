import { useState } from "react"

function AddBook(props) {

   const { setBooks, books } = props

  return (
    <form>
      <h2>Add Book</h2>

      <label>Title
        <input id="title" name="title" type="text" required />
      </label>

      <label>Author
        <input id="author" name="author" type="text" required />
      </label>

      <label>Genre
        <select id="title" name="title" required>
            <option>Horror</option>
            <option>Science Fiction</option>
            <option>Nonfiction</option>
            <option>History</option>
            <option>Thriller</option>
        </select>
      </label>
      
      <div>
        <button type="submit">
          Add
        </button>
      </div>
    </form>
  )
}

export default AddBook
