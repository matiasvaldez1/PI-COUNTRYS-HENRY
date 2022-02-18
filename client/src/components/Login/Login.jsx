import React from 'react';
import {Link} from 'react-router-dom';
import '../Login/Login.css';
import covervideo from '../utils/video1.mp4';

const Login = () => {
  return (
    <div>
      <video className='video' src={covervideo} autoPlay loop muted ></video>
        <Link className="link"to="/home">Explore our world!</Link>
    </div>
  )};

export default Login;

