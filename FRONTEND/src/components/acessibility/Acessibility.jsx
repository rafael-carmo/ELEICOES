import './acessibility.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'

const Acessibility = () => {
    return (
        <div className='acessibility'>
            <div className="acessibilityContainer">
                <span> Acessibilidade </span>
                <span>| Fale conosco</span>
                <span>| Transparência |</span>
                <FontAwesomeIcon icon={faCircleInfo} className='iconInfo'/>
            </div>
        </div>
    )
}

export default Acessibility
