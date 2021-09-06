import React,{useState,useEffect} from 'react';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Favourites from './components/Favourites/Favourites';
import Home from './components/Home';
import {FavProvider} from './components/context';
import firebase from './components/firebase';
import { useAuthState } from "react-firebase-hooks/auth";
const auth=firebase.auth();

const App=()=>{
  const [userin]=useAuthState(auth);
  return (
    <FavProvider>
      <Router>
        <div>
          <Switch>
            <Route path="/"exact component={Home} />
            {userin?(
            <Route path="/Favourites" component={Favourites} />
            ):('')}
          </Switch>
        </div>
      </Router>
    </FavProvider>
  )
}

export default App;