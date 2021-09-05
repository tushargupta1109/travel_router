import React,{useState,useEffect} from 'react';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Favourites from './components/Favourites/Favourites';
import Home from './components/Home';
import {FavProvider} from './components/context';

const App=()=>{
  const [fav,setFav]=useState([]);
  return (
    <FavProvider>
      <Router>
        <div>
          <Switch>
            <Route path="/"exact component={Home} />
            <Route path="/Favourites" component={Favourites} />
          </Switch>
        </div>
      </Router>
    </FavProvider>
  )
}

export default App;