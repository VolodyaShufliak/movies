import './app-head.scss'
import { Link , NavLink} from 'react-router-dom';

const AppHead = (props) => {
    function disableOverflow(e) {
        if (e.target.checked) {
          document.body.classList.add('disable_overflow_y');
        } else {
            document.body.classList.remove('disable_overflow_y');
        }
    }
    function closeMenu(e){
        const menu = document.querySelector('#check');
        if(menu.checked && e.target.tagName!=='UL'){menu.click()}
    }
    return (
        <nav className='header_container'>
            <input type="checkbox" onChange={disableOverflow} id="check"/>
            <div className='logo'><Link to='/' onClick={()=>props.setCurrentPage(1)} style={{color:'inherit'}}>Kolopnyy's film service</Link></div>
            <ul onClick={closeMenu}>
                <li className="nav_li_item"><NavLink to='/' onClick={()=>props.setCurrentPage(1)} style={({isActive})=>({color:isActive?'#9F0013':'inherit'})}><h2>Movies</h2></NavLink></li>
                <li className="nav_li_item"><NavLink to='/tv' onClick={()=>props.setCurrentPage(1)} style={({isActive})=>({color:isActive?'#9F0013':'inherit'})}><h2 >TV</h2></NavLink></li>
                <li className="nav_li_item"><NavLink to='/search' onClick={()=>props.setCurrentPage(1)} style={({isActive})=>({color:isActive?'#9F0013':'inherit'})}><h2>Search</h2></NavLink></li>
            </ul>
            <div className="checkbtn">
                <label className="show_check" htmlFor="check"><i className="fa fa-bars" ></i></label>
                <label className="hide_check" htmlFor="check"><i  className="fa fa-window-close"></i></label>
            </div>
        </nav>
    )
}

export default AppHead;