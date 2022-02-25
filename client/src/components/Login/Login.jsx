import React from 'react';
import {Link} from 'react-router-dom';
import '../Login/Login.css';
import covervideo from '../utils/video1.mp4';

const Login = () => {
  return (
    <div className='ancestro'>
      <video className='video' src={covervideo} autoPlay loop muted ></video>
      <div>
        <h1 className='text'>Country's App</h1>
        <Link className="link"to="/home">Explore our world!</Link>
      </div>
    </div>
  )};

export default Login;

