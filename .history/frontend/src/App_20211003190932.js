import "./app.css";
import {BrowserRouter,Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div >
    <Header/>    
      
      
      <Route path="/Map_admin" exact component={Map_admin}></Route>        
      
      
    </div>
    </BrowserRouter>
    
  );
  
}

export default App;
