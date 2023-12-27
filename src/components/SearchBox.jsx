import { FiSearch } from "react-icons/fi";

import styles from "./SearchBox.module.css"

function SearchBox({ search, setSearch, searchHandler }) {
  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="Search title"
        value={search}
        onChange={(e) => setSearch(e.target.value.toLocaleLowerCase().trim())}
      />
      <button onClick={searchHandler}>
        <FiSearch />
      </button>
    </div>
  );
}

export default SearchBox;
