import { capitalize } from 'lodash';

const ReadStatus = ({ status }) => (
  <span className="badge">{capitalize(status)}</span>
);
export default ReadStatus;
