import React from 'react';
import flower from './assets/flower.png';
import right from './assets/right.png';
import './Main2.css';
const data = [
  {
    heading: "Quality Products",
    description: "Our digital overlaminate films are made from the highest quality materials and are designed to provide superior protection and appearance to your digital prints.",
    image: "quality.svg"
  },
  {
    heading: "Multiple Options",
    description: "We offer DOL Max in a 2.1 mil gloss finish and 1.3 mil optically clear, gloss finish. This allows you to choose the perfect film thickness level for your specific application, ensuring your graphics look the best and stand out from the competition.",
    image: "quality.svg"
  },
  {
    heading: "Expertise and Support",
    description: "Our team of experts are available to provide guidance and support throughout the entire process, from selecting the right product for your needs to installation and beyond. ",
    image: "quality.svg"
  },
  {
    heading: "Durability Assurance",
    description: "Trust our products with confidence, as we offer industry leading durability assurance for our overlaminate films.",
    image: "quality.svg"
  }
]

function Main2() {
  return (
    <div className='flexxx'>
      <img
        className='w1'
        src={flower}
        alt='flower'
      />
      <div className="w2">
        <div className='w3'>
          Why us?
        </div>
        <div className='space-y-8'>
          {
            data.map((element) => {
              return <div className='flex2'>
                <div className='w6'>
                  <img
                    src={element.image}
                    alt='img1'
                  />
                </div>
                <div className='w7'>
                  <div className='w8'>
                    {element.heading}
                  </div>
                  <div className='w9'>
                    {element.description}
                  </div>
                </div>
              </div>
            })
          }
        </div>
        <button
          className='w10'
          style={{
            backgroundColor: "#F26621",
            outline: "none",
            color: "white",
            border: "none",
            padding: "10px 40px",
            borderRadius: "6px",
          }}>
          <p className='w11'>
            Request a call back
          </p>
          <img
            className='w12'
            src={right}
            alt='right'
          />
        </button>
      </div>
    </div>
  );
}

export default Main2;