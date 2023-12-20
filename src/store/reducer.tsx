import {CHANGE_VALUE, FILM_INFO, FILM_NAME} from "./actionReducer";

interface IFilmsNames {
    name: string
    id: string
    image: string
}

interface IFilmInfo {
    name: string
    type: string
    language: string
    summary: string
    premiered: string
    ended: string
    image: string
}

interface IState {
    inputValue: string
    filmsNames: IFilmsNames[]
    filmInfo: IFilmInfo
}

export const initialState: IState = {
    inputValue: '',
    filmsNames: [],
    filmInfo: {
        name: '',
        type: '',
        language: '',
        summary: '',
        premiered: '',
        ended: '',
        image: ''
    }
}

interface IAction {
    type: string;
    payload: any;
}

export const reducer = (state: IState, action: IAction) => {
    switch (action.type) {
        case CHANGE_VALUE:
            return {...state, inputValue: action.payload};
        case FILM_NAME:
            return {...state, filmsNames: action.payload};
        case FILM_INFO:
            return {...state, filmInfo: action.payload};
        default:
            return state;
    }
};