import React from 'react';
import {NavLink} from "react-router-dom";
import "./header-style.css";

const Header = () => {
    return (
        <div className="head">
            <header>
                <NavLink to="/">Главная</NavLink>
                <NavLink to="/test">Тест</NavLink>
            </header>
        </div>
    );
};

export default Header;