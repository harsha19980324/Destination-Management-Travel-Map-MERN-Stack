import "./app.css";
import {BrowserRouter,Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div >
    <Header/>    
      
      
      <Route path="/Map_admin" exact component={Map_admin}></Route>
      <Route path="/DestinationVideo" exact component={DestinationVideo}></Route>      
      
      
    </div>
    </BrowserRouter>
    
  );
  
}

export default App;
