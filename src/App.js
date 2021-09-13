import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import injectContext from './store/appContext';

import Home from './views/home';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  )
}

export default injectContext(App);
