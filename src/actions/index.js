import { ADD_CITY,  UPDATE_WEATHER_FOR_CITY, REMOVE_CITY } from "./constants";

export const addCity = (city, data) => {
  return {
    type: ADD_CITY,
    payload: {
      city,
      data,
    },
  };
};
export const removeCity = (city) => {
  return {
    type: REMOVE_CITY,
    payload: {
      city,
    },
  };
};

export const updateWeatherForCity = (city, data) => {
  return {
    type: UPDATE_WEATHER_FOR_CITY,
    payload: {
      city,
      data,
    },
  };
};
