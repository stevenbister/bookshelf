import Link from 'next/link';
import CardImage from './CardImage';

const Card = ({ title, slug, cover }) => (
  <li>
    <Link href={`/${slug.current}`}>
      <a className="color-dark">
        <div className="card shadow">
          <CardImage image={cover} />

          <h3 className="sr-only card__heading fs-1">{title}</h3>
        </div>
      </a>
    </Link>
  </li>
);

export default Card;
