import React, { useState } from 'react';
import back from './assets/back.png';
import right from './assets/right.png';
import ContactForm from './Contact';
import './Main1.css';
function Main1() {
  const [open, setOpen] = useState(false);

  return (<>
    {open && <ContactForm />}
    <div
      className='back1'
      style={{
        backgroundImage: `url(${back})`,
      }}
    >
      <div className="width1">
        <div
          className='a11'
        >
          DOL Max Overlaminate Films
        </div>
        <div
          className='a21'
        >
          Printed graphics deserve maximum protection, DOL Max is the solution.
        </div>
        <div
          className='a31'
        >
          Features & Benefits:
        </div>
        <ul className='a41'>
          <li className='a51'>
            Premium vertical durability of up to 7 years and up to 2 years horizontal durability protection.
          </li>
          <li className='a51'>
            The high gloss finish enhances the appearance of graphics and adds a special touch to help your graphics stand out.
          </li>
          <li className='a51'>
            Our digital overlaminates can be used on a variety of substrates, including banners, vehicle graphics, outdoor signage, and more.
          </li>
        </ul>

        <button
          className='flexx1'
          style={{
            backgroundColor: "#F26621",
            outline: "none",
            color: "white",
            border: "none",
            padding: "10px 40px",
            borderRadius: "6px",
            marginTop: "40px"
          }}
          onClick={() => { setOpen(prevState => !prevState) }}
        >
          <p className='a61'>
            Inquire now
          </p>
          <img
            className='a71'
            src={right}
            alt='right'
          />
        </button>
      </div>
    </div>
  </>

  );
}

export default Main1;