import './sort-panel.scss'


const SortPanel = (props) => {


    const handleChange = (event) => {
        if(event.target.checked){
            window.scroll(0,0);
            props.addFilterGenre(event.target.id);
        }else{
            window.scroll(0,0);
            props.removeFilterGenre(event.target.id);
        }
        props.setCurrentPage(1);
    }
    return (
        <ul className="panel">
            {props.genres.map(genre=>{
                return (
                    <li  key={genre.id} className='panel_checkbox'>
                        <input type={'checkbox'} id={genre.id} onChange={(event)=>handleChange(event)}></input>
                        <label htmlFor={genre.id}>{genre.name}</label>
                    </li>
                )
            })}
        </ul>
    )
}

export default SortPanel;