import styles from '@styles/Grid.module.scss';
import Card from './Card';

const Grid = ({ array }) => {
  return (
    <ul className={styles.grid} role="list">
      {array.map(({ _id, title, slug, cover }) => (
        <li key={_id}>
          <Card title={title} slug={slug} cover={cover} />
        </li>
      ))}
    </ul>
  );
};

export default Grid;
