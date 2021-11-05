
import {BrowserRouter,Route} from 'react-router-dom';

import Header from "./components/Header";
import Map_admin from "./components/Map_admin";
import Map_cus from "./components/Map_cus";
import CreateDestination from './components/CreateDestination';
import FFMM1 from './components/FFMM1';
import DestinationDetails from './components/DestinationDetails';
import EditDestination from './components/EditDestination';
import DestinationHomeScreen from './components/DestinationHomeScreen';
import ImageSlider from './components/ImageSlider';
import DestinationVideo from "./components/DestinationVideo";

import "./index.css"

function App() {
  return (
    <BrowserRouter>
    <div >
    <Header/>    
      
    <Route path="/" exact component={DestinationHomeScreen}></Route>
      <Route path="/Map_admin" exact component={Map_admin}></Route>        
      <Route path="/Map_cus" exact component={Map_cus}></Route>    
      <Route path="/FFMM1" exact component={FFMM1}></Route>
      <Route path="/addDestination" exact component={CreateDestination}></Route>
      <Route path="/editDestination/:id" exact component={EditDestination}></Route>
      <Route path="/Destination/:id" exact component={DestinationDetails}></Route>       
      <Route path="/ImageSlider" exact component={ImageSlider}></Route>
      <Route path="/DestinationVideo" exact component={DestinationVideo}></Route>

      <Route path="/DestinationVideo" exact component={DestinationVideo}></Route>
      
      
      
    </div>
    </BrowserRouter>
    
  );
  
}

export default App;
