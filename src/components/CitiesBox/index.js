import React, {  useEffect } from "react";
import styles from "./CitiesBox.module.css";
import Grid from "@material-ui/core/Grid";
import CityCard from "../CityCard";
import { useSelector } from "react-redux";
import { fetchWeatherForCity } from "../../api";
import { useDispatch } from "react-redux";
import Loader from "../Loader"

function CitiesBox() {
  let weather = useSelector((store) => store.weather.list);
  const dispatch = useDispatch();

  useEffect(() => {
    weather.map((el) => {
      dispatch(fetchWeatherForCity(el.city));
      return el
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps 
  }, []);

  return (
    <Grid container spacing={0} className={styles.wrapper}>
      {weather.map((el, id) => {
        return Object.keys(el.data).length ? (
          <CityCard
            city={el.data.name}
            key={id}
            country={el.data.sys?.country}
            temp={el.data.main?.temp}
            description={el.data.weather[0].main}
            situation={el.data.weather[0].description}
            time={el.data.dt}
          />
        ) : <Loader/>;
      })}
       
    </Grid>
  );
}

export default CitiesBox;
