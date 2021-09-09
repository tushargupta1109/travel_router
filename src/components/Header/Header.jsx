import React, { useState } from "react";
import { Autocomplete } from "@react-google-maps/api";
import { AppBar, Toolbar, Typography, InputBase, Box } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import useStyles from "./styles.js";
import { Link } from "react-router-dom";
import firebase from "../firebase";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useAuthState } from "react-firebase-hooks/auth";
const auth = firebase.auth();

const Header = ({ setCoords }) => {
  const classes = useStyles();
  const [autocomplete, setAutocomplete] = useState(null);

  const onLoad = (autoC) => setAutocomplete(autoC);

  const onPlaceChanged = () => {
    const lat = autocomplete.getPlace().geometry.location.lat();
    const lng = autocomplete.getPlace().geometry.location.lng();

    setCoords({ lat, lng });
  };
  const [userin] = useAuthState(auth);
  const googlelogin = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const out = () => {
    firebase
      .auth()
      .signOut()
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.title}>
          Travel Router
        </Typography>
        {userin ? (
          <>
          <Link
              to="/Favourites"
              style={{ color: "white", textDecoration: "none" }}
            >
              <Typography variant="h5" className={classes.title}>
                Favourites
              </Typography>
            </Link>
            <Typography
              variant="h5"
              style={{ color: "white", cursor: "pointer" }}
              className={classes.title}
              onClick={() => out()}
            >
              Logout
            </Typography>
          </>
        ) : (
          <Typography
            variant="h5"
            style={{ color: "white", cursor: "pointer" }}
            className={classes.title}
            onClick={() => googlelogin()}
          >
            Login
          </Typography>
        )}
        <Box display="flex">
          <Typography variant="h5" className={classes.title}>
            Explore new places
          </Typography>
          <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{ root: classes.inputRoot, input: classes.inputInput }}
              />
            </div>
          </Autocomplete>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
