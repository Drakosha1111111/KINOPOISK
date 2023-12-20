import './InfoFilm.css'
import {useParams} from "react-router-dom";
import {useCallback, useEffect, useReducer} from "react";
import axios from "axios";
import {reducer} from "../../store/reducer";
import {initialState} from '../../store/reducer'
import {FILM_INFO} from "../../store/actionReducer";

const InfoFilm = () => {
    const {id} = useParams();
    const [state, dispatch] = useReducer(reducer, initialState)
    const {filmInfo} = state;

    const getData = useCallback(async () => {
        const response = await axios.get(`https://api.tvmaze.com/shows/${id}`);

        dispatch({
            type: FILM_INFO, payload: {
                name: response.data.name,
                type: response.data.type,
                language: response.data.language,
                summary: response.data.summary,
                premiered: response.data.premiered,
                ended: response.data.ended,
                image: response.data.image?.original
            }
        });
    }, [id]);

    useEffect(() => {
        getData().then(r => r);
    }, [getData]);

    return (
        <div className='film_card'>
            <div>
                <img src={filmInfo.image} alt="poster" className='image'/>
            </div>
            <div className='info_about'>
                <h2 className='name_film'>{filmInfo.name}</h2>
                <h3>About Film</h3>
                <div className='info'>
                    <p className='subtitle'>Type:</p>
                    <p className='subtitle_info'>{filmInfo.type}</p>
                </div>
                <div className='info'>
                    <p className='subtitle'>Language:</p>
                    <p className='subtitle_info'>{filmInfo.language}</p>
                </div>
                <div className='info'>
                    <p className='subtitle'>Info:</p>
                    <p className='subtitle_info' dangerouslySetInnerHTML={{__html: filmInfo.summary}}></p>
                </div>
                <div className='info'>
                    <p className='subtitle'>Premiered:</p>
                    <p className='subtitle_info'>{filmInfo.premiered}</p>
                </div>
                <div className='info'>
                    <p className='subtitle'>Ended:</p>
                    <p className='subtitle_info'>{filmInfo.ended}</p>
                </div>
            </div>
        </div>
    )
};

export default InfoFilm;