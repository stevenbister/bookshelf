import { useState } from 'react';
import Filter from './Filter';
import Grid from './Grid';

const Bookshelf = ({ books }) => {
  const [filteredValues, setFilteredValues] = useState({
    sort: 'a-z-author',
    author: 'all',
    status: 'all',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFilteredValues({ ...filteredValues, [name]: value });
  };

  return (
    <>
      <Filter
        books={books}
        filteredValues={filteredValues}
        handleChange={handleChange}
      />

      <Grid array={books} />
    </>
  );
};
export default Bookshelf;
