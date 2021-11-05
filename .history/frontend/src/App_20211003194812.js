import "./app.css";
import {BrowserRouter,Route} from 'react-router-dom';

import Header from "./components/Header";
import Map_admin from "./components/Map_admin";
import Map_cus from "./components/Map_cus";
import CreateDestination from './components/CreateDestination';

function App() {
  return (
    <BrowserRouter>
    <div >
    <Header/>    
      
      
      <Route path="/Map_admin" exact component={Map_admin}></Route>        
      <Route path="/Map_cus" exact component={Map_cus}></Route> 
      <Route path="/addDestination" exact component={CreateDestination}></Route>
      
    </div>
    </BrowserRouter>
    
  );
  
}

export default App;
