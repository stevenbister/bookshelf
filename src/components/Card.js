import Link from 'next/link';
import Image from 'next/image';

const Card = ({ title, slug, cover }) => {
  return (
    <Link href={`/${slug.current}`}>
      <a>
        {cover ? (
          <Image
            src={cover.asset.url}
            alt={cover.asset.altText}
            width="160"
            height="250"
          />
        ) : null}
        <h3>{title}</h3>
      </a>
    </Link>
  );
};

export default Card;
