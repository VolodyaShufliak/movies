import AppHeader from "../app-header/app-header"
import './app.scss'
import MainPage from "../pages/main-page";
import Modal from "../app-modal/app-modal";
import { useState } from "react";



const App = () => {
    const [activeModal,setActiveModal] = useState(false);
    const [activeMovie,setActiveMovie] = useState(null);
    return(
        <div className="app">
            <AppHeader/>
            <main>
                <MainPage 
                setActiveModal={setActiveModal}
                setActiveMovie ={setActiveMovie} /> 
            </main>
            <Modal active={activeModal} setActive={setActiveModal} children={activeMovie} /> 
        </div>
    )
}

export default App;