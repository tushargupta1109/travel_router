import React from 'react';
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';
import firebase, { db } from "../firebase";
import useStyles from './style.js';
const auth = firebase.auth();

const Favshow = ({ place, refProp  }) => {
  const classes = useStyles();
  const handledelete = async () => {
    const uid = firebase.auth().currentUser.uid;
    const data = await db.collection("users").doc(uid).get();
    let fav = await data.data().fav;
    const filteredfav = fav.filter((value) => {
      return value.obj.name !== place.obj.name;
    });
    db.collection("users").doc(uid).set({ fav: filteredfav });
    alert('removed successfully ,refresh the page')
  }; 
  return (
    <Card elevation={6} ref={refProp} style={{width:550}}>
      <CardMedia
        style={{ height: 350  }}
        image={place.obj.photo ? place.obj.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
        title={place.obj.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5">{place.obj.name}</Typography>
        <Box display="flex" justifyContent="space-between" my={2}>
          <Rating name="read-only" value={Number(place.obj.rating)} readOnly />
          <Typography component="legend">{place.obj.num_reviews} review{place.obj.num_reviews > 1 && 's'}</Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography component="legend">Ranking</Typography>
          <Typography gutterBottom variant="subtitle1">
            {place.obj.ranking}
          </Typography>
        </Box>
        {place?.obj.awards?.map((award) => (
          <Box display="flex" justifyContent="space-between" my={1} alignItems="center">
            <img src={award.images.small} />
            <Typography variant="subtitle2" color="textSecondary">{award.display_name}</Typography>
          </Box>
        ))}
        {place.obj.address && (
          <Typography gutterBottom variant="body2" color="textSecondary" className={classes.subtitle}>
            <LocationOnIcon />{place.obj.address}
          </Typography>
        )}
        {place.obj.phone && (
          <Typography variant="body2" color="textSecondary" className={classes.spacing}>
            <PhoneIcon /> {place.obj.phone}
          </Typography>
        )}
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={()=>handledelete()}>
          Remove from favourites
        </Button>
      </CardActions>
    </Card>
  );
};


export default Favshow;