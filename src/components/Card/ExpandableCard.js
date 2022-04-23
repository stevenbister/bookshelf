import CardImage from './CardImage';

const ExpandableCard = ({ title, cover, expanded, ariaControls, onClick }) => {
  return (
    <li>
      <button
        className="card"
        style={{ width: '100%' }}
        aria-expanded={expanded}
        aria-controls={ariaControls}
        onClick={onClick}
      >
        <CardImage image={cover} />

        <h3 className="sr-only card__heading fs-1">{title}</h3>
      </button>
    </li>
  );
};
export default ExpandableCard;
