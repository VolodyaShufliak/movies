import { useEffect, useState } from 'react';
import useMoviesService from '../../../services/film-service';
import MoviesList from '../../movies-list/movies-list';
import SortPanel from '../../sort-panel/sort-panel';
import './main-page.scss'
import MyPagination from '../../Pagination/pagination';


const MainPage = (props) => {
    
    const [sortGenres,setSortGenres] = useState([]);




    const addFilterGenre = (newGenreId) => {
        setSortGenres(sortGenres=>[...sortGenres,newGenreId])
    }
    const removeFilterGenre = (genreId) => {
        const index =sortGenres.findIndex(elem=>elem===genreId);
        setSortGenres(sortGenres=>[...sortGenres.slice(0,index),...sortGenres.slice(index+1)]);
    }

    
    return (
        <div className='filmswithsort'>
            <SortPanel genres={props.genres} addFilterGenre={addFilterGenre} removeFilterGenre={removeFilterGenre} setCurrentPage={props.setCurrentPage}/>
            <div>
                <MoviesList activePage={props.activePage}  setCurrentPage={props.setCurrentPage} currentPage={props.currentPage} setTotalPages={props.setTotalPages} genres={props.genres} sortGenres={sortGenres} setActiveModal={props.setActiveModal} setActiveMovie={props.setActiveMovie}/>   
                <MyPagination totalPages = {props.totalPages<=500?props.totalPages:500} setCurrentPage={props.setCurrentPage} currentPage={props.currentPage}/>
            </div>
        </div>
    )
}

export default MainPage;