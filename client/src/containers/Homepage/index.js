import React from 'react';
import Header from '../../components/Header';
import {useHistory} from 'react-router-dom';
import background from '../../images/DNA2.jpg';
import './index.css';

function Homepage () {
  const history = useHistory();
    return (
      <div className="main-container">
        <Header />
        <img className="cover" src={background} alt="cover" />
        <div className='hero-container'>
          <h1 className='hero-title'>The most awaited !</h1>
          <h1 className='hero-des'>We present you a new learning platform using which you can enhance your learning abilities and technical skills.</h1>
          <button className='hero-btn' onClick={() => history.push('/register')} >Explore More</button>
        </div>
      </div>
    )
  }

export default Homepage;
