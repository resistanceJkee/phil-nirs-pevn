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
                    <div class='school_item_description'>
                        lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet
                    </div>
                    <div class="school_item_header" >
                        <NavLink to={item.link}>{item.nameSchool}
                        </NavLink>
                    </div>
                    <NavLink to={item.link}>
                        <button class = 'school_item_button'>
                            <div class='school_item_button_line'></div>
                            Подробнее
                        </button>
                    </NavLink>
                    
                </div>))}
                
        </div>
    )
}

export default BodySchool;