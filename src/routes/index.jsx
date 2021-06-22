import React from 'react';
import Home from '../pages/Home';
import Details from '../pages/Details';

import { Route, Switch} from "react-router-dom";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/:id" component={ Details } />
      <Route path="/" component={Home}/>
    </Switch>
  )
}

export default Routes;