import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddressForm from './pages/AddressForm';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/"> 
          </Route>
          <Route path="/adress">
            <AddressForm/>
          </Route>
        </Switch>
    </Router>
      
      
  )
}

export default App;
