import React,{useState} from 'react'
import PropTypes from 'prop-types'
import { AiFillWarning, AiOutlineCheck } from 'react-icons/ai'

function CustomMultiChoice({changeAnswer,  content, obj, last, next, submit}) {
    const [activeCheck, setActiveCheck] = useState(obj.answer[obj.activeQuestion])

    const changeChoice = (id) => {
        setActiveCheck(id)
        changeAnswer(id)
    }

    return (
        <div className='layout-one__right__answer'>
            <div className='multiple-choice'>
                <div className='multiple-choice__wrapper'>
                    {
                        content.item && content.item.map((c, ind) =>
                            <div className={'multiple-choice__wrapper__choice ' + (activeCheck == c.id ? ' multiple-choice__wrapper__active' : '')} onClick={() => changeChoice(c.id)} >
                                <span className='multiple-choice__wrapper__choice__num'>{ind + 1}</span>
                                <input disabled type='text' className='ant-input' value={c.name} />
                                {activeCheck == c.id ? <AiOutlineCheck /> : <></>}
                            </div>
                        )
                    }
                </div>
                <div className='container__preview__right__submit' >
                    {last == obj.activeQuestion ? <button onClick={submit} >Submit</button> : <button onClick={next}>Ok</button>}
                </div>
                {obj.require ? <div className='container__preview__right__error'>
                    <AiFillWarning />
                    <span>This answer is required</span>
                </div> : <></>}

            </div>
        </div>
    )
}

CustomMultiChoice.propTypes = {

}

export default CustomMultiChoice

