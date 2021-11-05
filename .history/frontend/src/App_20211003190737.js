import "./app.css";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { useEffect, useState } from "react";
import { Room, Star, StarBorder } from "@material-ui/icons";
import axios from "axios";
import { format } from "timeago.js";
import Register from "./components/Register";
import Login from "./components/Login";

function App() {
  return (
    <BrowserRouter>
    <div >
    <Header/>    
      
      
      <Route path="/ImageSlider" exact component={ImageSlider}></Route>
      <Route path="/DestinationVideo" exact component={DestinationVideo}></Route>      
      
      
    </div>
    </BrowserRouter>
    
  );
  
}

export default App;
