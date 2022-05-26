import { kebabCase } from 'lodash';

const Radio = ({ label, groupName, checked = false, onChange }) => {
  const id = kebabCase(label);

  return (
    <label className="radio-wrapper form-control fs-0" htmlFor={id}>
      <input
        type="radio"
        name={groupName}
        id={id}
        value={id}
        checked={checked === id ? true : false}
        onChange={onChange}
      />
      {label}
    </label>
  );
};

export default Radio;
