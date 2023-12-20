import {Outlet} from "react-router-dom";
import FilmSearchApp from "../../containers/FilmSearchApp/FilmSearchApp";
import './ShowInfoFIlm.css'

const ShowFilmInfo = () => {
    return (
        <div className='outlet'>
            <FilmSearchApp/>
            <section className='section'>
                <Outlet/>
            </section>
        </div>
    )
};

export default ShowFilmInfo;