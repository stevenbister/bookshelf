import Card from './Card';

const Reel = ({ array }) => {
  return (
    <ul>
      {array.map(({ _id, title, slug, cover }) => (
        <li key={_id}>
          <Card title={title} slug={slug.current} cover={cover.asset} />
        </li>
      ))}
    </ul>
  );
};

export default Reel;
