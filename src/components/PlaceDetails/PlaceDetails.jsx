import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import Rating from "@material-ui/lab/Rating";
import React, { useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { favContext } from "../context";
import firebase, { db } from "../firebase";
import useStyles from "./styles.js";
const auth = firebase.auth();

const PlaceDetails = ({ place, selected, refProp }) => {
  const [fav, setFav] = useContext(favContext);
  const [userin] = useAuthState(auth);

  const handleadd = async () => {
    const uid = firebase.auth().currentUser.uid;
    if (uid === "") {
      return;
    }
    const obj = {
      name: place.name ? place.name : "",
      address: place.address ? place.address : "",
      photo: place.photo ? place.photo : "",
      ranking: place.ranking ? place.ranking : "",
      rating: place.rating ? place.rating : "",
      num_reviews: place.num_reviews ? place.num_reviews : "",
      awards: place.awards ? place.awards : [],
    };
    const data = await db.collection("users").doc(uid).get();
    if (data) {
      if (data.data()) {
        let fav = await data.data().fav;
        let flag = true;
        fav.map((value) => {
          if (value.obj.name === obj.name) {
            flag = false;
          }
        });
        if (flag === true) {
          fav.push({ obj });
          db.collection("users").doc(uid).set({ fav }, { merge: true });
          alert('added to favourites');
        }else{
          alert('already in favourites');
        }
      } else {
        let fav = [{ obj }];
        db.collection("users").doc(uid).set({ fav });
        alert('added to favourites');
      }
    }
  };

  if (selected)
    refProp?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  const classes = useStyles();
  return (
    <Card elevation={6} ref={refProp}>
      <CardMedia
        style={{ height: 350 }}
        image={
          place.photo
            ? place.photo.images.large.url
            : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
        }
        title={place.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5">
          {place.name}
        </Typography>
        <Box display="flex" justifyContent="space-between" my={2}>
          <Rating name="read-only" value={Number(place.rating)} readOnly />
          <Typography component="legend">
            {place.num_reviews} review{place.num_reviews > 1 }
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography component="legend">Ranking</Typography>
          <Typography gutterBottom variant="subtitle1">
            {place.ranking}
          </Typography>
        </Box>
        {place?.awards?.map((award) => (
          <Box
            display="flex"
            justifyContent="space-between"
            my={1}
            alignItems="center"
          >
            <img src={award.images.small} />
            <Typography variant="subtitle2" color="textSecondary">
              {award.display_name}
            </Typography>
          </Box>
        ))}
        {place?.cuisine?.map(({ name }) => (
          <Chip key={name} size="small" label={name} className={classes.chip} />
        ))}
        {place.address && (
          <Typography
            gutterBottom
            variant="body2"
            color="textSecondary"
            className={classes.subtitle}
          >
            <LocationOnIcon />
            {place.address}
          </Typography>
        )}
        {place.phone && (
          <Typography
            variant="body2"
            color="textSecondary"
            className={classes.spacing}
          >
            <PhoneIcon /> {place.phone}
          </Typography>
        )}
      </CardContent>
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={() => window.open(place.web_url, "_blank")}
        >
          Trip Advisor
        </Button>
        <Button
          size="small"
          color="primary"
          onClick={() => window.open(place.website, "_blank")}
        >
          Website
        </Button>
        {userin ? (
          <Button size="small" color="primary" onClick={() => handleadd()}>
            Add to favourite
          </Button>
        ) : (
          ""
        )}
      </CardActions>
    </Card>
  );
};

export default PlaceDetails;
