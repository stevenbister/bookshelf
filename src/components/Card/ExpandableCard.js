import Image from 'next/image';
import CardImage from './CardImage';
import ReadStatus from '../ReadStatus';
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

  const seriesReadStatus = () => {
    const statuses = relatedBooks
      .map((book) => book.readStatus)
      .join(',')
      .split(',');

    if (statuses.some((s) => /reading/i.test(s))) return 'reading';

    if (statuses.some((s) => /read/i.test(s))) return 'read';

    if (statuses.some((s) => /not read/i.test(s))) return 'not read';
  };

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
        {seriesReadStatus() ? <ReadStatus status={seriesReadStatus()} /> : null}

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
