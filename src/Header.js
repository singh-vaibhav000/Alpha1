import React from 'react';
import './Header.css';
// import ContactForm from './Contact';
import Logo from './logo.png';
import Banner from './banner.png';
import H1 from './assets/H1.svg';

function Header() {
  return (<>
    <div
      className=""
      style={{
        backgroundImage: `url(${Banner})`
      }}
    >
      <div className="inner ">
        <img
          src={Logo}
          className="wid"
          alt='avery dennison'
        />
        <div className='txt'>
          Take your graphics protection to the next level with DOL Max overlaminates
        </div>
        <div className='txt1'>
          Pair with MPI 1105 wrapping film for ramped up protection
        </div>
        <div className='a1'>
          <div className='a2'>
            <img
              src={H1}
              className='a3'
              alt='avery dennison'
            />
            <div
              className='a4'
            >
              Maximum Durability
            </div>
          </div>
          <div className='a2'>
            <img
              src={H1}
              className='a3'
              alt='avery dennison'
            />
            <div
              className='a4'
            >
              Enhanced Appearance
            </div>
          </div>
          <div className='a2'>
            <img
              src={H1}
              className='a3'
              alt='avery dennison'
            />
            <div
              className='a4'
            >
              High Gloss Finish
            </div>
          </div>
        </div>
      </div>
    </div>
  </>

  );
}

export default Header;