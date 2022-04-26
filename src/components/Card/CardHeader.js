const CardHeader = ({ heading, as }) => {
  if (as) {
    const Tag = as;

    return <Tag className="sr-only card__heading fs-1">{heading}</Tag>;
  }

  return <h3 className="sr-only card__heading fs-1">{heading}</h3>;
};
export default CardHeader;
