import React from "react";
import { useDispatch } from "react-redux";
import styles from "./CityCard.module.css";
import {
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Grid,
  Card,
  IconButton,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { fetchWeatherForCity } from "../../api";
import {removeCity} from "../../actions"
import sunny from "../../images/sunny.jpg";
import cloudly from "../../images/Cloudly.jpg";
import rainy from "../../images/Rainy.jpg";
import { Link } from "react-router-dom";

const dateBuilder = (d) => {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  let hour = d.getHours();
  let minute = d.getMinutes();
  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${hour}:${
    (minute < 10 ? "0" : "") + minute
  } ${day} ${date} ${month} ${year}`;
};

function CityCard(props) {
  const dispatch = useDispatch();

  

  const handleUpdate = (city) => {
    dispatch(fetchWeatherForCity(city));
  };

  const handleDelete = (city) => {
    dispatch(removeCity(city))
  }

  return (
    <Grid item component={Card} xs={6} md={3} className={styles.card}>
      <Card>
        <CardActionArea>
          <CardMedia
            className={styles.cardMedia}
            image={
              props.description === "Rain"
                ? rainy
                : props.description === "Clear"
                ? sunny
                : cloudly
            }
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.city}, {props.country}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary" component="p">
              Actual on {dateBuilder(new Date(props.time * 1000))}
            </Typography>
            <Typography variant="h4" color="textSecondary" component="p">
              {`${Math.round(props.temp)}°c`}
            </Typography>
            <Typography variant="subtitle2" color="textSecondary" component="p">
              {props.situation}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link
            to={`/forecast/${props.city}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Button size="small" color="primary">
              See daily forecast
            </Button>
          </Link>
          <Button
            size="small"
            color="primary"
            onClick={() => {
              handleUpdate(props.city);
            }}
          >
            Update
          </Button>
          <IconButton aria-label="delete" onClick={() => {
            handleDelete(props.city)
          }}>
            <DeleteIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default CityCard;
