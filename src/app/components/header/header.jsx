import React from "react";
import NavigationBar from "../navigationBar/navigationBar.jsx";
import Banner from "../banner/banner.jsx";
import './header.scss';

const Header = () => {
    return (
        <header className="header">
            <NavigationBar />
            <Banner/>            
        </header>
    )
}

export default Header;