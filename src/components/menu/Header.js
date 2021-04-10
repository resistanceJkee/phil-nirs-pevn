import React from 'react';
import {NavLink} from "react-router-dom";
import "./header-style.css";

const Header = () => {
    return (
        <div className="head">
            <header>
                <NavLink exact to="/" activeClassName="active-link">Главная</NavLink>
                <NavLink to="/test" activeClassName="active-link">Тест</NavLink>
            </header>
        </div>
    );
};

export default Header;