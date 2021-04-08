import {Component} from 'react';

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
        fetch(`http://127.0.0.1:8000/get_text/${this.props.folder}`)
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

    render () {
        const {error, isLoaded, text} = this.state;
        if (error) {
            console.log(error);
            return <p>Произошла ошибка. Попробуйте перезагрузить страницу</p>;
        } else {
            if (!isLoaded) {
                return (
                    <div>
                        <div class="cssload-dots">
                        <div class="cssload-dot"></div>
                        <div class="cssload-dot"></div>
                        <div class="cssload-dot"></div>
                        <div class="cssload-dot"></div>
                        <div class="cssload-dot"></div>
                        </div>
        
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <filter id="goo">
                                <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="12" ></feGaussianBlur>
                                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0	0 1 0 0 0	0 0 1 0 0	0 0 0 18 -7" result="goo" ></feColorMatrix>
                                
                            </filter>
                        </defs>
                    </svg>
                    </div>)
            } else {
                return (
                    <div>
                        <div>Школа</div>
                        <div>{text}</div>
                    </div>
                )
            }
        }
    }
}

export default School;