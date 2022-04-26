import Link from 'next/link';
import ReadStatus from '../ReadStatus';
import CardImage from './CardImage';

const Card = ({ title, slug, cover, readStatus }) => (
  <li>
    <Link href={`/${slug.current}`}>
      <a className="color-dark">
        <div className="card shadow">
          <CardImage image={cover} />
          {readStatus ? <ReadStatus status={readStatus} /> : null}

          <h3 className="sr-only card__heading fs-1">{title}</h3>
        </div>
      </a>
    </Link>
  </li>
);

export default Card;
