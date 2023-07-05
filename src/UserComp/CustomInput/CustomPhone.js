import React from 'react'
import PropTypes from 'prop-types'
import { AiFillWarning } from 'react-icons/ai'

function CustomPhone({changeText, obj, last, next, submit}) {
    return (
        <div className='layout-one__right__answer'>
            <div className='textbox'>
                <input type='text' defaultValue={obj.answer[obj.activeQuestion]} placeholder='9090909090' className='ant-input' onChange={changeText} />
            </div>
            <div className='container__preview__right__submit' >
                {last == obj.activeQuestion ? <button onClick={submit} >Submit</button> : <button onClick={next}>Ok</button>}
            </div>
            {obj.require ? <div className='container__preview__right__error'>
                <AiFillWarning />
                <span>This answer is required</span>
            </div> : <></>}
        </div>
    )
}

CustomPhone.propTypes = {

}

export default CustomPhone

