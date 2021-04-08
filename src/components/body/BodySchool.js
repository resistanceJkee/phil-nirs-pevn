import React from 'react';
import {NavLink} from "react-router-dom";
import "./style-body.css";

const BodySchool = (props) => {
    const data = props.data;
    let i = 0;
    let linkToAssets = "../static/assets/";
    let extension = ".png";
    return (
        <div className="wrapper">
            {data.map(item => (
                <div class = 'school_item' style={{backgroundImage: "url(" + linkToAssets + i++ + extension + ")"}}>
                    <div class="school_item_header" >
                        <NavLink to={item.link}>{item.nameSchool}
                        </NavLink>
                    </div>
                        <button class = 'school_item_button'>
                            <NavLink to={item.link}>Подробнее
                            </NavLink>
                        </button>
                    
                </div>))}
                
        </div>
    )
}

export default BodySchool;