import "./app.css";
import {BrowserRouter,Route} from 'react-router-dom';

import Header from "./components/Header";
import Map_admin from "./components/Map_admin";

function App() {
  return (
    <BrowserRouter>
    <div >
    <Header/>    
      
      
      <Route path="/Map_admin" exact component={Map_admin}></Route>        
      <Route path="/Map_admin" exact component={Map_admin}></Route> 
      
    </div>
    </BrowserRouter>
    
  );
  
}

export default App;
