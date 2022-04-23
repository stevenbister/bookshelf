import Reel from '../Reel';

const ExpandableContent = ({ id, series, openSeries, relatedBooks }) => {
  return (
    <li
      id={id}
      className="grid__item--full-width"
      hidden={series === openSeries ? false : true}
      style={{ backgroundColor: 'var(--color-grey)' }}
    >
      <h3>{series}</h3>
      <Reel array={relatedBooks} />
    </li>
  );
};
export default ExpandableContent;
