import React, { useState, useContext,useEffect } from 'react';
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';
import {favContext} from '../context';
import firebase,{ db } from "../firebase";

const Favourites = () => {
  const uid = firebase.auth().currentUser.uid;
    const[fav,setFav]=useContext(favContext);
    useEffect(()=>{
      async function fetchf(){
        db.collection("users")
        .doc(uid)
        .get()
        .then((data)=>{
          setFav(data);
        })
      }
      fetchf();
    },[])
      console.log(fav);
    return (
        <div>
          hi
            <Grid container spacing={3} >
            {fav?.map((place, i) => (
              <Grid key={i} item xs={12}>
                <favshow place={place} />
              </Grid>
            ))}
          </Grid>
        </div>
    )
}
export default Favourites;