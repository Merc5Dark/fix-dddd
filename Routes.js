import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CardDetails } from './src/pages/CardDetails.js';

export const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/">
                    <CardDetails />
                </Route>
            </Switch>
        </Router>
    )
}
