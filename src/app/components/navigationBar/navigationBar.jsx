import React from 'react';
import logo from '../../../assets/logo.png';
import Button from '../button/button.jsx';

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
      <nav>
          <figure>
              <img src={logo} alt="logo" />
          </figure>
          <ul>
              {
                  links.map((link, index) => <li key={index}>{link.name}</li>)
              }
          </ul>
          <div>
              <Button text="Log in" />
              <Button text="Try it free"/>
          </div>
    </nav>
  )
}

export default NavigationBar;