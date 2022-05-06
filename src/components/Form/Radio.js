import { kebabCase } from 'lodash';

const Radio = ({ label, groupName, checked = false, onChange }) => {
  const id = kebabCase(label);

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        type="radio"
        name={groupName}
        id={id}
        value={id}
        checked={checked === id ? true : false}
        onChange={onChange}
      />
    </>
  );
};

export default Radio;
