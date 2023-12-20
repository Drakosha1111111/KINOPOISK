import './FilmSearchApp.css'
import Input from "../../components/Form/Input";
import React, {useCallback, useEffect, useReducer} from "react";
import instance from "../../API/createAxios";
import {useNavigate} from "react-router-dom";
import {reducer} from "../../store/reducer";
import {initialState} from "../../store/reducer";
import {CHANGE_VALUE, FILM_NAME} from "../../store/actionReducer";


const FilmSearchApp = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const {filmsNames, inputValue} = state;

    const navigate = useNavigate();

    const onInputHandler = (e: React.FormEvent<HTMLInputElement>) => {
        dispatch({type: CHANGE_VALUE, payload: e.currentTarget.value});
    };

    const clickHandler = async (key: string) => {
        navigate('/home/' + key);

        dispatch({type: CHANGE_VALUE, payload: ''});
    };

    const getData = useCallback(async () => {
        const response = await instance.get(inputValue)
        const array = response.data.map((element: { show: { name: string, id: string, image: {original: string}}, }) => {
            return {name: element.show.name, id: element.show.id, image: element.show.image?.original}
        });

        dispatch({type: FILM_NAME, payload: array});
    }, [inputValue]);

    useEffect(() => {
        getData().then(r => r);
    }, [getData]);

    const render = filmsNames.map((element: { name: string, id: string, image: string}) => {
        return (
            <div onClick={() => clickHandler(element.id)}
                 key={element.id}
                 className='info_film_search'
            >
                <img src={element.image} alt="poster" className='poster_info'/>
                <p className='film_name'>{element.name}</p>
            </div>
        )
    })

    return (
        <div className='search'>
            <Input
                value={inputValue}
                onInputHandler={event => onInputHandler(event)}
            />
            <div className='guess_info'>
                {render}
            </div>
        </div>
    )
};

export default FilmSearchApp;