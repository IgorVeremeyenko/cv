import { Box } from "@mui/system";
import {
    BrowserRouter,
    Routes,
    Route,
    useLocation,
  } from "react-router-dom";
import { Main } from "./pages/Main";
import { Portfolio } from "./pages/Portfolio";
import { StartPage } from "./pages/StartPage";
import { CSSTransition } from 'react-transition-group';
import App from "../App";
import AboutMe from "./pages/AboutMe";

const MyRoutes = () => {
   
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<StartPage/>} />
                <Route path='/main/*' element={<Main/>}/>
                <Route path="*" element={<h2>Ресурс не найден</h2>} />
            </Routes>
        </BrowserRouter>
    )
}

export default MyRoutes;