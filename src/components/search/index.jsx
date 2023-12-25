import React from "react";
import SearchBar from "../../components/searchBar";
import styles from "./style.module.scss"

export const Search = () => {
  return (
    <div  className={styles['search']}>
      <SearchBar title="Search" />
    </div>
  );
};
