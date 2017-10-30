import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Header extends Component {

componentDidMount(){
  this.openAbout();
}

openAbout(){
document.querySelector('.button').addEventListener('click', function(){
  var buttonId = this.getAttribute('id');
  document.getElementById('about-container').setAttribute('class', buttonId);
  document.body.setAttribute('class', 'about-active');
})
}

closeAbout(){
    document.getElementById('about-container').setAttribute('class', 'one out');
    document.body.removeAttribute('class', 'about-active');
}

render() {
    return (
      <div id='nav-container'>
        <ul id='navbar' className='nav navbar flex-column justify-content-end align-items-center'>
            <li className='nav-item vertical-text mb-auto p-2'>
              <a className='nav-link' href='/'>Darryl J Zeigler</a>
            </li>
            <li className='nav-item vertical-text'>
              <a className='nav-link' href='mailto:dzeig.j@gmail.com'>Dzeig.j@gmail.com</a>
            </li>
            <li id='one' className=' button nav-item vertical-text'>
              <span id='about-btn'>about</span>
            </li>
          </ul>

          <div id='about-container'>
            <div className='about-background'>
              <div className='about'>
                <div className='about-text flex justify-content-center'>
                <h2>Hello</h2>
                <p>I am lorem ipsum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p>I am also associated with the super rare cats;</p>
                  <br />
                  <p>Feel free to view my <a className='link line' href="https://drive.google.com/file/d/0B-qWJ5BL7587dFVMY1J0Nk83Qkk/view?usp=sharing">Resume,</a> or to connect with me on social media.</p>
                <div className='icons'>
                  <a href='https://twitter.com/dzeignyc' target='_blank'><img className='socialmedia' src={require('../Images/twitter.png')} alt='Twitter'/></a>
                  <a href='https://github.com/dzeignyc' target='_blank'><img className='socialmedia' src={require('../Images/github.png')} alt='Github'/></a>
                  <a href='https://www.linkedin.com/in/dzeignyc/' target='_blank'><img className='socialmedia' src={require('../Images/linkedin.png')} alt='Linkedin'/></a>
                </div><br/>
                <h5 id='close' onClick={(e)=>this.closeAbout(e)}>x</h5>
              </div>
                <svg className='about-svg' xmlns='http://www.w3.org/2000/svg' width='100%' height='100%' preserveAspectRatio='none'>
                </svg>
              </div>
            </div>
          </div>
      </div>
    )
  }
}
export default Header;
