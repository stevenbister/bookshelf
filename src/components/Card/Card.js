import Link from 'next/link';
import ReadStatus from '../ReadStatus';
import CardImage from './CardImage';
import CardHeader from './CardHeader';

const Card = ({ title, slug, cover, readStatus, headingLevel }) => (
  <li>
    <Link href={`/${slug.current}`}>
      <a className="color-dark">
        <div className="card shadow">
          <CardImage image={cover} />
          {readStatus ? <ReadStatus status={readStatus} /> : null}

          <CardHeader heading={title} as={headingLevel} />
        </div>
      </a>
    </Link>
  </li>
);

export default Card;
