import { useState } from "react";
import styles from "../styles/Search.module.css";

export default ({ searchHandle }: { searchHandle: (text: string) => void }) => {
  const [searchText, setSearchText] = useState("");

  return (
    <div className={styles.searchBlock}>
      <input
        className={styles.search}
        type="text"
        placeholder="Chains and Coins"
        value={searchText}
        onChange={(data) => setSearchText(data.target.value)}
      />
      <button
        onClick={() => searchHandle(searchText)}
        className={styles.searchButton}
      >
        <img src="/icons/search.svg" alt="Search Icon" />
      </button>
    </div>
  );
};
