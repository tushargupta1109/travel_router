import { CircularProgress,Grid,Select,FormControl, InputLabel, MenuItem, Typography } from '@material-ui/core';
import React,{useState} from 'react'
import useStyles from './styles';
import PlaceDetails from'../PlaceDetails/PlaceDetails';

const List = () => {
    const classes=useStyles();
    const [type,setType]=useState('resturants');
    const [rating,setRating]=useState('');

    const places=[
            {name: 'cool place'},
            {name: 'best beer'},
            {name: 'best steak'},
            {name: 'cool place'},
            {name: 'best beer'},
            {name: 'best steak'},
        ];

    return (
        <div className={classes.container}>
            <Typography variant="h4">Resturants,Hotels & Attractions around you</Typography>
            <FormControl className={classes.formControl}>
                <InputLabel>Type</InputLabel>
                <Select value={type} onChange={(e)=>setType(e.target.value)}>
                    <MenuItem value="resturants">Resturants</MenuItem> 
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
                    <Grid item key={i} xs={12}>
                        <PlaceDetails place ={place}/>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default List;