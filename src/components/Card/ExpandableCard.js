import { useState } from 'react';
import CardImage from './CardImage';

const ExpandableCard = ({
  title,
  cover,
  numberOfBooks,
  ariaControls,
  onClick,
}) => {
  const [expanded, setExpaneded] = useState(false);

  return (
    <li className="relative">
      <button
        className="card"
        style={{ width: '100%' }}
        aria-expanded={expanded}
        aria-controls={ariaControls}
        onClick={() => {
          onClick();
          expanded ? setExpaneded(false) : setExpaneded(true);
        }}
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
