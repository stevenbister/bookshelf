import Filter from './Filter';
import Grid from './Grid';

const Bookshelf = ({ books }) => {
  return (
    <>
      <Filter books={books} />

      <Grid array={books} />
    </>
  );
};
export default Bookshelf;
