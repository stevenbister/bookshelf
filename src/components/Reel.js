import Card from './Card';

const Reel = ({ array }) => {
  return (
    <ul>
      {array.map(({ _id, title, slug, cover }) => (
        <li key={_id}>
          <Card title={title} slug={slug} cover={cover} />
        </li>
      ))}
    </ul>
  );
};

export default Reel;
