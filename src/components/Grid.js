import Card from './Card';

const Grid = ({ array }) => {
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

export default Grid;
