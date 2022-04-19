import styles from '@styles/Sidebar.module.css';

const Sidebar = ({ children }) => {
  return <div className={styles.sidebar}>{children}</div>;
};
export default Sidebar;
