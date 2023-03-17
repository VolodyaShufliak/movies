import { useEffect, useState } from 'react';
import useMoviesService from '../../services/film-service';
import Modal from '../app-modal/app-modal';
import MoviesList from '../movies-list/movies-list';
import SortPanel from '../sort-panel/sort-panel';
import './main-page.scss'



const MainPage = (props) => {
    const [genres,setGenres] = useState([]);
    const {getAllGenres} = useMoviesService();
    const [sortGenres,setSortGenres] = useState([]);
    
    useEffect(()=>{
        loadingGenres(); 
    },[])

    const addFilterGenre = (newGenreId) => {
        setSortGenres(sortGenres=>[...sortGenres,newGenreId])
    }
    const removeFilterGenre = (genreId) => {
        const index =sortGenres.findIndex(elem=>elem===genreId);
        setSortGenres(sortGenres=>[...sortGenres.slice(0,index),...sortGenres.slice(index+1)]);
    }

    const loadingGenres = () => {
        getAllGenres()
            .then(loadedGenres)
    }

    const loadedGenres = (newgenres) => {
        setGenres(newgenres);
    }
    return (
        <div className='filmswithsort'>
            <SortPanel genres={genres} addFilterGenre={addFilterGenre} removeFilterGenre={removeFilterGenre}/>
            <MoviesList genres={genres} sortGenres={sortGenres} setActiveModal={props.setActiveModal} setActiveMovie={props.setActiveMovie}/>   
        </div>
    )
}

export default MainPage;