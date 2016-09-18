import React from 'react';
import {Router,Route,hashHistory,IndexRoute} from 'react-router';
import App from './App';
import Home from './Home';
import Work from './Work';
import About from './About';
import Blog from './Blog';

class Routes extends React.Component {
  render () {
    return(
      <Router history={hashHistory}>
        <Route path='/' component={App}>
          <IndexRoute component={Home} />
          <Route path='/work' component={Work} />
          <Route path='/about' component={About} />
          <Route path='/blog/:title' component={Blog} />
        </Route>
      </Router>
    )
  }
}

export default Routes;
