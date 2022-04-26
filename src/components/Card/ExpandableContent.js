import Reel from '../Reel';

const ExpandableContent = ({ id, series, openSeries, relatedBooks }) => {
  return (
    <li
      id={id}
      className="grid__item--full-width"
      hidden={series === openSeries ? false : true}
    >
      <h3 style={{ marginBottom: 'var(--space-2xs)' }}>{series}</h3>
      <Reel array={relatedBooks} />
    </li>
  );
};
export default ExpandableContent;
