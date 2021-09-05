import React,{useState,createContext} from 'react';

export const favContext=createContext();

export const FavProvider=props=>{
    const[fav,setFav]=useState([]);
    return(
        <favContext.Provider value={[fav,setFav]}>
            {props.children}
        </favContext.Provider>
    )
}