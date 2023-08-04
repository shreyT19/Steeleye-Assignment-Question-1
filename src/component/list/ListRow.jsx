import styles from "./ListRow.module.css";

const ListCell = ({ children,onClick }) => {
 
  return <tr className={styles.cell} onClick={onClick}>{children}</tr>;
};

export default ListCell;
