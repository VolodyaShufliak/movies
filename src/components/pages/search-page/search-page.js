import { useState } from "react";
import MoviesList from "../../movies-list/movies-list";
import MyPagination from "../../Pagination/pagination";
import SearchPanel from "../../search-panel/search-panel";

import './search-page.scss'

const SearchPage = (props) => {
    const [searchText,setSearchText] = useState('');
    const [type,setType] = useState('movie');
    return(
        <div className="search_page">
            <SearchPanel setSearchText={setSearchText} setType={setType} setCurrentPage={props.setCurrentPage}></SearchPanel>
            <div>
                <MoviesList type={type} searchText={searchText} activePage={props.activePage}  setCurrentPage={props.setCurrentPage} currentPage={props.currentPage} setTotalPages={props.setTotalPages} genres={props.genres}  setActiveModal={props.setActiveModal} setActiveMovie={props.setActiveMovie}/>   
                <MyPagination totalPages = {props.totalPages<=500?props.totalPages:500} setCurrentPage={props.setCurrentPage} currentPage={props.currentPage}/>
            </div>
        </div>
    )
}

export default SearchPage;