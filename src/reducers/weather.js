import {
  REMOVE_CITY,
  ADD_CITY,
  UPDATE_WEATHER_FOR_CITY,
} from "../actions/constants";

const initialState = {
  list: [
    { city: "Kharkiv", data: {} },
    { city: "Kyiv", data: {} },
  ],
  data: {},
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CITY:
      return {
        ...state,
        list: [
          ...state.list,
          { city: action.payload.data.name, data: action.payload.data },
        ],
      };
    case REMOVE_CITY:
      const list = state.list.filter((el) => action.payload.city !== el.city);
      return {
        ...state,
        list,
      };
    case UPDATE_WEATHER_FOR_CITY:
      return {
        ...state,
        list: state.list.map((el) =>
          el.city === action.payload.city
            ? { city: el.city, data: action.payload.data }
            : el
        ),
      };
    default:
      return state;
  }
};

export default weatherReducer;
