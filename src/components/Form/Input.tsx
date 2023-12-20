import {FormEventHandler} from 'react';
import './Input.css'

interface IForm {
    onInputHandler: FormEventHandler<HTMLInputElement>
    value: string
}

const Input = (props: IForm) => {
    return (
        <div className='search_film'>
            <label htmlFor="input" className='label'>Find film</label>
            <input type="text" onInput={props.onInputHandler} value={props.value} className='input'/>
        </div>
    )
};

export default Input;