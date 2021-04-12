import React from 'react';
import {NavLink} from "react-router-dom";
import "./style-body.css";

const BodySchool = (props) => {
    const data = props.data;
    return (

        <div>
            <div className="main_info">
                <h1 className="school_header">Введение в тему</h1>
                Философия – наука, которая исследует природу вещей. А философ – исследователь, так писал Гераклит (ок. 544–480 до н.э.). Буквальный смысл философия носила такой: любовь к мудрости. А первыми, кто стал использовать эти термины в значении близкому к современному стали Платон и Аристотель. Античная философия — философия древних греков и римлян — просуществовала более 1000 лет, зародившись в VI веке до н.э. и завершив свой путь в 529 году, когда император Юстиниан закрыл последнюю языческую философскую школу — Платоновскую академию.
            </div>
            <div className="wrapper">
                {data.map(item => (
                    <div className='school_item'>
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
                                <div className='school_item_button_line'></div>
                                Подробнее
                            </button>
                        </NavLink>
                        
                    </div>))}

                    
            </div>
        </div>    
    )
}

export default BodySchool;