import React from "react";
import styles from "./Main.module.css";
import CitiesBox from "../../components/CitiesBox";
import InputSearch from "../../components/InputSearch"

function MainPage() {

  return (
    <div className={styles.wrapper}>
      <InputSearch/>
      <CitiesBox/>
    </div>
  );

}

export default MainPage;
