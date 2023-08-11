import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CardDetails from './pages/CardDetails';



function App() {
  return (
    <Router>
        <Switch>
          <Route path="/"> 
            <CardDetails/>
          </Route>
        </Switch>
    </Router>
      
      
  )
}

export default App;
