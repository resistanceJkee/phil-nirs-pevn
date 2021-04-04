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
                return <p>Загрузка данных...</p>
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