import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function ViewBook() {
  const [book, setBook] = useState(false)

  const params = useParams()

  useEffect(() => {
    fetch(`http://localhost:4000/books/${params.id}`)
    .then(res => res.json())
    .then(jsonResult => {
      setBook(jsonResult)
    })
  }, [params])

  if (!book) {
    return <p>Loading</p>
  }

  return (
    <div>
      <h2>{book.title}</h2>
      <p>{book.genre}</p>
      <p>{book.author}</p>
    </div>
  )
}

export default ViewBook