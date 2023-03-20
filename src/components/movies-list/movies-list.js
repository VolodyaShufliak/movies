import './movies-list.scss'
import fotka from '../../resourses/fotka.jpg'
import { useEffect, useState } from 'react'
import useMoviesService from '../../services/film-service';
import MySpinner from '../spinner/mySpinner'
import ErrorMessage from '../errorMessage/ErrorMessage';
import SingleMovie from '../single-movie/single-movie';
import { memo } from 'react';


const MoviesList = memo((props) => {

    const [movies,setMovies] = useState([]);
    const {loading,error,getAllMovies,getAllTV,getSearchedContent} = useMoviesService();
    
    useEffect(()=>{
        console.log(props.sortGenres);
        loadAllMovies();
    },[props.sortGenres,props.currentPage,props.activePage,props.searchText,props.type])

    
    const loadAllMovies = () => {
        console.log(props.currentPage);
        console.log(props.activePage);
        if(props.activePage==='Movies'){
            getAllMovies(props.currentPage,props.sortGenres.join(','))
                .then(allMoviesLoaded)
        }else if(props.activePage==='TV'){
            getAllTV(props.currentPage,props.sortGenres.join(','))
                .then(allMoviesLoaded)
        }else if(props.activePage==='Search'){
            getSearchedContent(props.currentPage,props.type,props.searchText)
                .then(allMoviesLoaded)
        }
    }
    const allMoviesLoaded = ({res,totalPages}) => {
        setMovies(res);
        props.setTotalPages(totalPages);
    }


    const generateMovieGenres = (movieGenreIDs,allgenres) => {
        const namesOfGenres = [];
        for(let elem of movieGenreIDs ){
            const index = allgenres.findIndex(e=>e.id===elem);
            try{
                namesOfGenres.push(allgenres[index].name);
            }catch{
                continue;
            }
        }
        return namesOfGenres;
        
    }
    const viewMovies = movies.map(movie=>{
        let classNameForAvg ='filmlist_avarage';
        if (movie.avg>8) {
            classNameForAvg+=' avg_green'
        }else if(movie.avg>6){
            classNameForAvg+=' avg_yellow'
        }else{
            classNameForAvg+=' avg_red'
        }
        const allGenres =[...props.genres];
        const genreForFilm=generateMovieGenres(movie.genres,allGenres); 
        return(
            <li  className='filmlist_container_for' key={movie.id}>
                <div className='filmlist_container_for_item' 
                    onClick={()=>{ 
                        props.setActiveModal(true);
                        props.setActiveMovie(<SingleMovie singleMovie={{...movie,genres:genreForFilm}}/>)
                    }}>
                    <img src={movie.poster} alt={fotka}></img>
                    <div className='filmlist_filmdata'>
                        <span className='filmlist_filmdata_title'>{movie.title}</span>
                        <div className='filmlist_filmdata_genres'>{genreForFilm.length!==0?genreForFilm.join(', '):'No genres'}</div>
                    </div>
                    <span className={classNameForAvg}>{movie.avg}</span>                   
                </div> 
            </li>
            
        )
    })
    const isLoading = loading?<MySpinner/>:null;
    const isContent = !(loading || error)
    ?<>
        <ViewMovies viewMovies={viewMovies} />
     </>
    :null;
    const isError = error?<ErrorMessage/>:null;
    return (
        <div className='filmlist_wrapper'>
            {isLoading}
            {isContent}
            {isError}
        </div>
    )
})

const ViewMovies = memo(({viewMovies}) => {
    return(
        <>
           <ul className='filmlist_grid'> 
                {viewMovies}
            </ul>
        </>
    )
})

export default MoviesList;