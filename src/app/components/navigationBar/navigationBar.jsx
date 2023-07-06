import React from 'react';
import logo from '../../../assets/logo.png';
import Button from '../button/button.jsx';
import './navigationBar.scss';

const links = [
  { 
    name: "Job Search",
    link: "",
  },
  {
    name: "About",
    link: "",
  },
  {
    name: "Pricing",
    link: "",
  },
  {
    name: "Contact",
    link: "",
  },
];

const NavigationBar = () => {
  return (
    <nav className="navbar">
      <figure>
        <img src={logo} alt="logo" />
      </figure>
      <section className='navbar__section'>
        <ul className="navbar__links">
          {links.map((link, index) => (
            <li className="navbar__link" key={index}>
              {link.name}
            </li>
          ))}
        </ul>
        <div className='navbar__buttons'>
          <Button text="Log in" styles='login'/>
          <Button text="Try it free" styles='tryIt'/>
        </div>
      </section>
    </nav>
  );
}

export default NavigationBar;