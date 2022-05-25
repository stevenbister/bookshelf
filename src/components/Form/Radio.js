import { kebabCase } from 'lodash';

const Radio = ({ label, groupName, checked = false, onChange }) => {
  const id = kebabCase(label);

  return (
    <div className="radio-wrapper">
      <input
        type="radio"
        name={groupName}
        id={id}
        value={id}
        checked={checked === id ? true : false}
        onChange={onChange}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default Radio;
