import useHttp from "../hooks/http-hook";
import noimg from '../resourses/noimage.jpg'

const useMoviesService = () => {
    const _apiKey='84fa4848226ff67ad9781245eb9c7e9b';
    const _url=`https://api.themoviedb.org`;
    const {loading,request,error,clearError} = useHttp();
    const getAllMovies = async (page=1,genres='') => {
        try {
            const res = await request(`${_url}/3/discover/movie?api_key=${_apiKey}&page=${page}&with_genres=${genres}`);
            const data = res.results; 
            return {
                page:res.page,
                res:data.map(movie=>_transformMovie(movie)),
                totalPages:res.total_pages};
        } catch (error) {
            return {
                page:null,
                res:[],
                totalPages:null
            }
        }
    }
    const getAllTV = async (page=1,genres='') => {
        try {
            const res = await request(`${_url}/3/discover/tv?api_key=${_apiKey}&page=${page}&with_genres=${genres}`);
            const data = res.results; 
            return {
                page:res.page,
                res:data.map(movie=>_transformTV(movie)),
                totalPages:res.total_pages};
        } catch (error) {
            return {
                page:null,
                res:[],
                totalPages:null
            }
        }
    }
    const _transformMovie = (movie) => {
        return {
            id:movie.id,
            title:movie.original_title,
            language:movie.original_language,
            overwiew:movie.overview,
            avg:(movie.vote_average).toFixed(1),
            poster:movie.poster_path?`https://image.tmdb.org/t/p/w300/${movie.poster_path}`:noimg,
            genres:movie.genre_ids,
            release:movie.release_date
        }
    }
    const _transformTV = (tv) => {
        return {
            id:tv.id,
            title:tv.name,
            language:tv.original_language,
            overwiew:tv.overview,
            avg:(tv.vote_average).toFixed(1),
            poster:tv.poster_path?`https://image.tmdb.org/t/p/w300/${tv.poster_path}`:noimg,
            genres:tv.genre_ids,
            release:tv.first_air_date
        }
    }
    const getAllGenres = async () => {
        try {
            const data = await request(`${_url}/3/genre/list?api_key=${_apiKey}`); 
            return data.genres
        } catch (error) {
            return []
        }
    }
    const getSearchedContent = async (page=1,type,query='') => {
        try {
            const res = await request(`${_url}/3/search/${type}?api_key=${_apiKey}&page=${page}&query=${query}`);
            const data = res.results; 
            return {
                page:res.page,
                res:type==='tv'? data.map(movie=>_transformTV(movie)):data.map(movie=>_transformMovie(movie)),
                totalPages:res.total_pages};
        } catch (error) {
            return {
                page:null,
                res:[],
                totalPages:null
            }
        }
    }
    return {loading,error,clearError,getAllMovies,getAllGenres,getAllTV,getSearchedContent}
}
export default useMoviesService;