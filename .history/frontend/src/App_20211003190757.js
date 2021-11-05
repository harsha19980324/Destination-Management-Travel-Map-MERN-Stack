import "./app.css";
import {BrowserRouter,Route} from 'react-router-dom';

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
