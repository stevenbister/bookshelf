import Select from './Form/Select';
import Radio from './Form/Radio';

const Filter = ({ books, filteredValues, handleChange }) => {
  const authors = books.map((book) => book.author);
  const uniqAuthors = [...new Set(authors)];
  const readStatuses = ['Read', 'Reading', 'Not read'];

  return (
    <details>
      <summary className="fs-1">Filter and sort</summary>

      <form className="switcher">
        <fieldset>
          <legend className="fs-1">Sort</legend>

          <div className="">
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
          </div>
        </fieldset>

        <fieldset>
          <legend className="fs-1">Filter</legend>

          <div className="switcher">
            <Select
              label="Author"
              options={uniqAuthors}
              onChange={handleChange}
            />

            <Select
              label="Status"
              options={readStatuses}
              onChange={handleChange}
            />
          </div>
        </fieldset>
      </form>
    </details>
  );
};
export default Filter;
