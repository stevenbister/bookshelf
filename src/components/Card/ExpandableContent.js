import Reel from '../Reel';

const ExpandableContent = ({ id, series, openSeries, relatedBooks }) => {
  return (
    <li
      id={id}
      className="grid__item--full-width"
      hidden={series === openSeries ? false : true}
    >
      <h2 className="fs-3" style={{ marginBottom: 'var(--space-2xs)' }}>
        {series}
      </h2>
      <Reel array={relatedBooks} />
    </li>
  );
};
export default ExpandableContent;
