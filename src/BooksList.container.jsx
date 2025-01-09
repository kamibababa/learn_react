import { useState, useEffect } from 'react';
import BooksList from './BooksList';
import axios from 'axios';
const client = axios.create({
  baseURL: 'http://localhost:3001',
});
function BooksListContainer() {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    (async () => {
      try {
        const { data } = await client.get(`/books`);
        setBooks(data);
      } catch (error) {
        setError(error);
      }
    })();
  }, []);
  return <BooksList error={error} books={books} />;
}
export default BooksListContainer;