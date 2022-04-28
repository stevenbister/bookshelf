import Image from 'next/image';
import placeholder from '../../../public/img/Placeholder.png';

const CardImage = ({ image }) => (
  <div className="card__image">
    {image ? (
      <Image
        src={image.asset.url}
        alt={image.asset.altText ? image.asset.altText : ''}
        width="160"
        height="250"
        layout="responsive"
        sizes="(max-width: 600px) 150px, 50vw"
        placeholder="blur"
        blurDataURL={image.asset.metadata.lqip}
      />
    ) : (
      <Image
        src={placeholder}
        alt=""
        width="160"
        height="250"
        layout="responsive"
      />
    )}
  </div>
);
export default CardImage;
