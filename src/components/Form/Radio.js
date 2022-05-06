import { kebabCase } from 'lodash';

const Radio = ({ label, groupName, checked = false }) => {
  const id = kebabCase(label);

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input type="radio" name={groupName} id={id} defaultChecked={checked} />
    </>
  );
};
export default Radio;
