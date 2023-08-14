import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddressForm from './pages/AddressForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './pages/Dashboard/Dashboard';
import Bag from './pages/Bag/Bag';
import CardDetails from './pages/CardDetails';
import Checkout from './pages/Checkout';


function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/"> 
          </Route>
          <Route path="/address">
            <AddressForm/>
          </Route>
          <Route path="/bag">
            <Bag/>
          </Route>
          <Route path="/dashboard">
            <Dashboard/>
          </Route>
          <Route path="/payment">
            <CardDetails/>
          </Route>
          <Route path="/checkout">
            <Checkout/>
          </Route>
        </Switch>
    </Router>
      
      
  )
}

export default App;
