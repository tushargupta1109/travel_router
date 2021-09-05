import React, { useState, useContext } from 'react';
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';
import {favContext} from '../context';

const Favourites = () => {
    const[fav,setFav]=useContext(favContext);
    console.log(fav);
    return (
        <div>
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