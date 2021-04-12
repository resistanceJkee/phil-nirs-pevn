import {Component} from 'react';
import {NavLink} from "react-router-dom";
import "./style-school.css";

class School extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            text: ""
        }
    }

    componentDidMount() {
        fetch(`http://127.0.0.1:8000/get_text/${this.props.engName}`)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        text: result
                    })
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    })
                }
            )
    }

    render() {
        const {error, isLoaded, text} = this.state;
        if (error) {
            console.log(error);
            return <p className="error">Произошла ошибка. Попробуйте перезагрузить страницу</p>;
        } else {
            if (!isLoaded) {
                return (
                    <div>
                        <div className="cssload-dots">
                            <div className="cssload-dot"/>
                            <div className="cssload-dot"/>
                            <div className="cssload-dot"/>
                            <div className="cssload-dot"/>
                            <div className="cssload-dot"/>
                        </div>

                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <filter id="goo">
                                    <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="12"/>
                                    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0	0 1 0 0 0	0 0 1 0 0	0 0 0 18 -7" result="goo"/>
                                </filter>
                            </defs>
                        </svg>
                    </div>
                )
            } else {
                return (
                    <div>
                        <h1 className="school_header">{this.props.nameSchool}</h1>
                        <div className="school_content">
                            <NavLink to="/" className="go_back to_hidden">
                                <button className='school_item_button '>
                                    <div className='school_item_button_line'/>
                                    ←
                                </button>
                            </NavLink>
                            <NavLink to="/test" className="to_test to_hidden">
                                <button title='Пройти тест' className='school_item_button button-school'>
                                    <div className='school_item_button_line'/>
                                    📄
                                </button>
                            </NavLink>
                            <ul>
                                <a href='#presenters'><li>Основные представители</li></a>
                                <a href='#common'><li>Информация о школе</li></a>
                                <a href='#ide'><li>Основные идеи учения</li></a>
                            </ul>
                        </div>
                        <div id='presenters' className="school_presenters">
                            <b>Основные представители</b> - {text[0]}
                        </div>
                        <div id='common' className="common_info">Основная информация</div>
                        <p className='text-justify'>{text[1]}</p>
                        <div id='ide' className="common_info">Основные идеи</div>
                        <p className="text-justify toMargin">{text[2]}</p>
                    </div>
                )
            }
        }
    }
}

export default School;