import axios from "axios";
import { addCity, updateWeatherForCity } from "../actions";

export const base = "http://api.openweathermap.org/data/2.5/";
export const apiKey = "c0765b3e067acf4808383bf22971895e";

export const fetchWeatherForCity = (city, newCity) => (dispatch) => {
  axios
    .get(`${base}weather?q=${city}&units=metric&APPID=${apiKey}`)
    .then(({ data }) => {
      if(newCity){
        dispatch(addCity(city, data));
      }
      else{
        dispatch(updateWeatherForCity(city, data));
      }
    })
    .catch((error) => {
      console.log("error", error);
    });
};
