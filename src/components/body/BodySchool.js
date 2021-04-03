import React from 'react';
import {NavLink} from "react-router-dom";
import "./style-body.css";

const BodySchool = () => {
    return (
        <div className="wrapper">
            <NavLink to="/miletskaya_school">Милетская школа</NavLink>
            <NavLink to="/efesskaya_school">Эфесская школа</NavLink>
            <NavLink to="/pifagor_scholl">Пифагорейская школа</NavLink>
            <NavLink to="/eleiskaya_school">Элейская школа</NavLink>
            <NavLink to="/atomic_school">Атомисты</NavLink>
            <NavLink to="/sofists_school">Софисты</NavLink>
            <NavLink to="/socrat_school">Философия Сократа</NavLink>
            <NavLink to="/platon_school">Философия Платона</NavLink>
            <NavLink to="/aristotel_school">Философия Аристотеля</NavLink>
            <NavLink to="/epic_school">Эпикуреизм</NavLink>
            <NavLink to="/sceptic_school">Школа скептиков</NavLink>
            <NavLink to="/stoik_school">Школа стоиков</NavLink>
            <NavLink to="/kinik_school">Школа киников</NavLink>
        </div>
    );
};

export default BodySchool;