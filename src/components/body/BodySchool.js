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
                <div key={item.link} className='school_item' style={{backgroundImage: "url(" + linkToAssets + i++ + extension + ")"}}>
                    <div className='school_item_description'>
                        <p className="school_item_description_intro">
                            {item.intro}
                        </p>
                    </div>
                    <div className="school_item_header" >
                        {item.nameSchool}
                    </div>
                    <NavLink to={item.link}>
                        <button className='school_item_button'>
                            <div className='school_item_button_line'/>
                            Подробнее
                        </button>
                    </NavLink>
                    
                </div>))}
                
        </div>
    )
}

export default BodySchool;