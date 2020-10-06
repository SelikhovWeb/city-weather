import React, { useState } from "react";
import styles from "./InputSearch.module.css";
import TextField from "@material-ui/core/TextField";
import { useDispatch } from "react-redux";
import { fetchWeatherForCity } from "../../api";

function InputSearch() {
  const [city, setCity] = useState("");
  const dispatch = useDispatch();

  onkeypress = (e) => {
    if (e.key === "Enter") {
        e.target.value = ""
        dispatch(fetchWeatherForCity(city, true));
    }
  };

  return (
    <TextField
      id="standard-basic"
      label="Add your city"
      className={styles.input}
      onChange={(e) => {
        setCity(e.target.value);
      }}
    />
  );
}

export default InputSearch;
