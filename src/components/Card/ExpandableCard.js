import CardImage from './CardImage';

const ExpandableCard = ({
  title,
  cover,
  relatedBooks,
  expanded,
  ariaControls,
  onClick,
}) => {
  const numberOfBooks = relatedBooks.length;

  return (
    <li className="relative">
      <button
        className="card"
        style={{ width: '100%' }}
        aria-expanded={expanded}
        aria-controls={ariaControls}
        onClick={onClick}
      >
        <CardImage image={cover} />

        <h3 className="sr-only card__heading fs-1">{title}</h3>

        <div className="card__stack"></div>
        {numberOfBooks >= 3 ? <div className="card__stack"></div> : null}
        {numberOfBooks >= 4 ? <div className="card__stack"></div> : null}
      </button>
    </li>
  );
};
export default ExpandableCard;
