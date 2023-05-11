import Logo from './logo.png';
import './Footer.css';
const Footer = () => {
  return (<>
    <footer className="c1">
      <div>
        <h3 className="c2">Best solutions from</h3>
        <img
          className='c3'
          src={Logo}
          alt='logo'
        />
      </div>
      <div className={'c4'}>
        <h3>DOL Max Overlaminate Films</h3>
        <h3>Why us</h3>
        <h3>Enquire now</h3>
      </div>
      <div className={'c5 text-md'}>
        <h3>Avery Dennison Overlaminate </h3>
        <h3>Avery Dennison Overlaminate Films </h3>
        <h3> Avery Dennison Digital Overlaminate Films </h3>
        <h3> Avery Dennison DOL Max</h3>
      </div>
      <div className={'c6 text-md'}>
        <h3>Overlaminate</h3>
        <h3>Overlaminate Films</h3>
        <h3>Overlaminate Films Digital</h3>
      </div>
    </footer>
    <footer className='c7 text-md'>
      © 2023 Avery Dennison Label Packaging Material. All rights reserved.
    </footer>
  </>
  );
};

export default Footer;
