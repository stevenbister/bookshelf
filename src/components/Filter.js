import Select from './Form/Select';
import Radio from './Form/Radio';

const Filter = ({ books }) => {
  const authors = books.map((book) => book.author);
  const uniqAuthors = [...new Set(authors)];
  const readStatuses = ['Read', 'Reading', 'Not read'];

  return (
    <form>
      <fieldset>
        <legend>Sort</legend>

        <Radio label="A - Z Author" groupName="sort" checked={true} />
        <Radio label="A - Z Series" groupName="sort" />
      </fieldset>

      <fieldset>
        <legend>Filter</legend>

        <Select label="Author" options={uniqAuthors} />
        <Select label="Status" options={readStatuses} />
      </fieldset>
    </form>
  );
};
export default Filter;
