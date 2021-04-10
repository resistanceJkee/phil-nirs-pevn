import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

class Test extends Component {
    constructor(props) {
        super(props);
        this.ref = React.createRef();
        this.state = {
            arrayMyAnswers: [],
            currentAnswer: "",
            question: "",
            answers: [],
            trueAnswer: "",
            id: 1,
            countQuestions: 0,
            nextComponent: false
        }
    }

    componentDidMount() {
        fetch("http://127.0.0.1:8000/get_question/1")
            .then(res => res.json())
            .then(
                (res) => this.setState({
                    question: res.question,
                    answers: res.answers,
                    trueAnswer: res.trueAnswer,
                    currentAnswer: res.answers[0]
                })
            )
        fetch("http://127.0.0.1:8000/get_count/")
            .then(res => res.json())
            .then(
                (res) => this.setState({countQuestions: res})
            )
    }

    getNextQuestion = () => {
        this.pushToArrayAnswers();
        let nextId = this.state.id;
        if (nextId < this.state.countQuestions) {
            fetch(`http://127.0.0.1:8000/get_question/${this.state.id + 1}`)
                .then(res => res.json())
                .then(
                    (res) => this.setState({
                        question: res.question,
                        answers: res.answers,
                        trueAnswer: res.trueAnswer,
                        id: nextId+1,
                        currentAnswer: res.answers[0]
                    })
                );
            this.setChecked();
        } else {
            this.setState({
                nextComponent: true
            })
        }

    }

    setChecked = () => {
        this.ref.current.checked = true;
    }

    pushToArrayAnswers = () => {
        let currentAnswer = this.state.currentAnswer;
        this.state.arrayMyAnswers.push(this.state.trueAnswer === currentAnswer);
    }

    getValueSelectedButton = (e) => {
        this.setState({
            currentAnswer: e.target.value
        });
    }

    render() {
        const answers = this.state.answers;
        const question = this.state.question;
        if (!this.state.nextComponent) {
            return (
                <div>
                    <h1 className="school_header">Тест на знание темы</h1>
                    <div className='test_container'>
                            <NavLink to="/" className="go_back test_b">
                                <button className='school_item_button test_b'>
                                    <div className='school_item_button_line'/>
                                    ←
                                </button>
                            </NavLink>

                        <div className="test_question">{question}</div>
                        <div className="test_variants">
                            <div class="radio">
                                <input className="custom-radio" type="radio" id="color-1" name="color" value={answers[0]}
                                       onClick={e => this.getValueSelectedButton(e)} defaultChecked ref={this.ref}/>
                                <label for="color-1">{answers[0]}</label>
                            </div>

                            <div className="radio">
                                <input className="custom-radio" type="radio" id="color-2" name="color" value={answers[1]}
                                       onClick={e => this.getValueSelectedButton(e)} />
                                <label for="color-2">{answers[1]}</label>
                            </div>

                            <div className="radio">
                                <input className="custom-radio" type="radio" id="color-4" name="color" value={answers[2]}
                                       onClick={e => this.getValueSelectedButton(e)} />
                                <label for="color-4">{answers[2]}</label>
                            </div>

                            <div className="radio">
                                <input className="custom-radio" type="radio" id="color-5" name="color" value={answers[3]}
                                       onClick={e => this.getValueSelectedButton(e)} />
                                <label for="color-5">{answers[3]}</label>
                            </div>
                        </div>
                        <button className='school_item_button' onClick={this.getNextQuestion}>
                            <div className='school_item_button_line'/>
                            Ответить
                        </button>
                    </div>
                </div>
            );
        } else {
            return(
                <div className="results_test">
                    <h1 className="school_header">Результат вашего теста</h1>
                    <div className='center_res'><b>%</b></div>
                </div> )
        }
    }
}


export default Test;
