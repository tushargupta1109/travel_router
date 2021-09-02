import React,{useState} from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from './styles.js';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
const firebaseconfig={
  apiKey: "AIzaSyC88jko0k35fv0pp_il35aYaHQV48XivQ4",
  authDomain: "sound-coil-324011.firebaseapp.com",
  projectId: "sound-coil-324011",
  storageBucket: "sound-coil-324011.appspot.com",
  messagingSenderId: "93278994873",
  appId: "1:93278994873:web:731a021beeefd6df80b668",
  measurementId: "G-SLSJ0RJ6VY"
}
firebase.initializeApp(firebaseconfig);

const Header = ({setCoords}) => {
  const classes = useStyles();
  const [autocomplete,setAutocomplete]=useState(null);

  const onLoad = (autoC) => setAutocomplete(autoC);

  const onPlaceChanged = () => {
    const lat = autocomplete.getPlace().geometry.location.lat();
    const lng = autocomplete.getPlace().geometry.location.lng();

    setCoords({ lat, lng });
  }; 
  const googlelogin=()=>{
    var provider=new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
    .then(res=>{
      console.log(res);
    }).catch(error=>{
      console.log(error);
    })
  }
  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.title}>
          Travel Advisor
        </Typography>
        <Typography variant="h6" className={classes.title} onClick={()=>googlelogin()}>
          Login/SignUp
        </Typography>
        <Typography variant="h6" className={classes.title}>
          Favourites
        </Typography>
        <Box display="flex">
          <Typography variant="h6" className={classes.title}>
            Explore new places
          </Typography>
          <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase placeholder="Search…" classes={{ root: classes.inputRoot, input: classes.inputInput }} />
            </div>
          </Autocomplete>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;