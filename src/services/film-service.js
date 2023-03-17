import useHttp from "../hooks/http-hook";


const useMoviesService = () => {
    const _apiKey='84fa4848226ff67ad9781245eb9c7e9b';
    const _url=`https://api.themoviedb.org`;
    const {loading,request,error,clearError} = useHttp();
    const getAllMovies = async () => {
        try {
            const res = await request(`${_url}/3/discover/movie?api_key=${_apiKey}`);
            const data = res.results; 
            return data.map(movie=>_transformMovie(movie));
        } catch (error) {
            return [];
        }
    }
    const _transformMovie = (movie) => {
        return {
            id:movie.id,
            title:movie.original_title,
            language:movie.original_language,
            overwiew:movie.overview,
            avg:movie.vote_average,
            poster:`https://image.tmdb.org/t/p/w300/${movie.poster_path}`,
            genres:movie.genre_ids,
            release:movie.release_date
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
    return {loading,error,clearError,getAllMovies,getAllGenres}
}
export default useMoviesService;