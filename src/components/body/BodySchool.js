import React from 'react';
import {NavLink} from "react-router-dom";
import "./style-body.css";

const BodySchool = (props) => {
    const data = props.data;
    return (
        <div className="wrapper">
            {data.map(item => (<NavLink to={item.link}>{item.nameSchool}</NavLink>))}
        </div>
    )
}

export default BodySchool;