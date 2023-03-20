import './app-header.scss'
import { Link , NavLink} from 'react-router-dom';

const AppHeader = (props) => {
    return (
        <header className="app_header">
            <div className='app_container'>
                <Link to='/' onClick={()=>props.setCurrentPage(1)} style={{color:'inherit'}}><div className='app_header_item'><h2 >Kolopnyy's film service</h2></div></Link>
            </div>
            <div className='app_container'>
                <NavLink to='/' onClick={()=>props.setCurrentPage(1)} style={({isActive})=>({color:isActive?'#9F0013':'inherit'})}><div className='app_header_item'><h2 >Movies</h2></div></NavLink>
                <NavLink to='/tv' onClick={()=>props.setCurrentPage(1)} style={({isActive})=>({color:isActive?'#9F0013':'inherit'})}><div className='app_header_item'><h2 >TV</h2></div></NavLink>
            </div>
            <div className='app_container'>
                <div className='app_header_item'><input  type={'text'} placeholder="search" /></div>
            </div>
            
        </header>
    )
}

export default AppHeader;