import {Component} from 'react';

class School extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            texts: []
        }
    }
    componentDidMount() {
        fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        texts: result.drinks
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
        const {error, isLoaded, texts} = this.state;
        console.log(isLoaded);
        if (error) {
            return <p>Error</p>
        } else {
            if (!isLoaded) {
                return <p>Loading...</p>
            } else {
                return (
                    <ul>
                        {texts.map(item => (
                            <li>
                                {item.strDrink}
                            </li>
                        ))}
                    </ul>
                )
            }
        }
    }
}

export default School;