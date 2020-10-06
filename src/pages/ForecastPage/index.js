import React, { useState, useEffect } from "react";
import styles from "./Forecast.module.css";
import axios from "axios";
import { base, apiKey } from "../../api";
import { Bar } from "react-chartjs-2";

function ForecastPage(props) {
  const [cityForecast, setCityForecast] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setCityForecast(await fetchForecast(props.match.params.city));
    };

    fetchAPI();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchForecast = async (city) => {
    try {
      const { data } = await axios.get(
        `${base}forecast?q=${city}&units=metric&APPID=${apiKey}`
      );
      const modifiedData = {
        city: data.city.name,
        forecast: data.list
          .map((el) => {
            return {
              temp: el.main.temp,
              description: el.weather[0].description,
              wind: el.wind.speed,
              date: el.dt_txt,
            };
          })
          .slice(0, 9),
      };
      return modifiedData;
    } catch (error) {
      console.log(error);
    }
  };

  const barChart = cityForecast.forecast ? (
    <Bar
      data={{
        labels: cityForecast.forecast.map((el) => {
          return [el.date, el.description];
        }),
        datasets: [
          {
            label: "Temperature, °C",
            backgroundColor: "rgba(255,0,0,0.5)",
            barPercentage: 0.9,
            data: cityForecast.forecast.map((el) => {
              return Math.round(el.temp);
            }),
          },
          {
            label: "Windspeed, m/s",
            backgroundColor: "rgba(0,190,0,0.5)",
            barPercentage: 0.9,
            data: cityForecast.forecast.map((el) => {
              return el.wind;
            }),
          },
        ],
      }}
      options={{
        offset: true,
        legend: { display: true },
        title: {
          display: true,
          text: `Weather forecast for ${cityForecast.city}`,
        },
      }}
    ></Bar>
  ) : null;

  return (
    <div className={styles.wrapper}>
      <h1>Daily Forecast</h1>
      <div className={styles.chartBox}>{barChart}</div>
    </div>
  );
}

export default ForecastPage;
