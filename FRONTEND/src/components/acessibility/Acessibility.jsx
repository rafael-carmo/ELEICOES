import './acessibility.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'

const Acessibility = () => {
    return (
        <div className='acessibility'>
            <div className="acessibilityContainer">
                <ul>
                    <li><a href="https://www.tse.jus.br/acessibilidades-tse">Acessibilidade</a><span>|</span></li>
                    <li><a href='https://www.tse.jus.br/eleitor/servicos/ouvidoria'>Fale conosco</a> <span>|</span></li>
                    <li><a href='https://www.tse.jus.br/transparencia'>Transparência </a><span>|</span></li>
                    <li><a href="https://www.tse.jus.br/transparencia-e-prestacao-de-contas/politica-de-privacidade-e-termos-de-uso">
                        <FontAwesomeIcon icon={faCircleInfo} className='iconInfo' />
                    </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Acessibility
