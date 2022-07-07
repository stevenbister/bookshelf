import { useState, useEffect } from 'react';
import { sortBooks } from '@/lib/queryBooks';
import Filter from './Filter';
import Grid from './Grid';
import pluralise from '@/lib/pluralise';

const Bookshelf = ({ books }) => {
  const [filteredBooks, setFilteredBooks] = useState(books);
  const [totalBooks, setTotalBooks] = useState(filteredBooks.length);
  const [filteredValues, setFilteredValues] = useState({
    author: 'all',
    sort: 'a-z-author',
    status: 'all',
  });

  const handleChange = async (e) => {
    const { name, value } = e.target;
    // Update our controlled form inputs
    setFilteredValues({ ...filteredValues, [name]: value });
  };

  // Update the filteredBooks state when filteredValues updates
  useEffect(() => {
    const booksClone = [...books]; // Create copy of books so we aren't mutating the original value in our event handler

    // Filter the array
    const filterBooksArray = booksClone.filter((book) => {
      // Filter results when both author and status are selected
      if (filteredValues.author !== 'all' && filteredValues.status !== 'all') {
        return (
          book.author.some(
            (author) => author.slug.current === filteredValues.author,
          ) && filteredValues.status === book.readStatus[0].toLowerCase()
        );
      }

      // Filter results when only author is selected
      if (filteredValues.author !== 'all') {
        return book.author.some(
          (author) => author.slug.current === filteredValues.author,
        );
      }

      // Filter results when only status is selected
      if (filteredValues.status !== 'all') {
        return filteredValues.status === book.readStatus[0].toLowerCase();
      }
    });

    // Sort based on the original cloned array if fitlers are both set to all
    // otherwise sort based on the filteredArray
    if (filteredValues.author === 'all' && filteredValues.status === 'all') {
      setFilteredBooks(sortBooks(booksClone, filteredValues.sort.slice(4)));
    } else {
      setFilteredBooks(
        sortBooks(filterBooksArray, filteredValues.sort.slice(4)),
      );
    }
  }, [
    books,
    filteredValues.sort,
    filteredValues.author,
    filteredValues.status,
  ]);

  // Set the count of the number of books on the page
  useEffect(() => {
    // Get each item that has a related books array
    const hasRelatedBooks = filteredBooks.filter(
      (book) => book.relatedBooks.length > 0,
    );

    // Sum up the totals of each list of related books
    // We need to subtract 1 from each one so we don't count the first book twice
    const counter = 0;
    const countRelatedBooks = hasRelatedBooks.reduce(
      (acc, book) => acc + book.relatedBooks.length - 1,
      counter,
    );

    setTotalBooks(filteredBooks.length + countRelatedBooks);
  }, [filteredBooks]);

  return (
    <div className="stack">
      <Filter
        books={books}
        filteredValues={filteredValues}
        handleChange={handleChange}
      />

      <p className="fs-1">
        {totalBooks} {pluralise('book', totalBooks)}
      </p>

      <Grid array={filteredBooks} />
    </div>
  );
};
export default Bookshelf;
