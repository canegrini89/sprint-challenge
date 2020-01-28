import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Navbar from './components/Navbar';
import Calculator from './components/Calculator';
import Choices from './components/Choices';
import Images from './components/Images';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/calculator' component={Calculator} />
        <Route exact path='/choices' component={Choices} />
        <Route exact path='/images' component={Images} />
        <Redirect to='/calculator' />
      </Switch>
    </>
  );
}

export default App;
