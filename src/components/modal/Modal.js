import './modal.css'
import { BiCheck } from 'react-icons/bi'
import { ThemeContext } from '../../utils/index'
import { useContext } from 'react'


function Modal(props) {
    

    const { modal, activeModal } = useContext(ThemeContext)

    return (
            props[0] ? (
                <div className={`modal ${modal}`}>
                    <div className="modal__box">
                        <button className="modal__box-close" onClick={() => activeModal()}>Close</button>
                        <h2 className="modal__box-title">{props[0].title}</h2>
                        <ul className="infos__list">
                            <li>
                                <BiCheck className="infos__list-icon" />
                                <p>{props[0].info1}</p>
                            </li>
                            <li>
                                <BiCheck className="infos__list-icon" />
                                <p>{props[0].info2}</p>
                            </li>
                            <li>
                                <BiCheck className="infos__list-icon" />
                                <p>{props[0].info3}</p>
                            </li>
                        </ul>
                    </div>
                </div>

            ) : ('')
    )
}

export default Modal
