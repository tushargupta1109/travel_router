import { CircularProgress,Grid,Select,FormControl, InputLabel, MenuItem, Typography } from '@material-ui/core';
import React,{useState,useEffect,createRef} from 'react'
import useStyles from './styles';
import PlaceDetails from'../PlaceDetails/PlaceDetails';
import { Children } from 'react';

const List = ({places,childClicked,isLoading,type,setType,rating,setRating}) => {
    const classes=useStyles();
    const [elRefs,setElRefs]=useState([]);
    
    useEffect(() => {
        setElRefs((refs) => Array(places?.length).fill().map((_, i) => refs[i] || createRef()));
      }, [places]);

    return (
        <div className={classes.container}>
            <Typography variant="h4">Resturants,Hotels & Attractions around you</Typography>
            {isLoading?(
                <div className={classes.loading}>
                    <CircularProgress size="5rem"/>
                </div> 
            ) : (
            <>
            <FormControl className={classes.formControl}>
            <InputLabel id="type">Type</InputLabel>
            <Select id="type" value={type} onChange={(e) => setType(e.target.value)}>
              <MenuItem value="resturants">Restaurants</MenuItem>
              <MenuItem value="hotels">Hotels</MenuItem>
              <MenuItem value="attractions">Attractions</MenuItem>
            </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel>Rating</InputLabel>
                <Select value={rating} onChange={(e)=>setRating(e.target.value)}>
                    <MenuItem value={0}>All</MenuItem> 
                    <MenuItem value={3}>Above 3.0</MenuItem> 
                    <MenuItem value={4}>Above 4.0</MenuItem> 
                </Select>
            </FormControl>
            <Grid container spacing={3} className={classes.list}>
                {places?.map((place,i)=>(
                    <Grid ref={elRefs[i]} item key={i} xs={12}>
                        <PlaceDetails
                            place ={place}
                            selected={Number(childClicked)===i}
                            refProp={elRefs[i]}
                        />
                    </Grid>
                ))}
            </Grid>
            </>
            )}
        </div>
    )
}

export default List;