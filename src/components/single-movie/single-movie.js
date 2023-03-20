import './single-movie.scss'


const SingleMovie = (props) => {
    const {singleMovie}=props;
    const release = singleMovie.release.split('-')[0];
    const movieGenres =singleMovie.genres.length!==0
        ?singleMovie.genres.map(genre=>(
            <li>
                {genre}
            </li>
        ))
        :[];
    const genresContainer = movieGenres.length!==0
        ?   <div className='modal_container_information_genres'>
                Genres:
                <ul >
                    {movieGenres}
                </ul>
            </div>
        :   <div className='modal_container_information_genres'>
                No genres
            </div>
    return(
        <div className="modal_container">
            <img src={singleMovie.poster} alt="ererer" ></img>
            <div className='modal_container_information'>
                <div className='modal_container_information_title'>{`${singleMovie.title}(${release})`}</div>
                <div className='modal_container_information_overwiew'>{singleMovie.overwiew}</div>
                <div className='modal_container_information_language'>{`Language: ${singleMovie.language}`}</div>
                {genresContainer}
            </div>
        </div>
    )
}

export default SingleMovie;