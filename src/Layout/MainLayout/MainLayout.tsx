import {Outlet} from "react-router-dom";
import Header from "../../components/Header/Header";
import './MainLayout.css'

const Layout = () => {
    return (
        <>
            <Header/>

            <main className='main'>
                <Outlet/>
            </main>
        </>
    )
};

export default Layout;