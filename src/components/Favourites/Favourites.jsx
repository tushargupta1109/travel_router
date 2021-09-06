import React, { useContext, useEffect } from "react";
import { AppBar, Toolbar, Typography, Grid } from "@material-ui/core";
import { favContext } from "../context";
import firebase, { db } from "../firebase";
import { Link } from "react-router-dom";
import useStyles from "./styles.js";

const Favourites = () => {
  const classes = useStyles();
  const uid = firebase.auth().currentUser.uid;
  const [fav, setFav] = useContext(favContext);
  useEffect(() => {
    async function fetchf() {
      db.collection("users")
        .doc(uid)
        .get()
        .then((data) => {
          setFav(data);
        });
    }
    fetchf();
  }, []);
  console.log(fav);
  return (
    <div>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Typography variant="h5" className={classes.title}>
            Travel Advisor
          </Typography>
          <Link to="/" style={{ color: "white" }}>
            <Typography variant="h6" className={classes.title}>
              Go to Home
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
      {fav.length === 0 ? (
        <Typography
          variant="h4"
          className={classes.title}
          style={{ paddingTop: 80, textAlign: "center" }}
        >
          No Favourites Added.
        </Typography>
      ) : (
        <Grid container spacing={3}>
          {fav?.map((place, i) => (
            <Grid key={i} item xs={12}>
              <favshow place={place} />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};
export default Favourites;
