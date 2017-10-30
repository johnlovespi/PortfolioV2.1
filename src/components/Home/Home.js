import React from 'react';
import Particles from '../Particles/Particles.js';
import {Link} from 'react-router-dom';

const Home = () => (
  <div>
    <ul className='project-list'>
      <li><Link to='/project1'>Lorem Ipsum</Link></li><br />
      <li><Link to='/project2'>Lorem Ipsum</Link></li><br />
      <li><Link to='/project3'>Lorem Ipsum</Link></li>
  </ul>
  <Particles/>
  <div id="particles-js">
    <canvas className="particles-js-canvas-el"></canvas>
  </div>
</div>
)

export default Home;
