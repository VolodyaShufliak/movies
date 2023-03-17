import './app-header.scss'


const AppHeader = () => {
    return (
        <header className="app_header">
            <div className='app_container'>
                <div className='app_header_item'><h2 >Kolopnyy's film service</h2></div>
            </div>
            <div className='app_container'>
                <div className='app_header_item'><h2 >Films</h2></div>
                <div className='app_header_item'><h2 >Serials</h2></div>
            </div>
            <div className='app_container'>
                <div className='app_header_item'><input  type={'text'} placeholder="search" /></div>
            </div>
            
        </header>
    )
}

export default AppHeader;