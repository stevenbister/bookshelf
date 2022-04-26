import Image from 'next/image';
import CardImage from './CardImage';
import useOutsideClick from 'src/hooks/useOutsideClick';

const ExpandableCard = ({
  title,
  cover,
  relatedBooks,
  ariaControls,
  onClick,
}) => {
  const { ref, isComponentClicked, setIsComponentClicked } =
    useOutsideClick(false);

  return (
    <li className="relative">
      <button
        className="card shadow"
        data-card="expandable"
        style={{ width: '100%' }}
        aria-expanded={isComponentClicked}
        aria-controls={ariaControls}
        ref={ref}
        onClick={() => {
          onClick();
          isComponentClicked
            ? setIsComponentClicked(false)
            : setIsComponentClicked(true);
        }}
      >
        <CardImage image={cover} />

        <h3 className="sr-only card__heading fs-1">{title}</h3>

        {relatedBooks.slice(0, 4).map((book, i) => {
          // Skip the first image
          if (i > 0) {
            return (
              <div key={book.cover.asset.url} className="card__stack">
                <Image
                  src={book.cover.asset.url}
                  alt={book.cover.asset.altText}
                  width="160"
                  height="250"
                  layout="responsive"
                />
              </div>
            );
          }
        })}
      </button>
    </li>
  );
};
export default ExpandableCard;
