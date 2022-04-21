import Link from 'next/link';
import Image from 'next/image';
import CardImage from './CardImage';

const Card = ({ title, slug, cover }) => {
  return (
    <div className="card">
      <CardImage image={cover} />

      <h3 className="card__heading fs-1">
        <Link href={`/${slug.current}`}>
          <a className="color-dark stretch-link">{title}</a>
        </Link>
      </h3>
    </div>
  );
};

export default Card;
