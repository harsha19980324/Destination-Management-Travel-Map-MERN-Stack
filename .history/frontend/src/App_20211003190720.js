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
      <Route path="/" exact component={DestinationHomeScreen}></Route>
      <Route path="/Map" exact component={Map}></Route>      
      <Route path="/Map_cus" exact component={Map_cus}></Route>  



      <Route path="/FFMM" exact component={FFMM}></Route>      
      <Route path="/add" exact component={CreatePost}></Route>
      <Route path="/edit/:id" exact component={EditPost}></Route>
      <Route path="/post/:id" exact component={PostDetails}></Route>

      <Route path="/FFMM1" exact component={FFMM1}></Route>
      <Route path="/addDestination" exact component={CreateDestination}></Route>
      <Route path="/editDestination/:id" exact component={EditDestination}></Route>
      <Route path="/Destination/:id" exact component={DestinationDetails}></Route>
      
      
      <Route path="/ImageSlider" exact component={ImageSlider}></Route>
      <Route path="/DestinationVideo" exact component={DestinationVideo}></Route>      
      
      
    </div>
    </BrowserRouter>
    
  );
  
}

export default App;
