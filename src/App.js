import React,{useEffect,useState} from 'react';
import {CssBaseline,Grid} from '@material-ui/core';
import { getPlacesData,getWeatherData } from './api';

import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';
const App=()=>{
    const [places,setPlaces]=useState([]);
    const [childClicked,setchildClicked]=useState(null);
    const [coordinates,setCoordinates]=useState({});
    const [bounds,setBounds]=useState({});
    const [isLoading,setisLoading]=useState(false);
    const [rating,setRating]=useState('');
    const [type,setType]=useState('resturants');
    const [filteredPlaces,setFilteredPlaces]=useState([]);
    
    useEffect(()=>{
        navigator.geolocation.getCurrentPosition(({coords:{latitude,longitude}})=>{
            setCoordinates({lat:latitude,lng:longitude});
        })
    },[]);

    // useEffect(() => {
    //     const filtered = places.filter((place) => Number(place.rating) > rating);
    
    //     setFilteredPlaces(filtered);
    //   }, [rating]);

    useEffect(()=>{
        if(bounds.sw && bounds.ne){
        setisLoading(true);
        getWeatherData(coordinates.lat,coordinates.lng)
            .then
        getPlacesData(type,bounds.sw, bounds.ne)
        .then((data)=>{
            setPlaces(data?.filter((place)=>place.name && place.num_reviews>0));
            setFilteredPlaces([]);
            setisLoading(false);
        })
    }
    },[type,bounds]);
    return (
        <>
        <CssBaseline/>
        <Header setCoordinates={setCoordinates}/>
        <Grid container spacing={3} style={{width:'100%'}}>
            <Grid item xs={12} md={4}>
                <List
                    places={filteredPlaces.length ? filteredPlaces:places}
                    childClicked={childClicked}
                    isLoading={isLoading}
                    rating={rating}
                    setRating={setRating}
                    type={type}
                    setType={setType}

                />
            </Grid>
            <Grid item xs={12} md={8}>
                <Map
                    setCoordinates={setCoordinates}
                    setBounds={setBounds}
                    coordinates={coordinates}
                    places={filteredPlaces.length ? filteredPlaces:places}
                    setchildClicked={setchildClicked}
                />
            </Grid>
        </Grid>
        </>
    )
}

export default App; 