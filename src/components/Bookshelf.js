import { useState } from 'react';
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
  const [filteredBooks, setFilteredBooks] = useState(books);
  const [filteredValues, setFilteredValues] = useState({
    author: 'all',
    sort: 'a-z-author',
    status: 'all',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Update our controlled form inputs
    setFilteredValues({ ...filteredValues, [name]: value });

    // Update the books array
    const sortedBooks = sortBooks(books, value.slice(4));
    setFilteredBooks(sortedBooks);
  };

  return (
    <>
      <Filter
        books={books}
        filteredValues={filteredValues}
        handleChange={handleChange}
      />

      <Grid array={filteredBooks} />
    </>
  );
};
export default Bookshelf;
