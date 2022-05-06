import { kebabCase } from 'lodash';

const Select = ({ label, options, includeAll = true, onChange }) => {
  const id = kebabCase(label);

  return (
    <>
      <label htmlFor={id}>{label}</label>

      <select name={id} id={id} onChange={onChange}>
        {includeAll ? <option value="all">All</option> : null}

        {options.map((option) => {
          const value = kebabCase(option);

          return (
            <option key={value} value={value}>
              {option}
            </option>
          );
        })}
      </select>
    </>
  );
};
export default Select;
