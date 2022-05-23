import { useState, useEffect } from 'react';
import { sortBooks } from '@/lib/queryBooks';
import Filter from './Filter';
import Grid from './Grid';

/*
  TODO: add a call to the graphql endpoint with updated filters on the query
    - use the filteredValues state to handle the query somehow - they might need tweaking but should be okay
    - will likey need to refactor the filter/map on the index page so we can reuse it and build the array again

  TODO: pass the new array into the Grid component using the books prop as a default
*/

const Bookshelf = ({ books }) => {
  const [filteredValues, setFilteredValues] = useState({
    author: 'all',
    books,
    sort: 'a-z-author',
    status: 'all',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFilteredValues({ ...filteredValues, [name]: value });
  };

  useEffect(() => {
    const sortedBooks = sortBooks(books, filteredValues.sort.slice(4));

    setFilteredValues({ ...filteredValues, books: sortedBooks });
  }, [books, filteredValues]);

  return (
    <>
      <Filter
        books={books}
        filteredValues={filteredValues}
        handleChange={handleChange}
      />

      <Grid array={filteredValues.books} />
    </>
  );
};
export default Bookshelf;
