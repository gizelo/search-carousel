import styles from "../styles/Search.module.css";

export default () => {
  const searchHandle = () => {
    console.log("search");
  };

  return (
    <div className={styles.searchBlock}>
      <input
        className={styles.search}
        type="text"
        placeholder="Chains and Coins"
      />
      <button onClick={searchHandle} className={styles.searchButton}>
        <img src="/icons/search.svg" alt="Search Icon" />
      </button>
    </div>
  );
};
