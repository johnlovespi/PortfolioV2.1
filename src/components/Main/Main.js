import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home/Home.js';
import Project1 from '../Projects/Project1.js';
import Project2 from '../Projects/Project2.js';
import Project3 from '../Projects/Project3.js';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/project1' component={Project1}/>
      <Route path='/project2' component={Project2}/>
      <Route path='/project3' component={Project3}/>
    </Switch>
  </main>
)

export default Main;
