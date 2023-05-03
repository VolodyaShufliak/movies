import './pagination.scss'
import Pagination from '@mui/material/Pagination'
import { memo, useEffect } from 'react'
const MyPagination = (props) => {
    const choosePage = (page) => {
        window.scroll(0, 0);
        props.setCurrentPage(page)
    }
    return(
        <div  className='pagination'>
            <Pagination 
            onClick={(e)=>choosePage(e.target.textContent)} 
            count={props.totalPages} color={'secondary'} page={+props.currentPage}
            />
        </div>
    )
}

export default MyPagination;