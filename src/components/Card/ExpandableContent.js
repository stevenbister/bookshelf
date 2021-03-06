import Reel from '../Reel';

const ExpandableContent = ({ id, series, openSeries, relatedBooks }) => {
  return (
    <li
      id={id}
      className={
        series === openSeries
          ? 'grid__item--full-width'
          : 'grid__item--hidden grid__item--full-width'
      }
    >
      <h2 className="fs-3" style={{ marginBottom: 'var(--space-2xs)' }}>
        {series}
      </h2>
      <Reel array={relatedBooks} />
    </li>
  );
};
export default ExpandableContent;
