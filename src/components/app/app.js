import AppHeader from "../app-header/app-header"
import './app.scss'
import MainPage from "../pages/main-page/main-page";
import Modal from "../app-modal/app-modal";
import { useState } from "react";
import { BrowserRouter as Router , Routes,Route } from "react-router-dom";


const App = () => {
    const [activeModal,setActiveModal] = useState(false);
    const [activeMovie,setActiveMovie] = useState(null);
    const [currentPage,setCurrentPage] = useState(1);
    return(
        <Router>
            <div className="app">
                <AppHeader setCurrentPage={setCurrentPage}/>
                <main>
                    <Routes>
                        <Route path="/" element={<MainPage 
                                                setActiveModal={setActiveModal}
                                                setActiveMovie ={setActiveMovie}
                                                activePage = {'Movies'} 
                                                currentPage={currentPage}
                                                setCurrentPage={setCurrentPage}/>}/>
                        <Route path="/tv" element={<MainPage 
                                                setActiveModal={setActiveModal}
                                                setActiveMovie ={setActiveMovie}
                                                activePage = {'TV'} 
                                                currentPage={currentPage}
                                                setCurrentPage={setCurrentPage}/>}/>
                         
                    </Routes>
                </main>
                <Modal active={activeModal} setActive={setActiveModal} children={activeMovie} /> 
            </div>
        </Router>

    )
}

export default App;