import { useState, useEffect } from 'react';
import { sortBooks } from '@/lib/queryBooks';
import Filter from './Filter';
import Grid from './Grid';

const Bookshelf = ({ books, total }) => {
  const [filteredBooks, setFilteredBooks] = useState(books);
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

  useEffect(() => {
    const booksClone = [...books]; // Create copy of books so we aren't mutating the original value in our event handler

    // Filter the array
    const filterBooksArray = booksClone.filter((book) => {
      // Filter results when both author and status are selected
      if (filteredValues.author !== 'all' && filteredValues.status !== 'all') {
        return (
          filteredValues.author === book.authorSlug &&
          filteredValues.status === book.readStatus[0].toLowerCase()
        );
      }

      // Filter results when only author is selected
      if (filteredValues.author !== 'all') {
        return filteredValues.author === book.authorSlug;
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

  return (
    <>
      {console.log(books.length)}
      <details>
        <summary className="fs-2">Filter</summary>

        <p className="fs-1">{total} in total books on the shelf</p>

        <Filter
          books={books}
          filteredValues={filteredValues}
          handleChange={handleChange}
        />
      </details>

      <Grid array={filteredBooks} />
    </>
  );
};
export default Bookshelf;
