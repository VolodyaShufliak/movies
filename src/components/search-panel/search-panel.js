import { useState } from 'react'
import './search-panel.scss'


const SearchPanel = (props) => {
    const [buttons,setButtons] = useState([
        {name:'Movies', active:true,type:'movie'},
        {name:'TV', active:false,type:'tv'}
    ])
    const changeActive = (btns,selectButton) =>{
        const newBtns =  btns.map((btn)=>{
            return {...btn,active:false};
        })
        const activeButton = newBtns.findIndex((elem)=>elem.name===selectButton)
        setButtons([...newBtns.slice(0,activeButton),{...newBtns[activeButton],active:true},...newBtns.slice(activeButton+1)])

    }
    const buttonsList = buttons.map((btn,i)=>{
        const clazz =btn.active?'button_active':'';
        return(
            <button key={i} 
                className = {clazz}
                onClick={(e)=>{
                    props.setType(btn.type);
                    changeActive(buttons,e.target.textContent);
                    props.setCurrentPage(1);
                }}>{btn.name}
            </button>
        )
    })
    return (
        <div className='search_container'>
            <input 
            className="search_container_input" 
            placeholder="search" 
            onChange={(e)=>{
                props.setSearchText(e.target.value)
                props.setCurrentPage(1)}} />
            <div className="search_container_buttons">
                {buttonsList}
            </div>
        </div>
    )
}

export default SearchPanel;