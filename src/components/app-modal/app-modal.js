import './app-modal.scss'


const Modal = (props) => {

    props.active
    ?document.querySelector('body').classList.add('scroll_hidden')
    :document.querySelector('body').classList.remove('scroll_hidden');
    return (
        <div className={props.active?"modal active":"modal"} onClick={()=>props.setActive(false)}>
            <div className={props.active?"modal_content active":"modal_content"} onClick={e=>e.stopPropagation()}>
                {props.children}
            </div>
        </div>
    )
}

export default Modal;