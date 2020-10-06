import React from "react";
import styles from "./Loader.module.css"
import CircularProgress from "@material-ui/core/CircularProgress";

export default function Loader() {
  

  return (
    <div className={styles.root}>
      
        <CircularProgress className={styles.loader}/>
      
    </div>
  );
}
