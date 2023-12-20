import React from 'react';
import Layout from "./Layout/MainLayout/MainLayout";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ShowFilmInfo from "./Layout/ShowInfoFilm/ShowInfoFilm";
import InfoFilm from "./components/InfoFilm/InfoFilm";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<ShowFilmInfo/>}/>
                    <Route path='/home' element={<ShowFilmInfo/>}>
                        <Route index element={<p className='empty'>FIND YOUR FILM</p>}/>
                        <Route path=':id' element={<InfoFilm/>}/>
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
