import Image from 'next/image';
import placeholder from '../../../public/img/Placeholder.png';

const CardImage = ({ image }) => (
  <>
    {image ? (
      <Image
        src={image.asset.url}
        alt={image.asset.altText}
        width="160"
        height="250"
        layout="responsive"
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
  </>
);
export default CardImage;
