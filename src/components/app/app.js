import AppHeader from "../app-header/app-header"
import AppHead from "../app-head/app-head"
import './app.scss'
import MainPage from "../pages/main-page/main-page";
import Modal from "../app-modal/app-modal";
import { useEffect, useState } from "react";
import { BrowserRouter as Router , Routes,Route } from "react-router-dom";
import SearchPage from "../pages/search-page/search-page";
import useMoviesService from "../../services/film-service";


const App = () => {
    const [activeModal,setActiveModal] = useState(false);
    const [activeMovie,setActiveMovie] = useState(null);
    const [currentPage,setCurrentPage] = useState(1);
    const [totalPages,setTotalPages] = useState(1);
    const [genres,setGenres] = useState([]);
    const {getAllGenres} = useMoviesService();
    useEffect(()=>{
        loadingGenres(); 
    },[])
    const loadingGenres = () => {
        getAllGenres()
            .then(loadedGenres)
    }

    const loadedGenres = (newgenres) => {
        setGenres(newgenres);
    }
    return(
        <Router>
            <div className="app">
                <AppHead setCurrentPage={setCurrentPage} />
                <main>
                    <Routes>
                        <Route path="/" element={<MainPage 
                                                genres={genres}
                                                setActiveModal={setActiveModal}
                                                setActiveMovie ={setActiveMovie}
                                                activePage = {'Movies'} 
                                                currentPage={currentPage}
                                                setCurrentPage={setCurrentPage}
                                                setTotalPages = {setTotalPages}
                                                totalPages={totalPages}/>}/>
                        <Route path="/tv" element={<MainPage 
                                                genres={genres}
                                                setActiveModal={setActiveModal}
                                                setActiveMovie ={setActiveMovie}
                                                activePage = {'TV'} 
                                                currentPage={currentPage}
                                                setCurrentPage={setCurrentPage}
                                                setTotalPages = {setTotalPages}
                                                totalPages={totalPages}/>}/>
                        <Route path="/search" element={<SearchPage
                                                genres={genres}
                                                setActiveModal={setActiveModal}
                                                setActiveMovie ={setActiveMovie} 
                                                activePage = {'Search'} 
                                                currentPage={currentPage}
                                                setCurrentPage={setCurrentPage}
                                                setTotalPages = {setTotalPages}
                                                totalPages={totalPages}/>}/>
                    </Routes>
                </main>
                <Modal active={activeModal} setActive={setActiveModal} children={activeMovie} /> 
            </div>
        </Router>

    )
}

export default App;