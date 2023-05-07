// frontend/src/App.js
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormModal";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import GetAllSpots from './components/Spots/SpotIndex'
import SpotShow from "./components/Spots/SpotShow";
import CreateSpotForm from "./components/Spots/CreateSpotForm";
import EditSpotForm from './components/Spots/EditSpotForm'

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && <Switch>
        <Route exact path="/" component={GetAllSpots} />
        <Route  path="/spots/new" component={CreateSpotForm}/>
          <Route  path="/spots/:spotId/edit" component={EditSpotForm}/>
        <Route  path="/spots/:spotId" component={SpotShow}/>


      </Switch>}


    </>
  );
}

export default App;
