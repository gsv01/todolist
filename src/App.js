
import './App.css';



import {FORM} from './form';
import {DISPLAY } from './display'; 
import {COMPLETED} from './completed';
import {NAV} from './nav';


import {BrowserRouter,Route,Switch} from 'react-router-dom';


function App() {
  return (
    <div>
        <h1 align='center'>My task list</h1>
      <FORM></FORM>
      <BrowserRouter>
      <NAV></NAV>

        <Switch>
          <Route path='/' exact component={DISPLAY}></Route>
          <Route path='/completed' exact component={COMPLETED}></Route>
        </Switch>    
    </BrowserRouter>
 
       
    </div>
  );
}

export default App;
