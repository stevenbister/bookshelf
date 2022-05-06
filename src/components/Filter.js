import Select from './Form/Select';
import Radio from './Form/Radio';

const Filter = ({ books, filteredValues, handleChange }) => {
  const authors = books.map((book) => book.author);
  const uniqAuthors = [...new Set(authors)];
  const readStatuses = ['Read', 'Reading', 'Not read'];

  return (
    <form>
      <fieldset>
        <legend>Sort</legend>

        <Radio
          label="A - Z Author"
          groupName="sort"
          checked={filteredValues.sort}
          onChange={handleChange}
        />
        <Radio
          label="A - Z Series"
          groupName="sort"
          checked={filteredValues.sort}
          onChange={handleChange}
        />
      </fieldset>

      <fieldset>
        <legend>Filter</legend>

        <Select label="Author" options={uniqAuthors} onChange={handleChange} />
        <Select label="Status" options={readStatuses} onChange={handleChange} />
      </fieldset>
    </form>
  );
};
export default Filter;
