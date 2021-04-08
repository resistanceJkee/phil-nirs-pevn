import './App.css';
import Header from "./components/menu/Header";
import {BrowserRouter, Route} from "react-router-dom";
import Test from "./components/test/Test";
import BodySchool from "./components/body/BodySchool";
import School from "./components/template-school/School";
import {React, Component} from "react";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isLoaded: false,
            error: null
        }
    }

    componentDidMount() {
        fetch("http://127.0.0.1:8000/get_schools/")
            .then(res => res.json())
            .then(
                (res) => {
                    this.setState({
                        data: res,
                        isLoaded: true
                    })
                },
                (err) => {
                    this.setState({
                        error: err,
                        isLoaded: true
                    })
                })
    }

    render() {
        const data = this.state.data;
        console.log(data);
        if (!this.state.isLoaded) {
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
                <BrowserRouter>
                    <div className="app">
                        <Header/>
                        <div className="school-wrapper">
                            <Route path="/" render={
                                (props) => (<BodySchool data={data}/>)
                            } exact/>
                        </div>
                        <div className="content-side">
                            <Route path="/test" component={Test}/>
                            {data.map(item => (
                                <Route path={item.link} render={(props) => (<School folder={item.folderName}/>)}/>
                            ))}
                        </div>
                    </div>
                </BrowserRouter>
            );
        }
    }
}

export default App;
