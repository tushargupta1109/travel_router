import React, { useState, useEffect, createRef } from "react";
import {
  CircularProgress,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core";
import alanBtn from "@alan-ai/alan-sdk-web";
import PlaceDetails from "../PlaceDetails/PlaceDetails";
import useStyles from "./styles.js";
const alanKey ="e60022313b49ea12706c53ee7cb7caf92e956eca572e1d8b807a3e2338fdd0dc/stage"

const List = ({
  places,
  type,
  setType,
  rating,
  setRating,
  childClicked,
  isLoading,
}) => {
  const [elRefs, setElRefs] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    setElRefs((refs) =>
      Array(places.length)
        .fill()
        .map((_, i) => refs[i] || createRef())
    );
  }, [places]);
  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: (commandData) => {
        if (commandData.command === "filterTypeCommand") {
          setType(commandData.type);
        }
        if (commandData.command === "attractionrateCommand") {
          setRating(commandData.rate);
        }
        if (commandData.command === "hotelrateCommand") {
          setRating(commandData.rate);
        }
        if (commandData.command === "restaurantrateCommand") {
          setRating(commandData.rate);
        }      },
    });
  }, []);

  return (
    <div className={classes.container}>
      <Typography variant="h4">
        Resturants,Hotels & Attractions around you
      </Typography>
      {isLoading ? (
        <div className={classes.loading}>
          <CircularProgress size="5rem" />
        </div>
      ) : (
        <>
          <FormControl className={classes.formControl}>
            <InputLabel id="type">Type</InputLabel>
            <Select
              id="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <MenuItem value="restaurants">Restaurants</MenuItem>
              <MenuItem value="hotels">Hotels</MenuItem>
              <MenuItem value="attractions">Attractions</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel id="rating">Rating</InputLabel>
            <Select
              id="rating"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            >
              <MenuItem value="0">All</MenuItem>
              <MenuItem value="3">Above 3 star</MenuItem>
              <MenuItem value="4">Above 4 star</MenuItem>
            </Select>
          </FormControl>
          <Grid container spacing={3} className={classes.list}>
            {places?.map((place, i) => (
              <Grid ref={elRefs[i]} key={i} item xs={12}>
                <PlaceDetails
                  selected={Number(childClicked) === i}
                  refProp={elRefs[i]}
                  place={place}
                />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </div>
  );
};

export default List;
