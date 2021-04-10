import React from 'react';

const Test = (props) => {
    return (
        <div>
            <h1 className="school_header">Тест на знание темы</h1>
            <div className='test_container'>
                
                <div className="test_question">Некоторый вопрос, на который тебе бы стоило ответить, блядина</div>
                <div className="test_variants">
                    <div class="radio">
                        <input className="custom-radio" type="radio" id="color-1" name="color" value="indigo" />
                        <label for="color-1">Indigo</label>
                    </div>

                    <div className="radio">
                        <input className="custom-radio" type="radio" id="color-2" name="color" value="red" />
                        <label for="color-2">Red</label>
                    </div>

                    <div className="radio">
                        <input className="custom-radio" type="radio" id="color-4" name="color" value="yellow" />
                        <label for="color-4">Yellow</label>
                    </div>

                    <div className="radio">
                        <input className="custom-radio" type="radio" id="color-5" name="color" value="green" />
                        <label for="color-5">Green</label>
                    </div>
                </div>
                <button title='Пройти тест' className='school_item_button'>
                    <div className='school_item_button_line'/>
                    Ответить
                </button>
            </div>
        </div>    
    );
};

export default Test;
