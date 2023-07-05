import React from 'react'
import PropTypes from 'prop-types'
import { AiFillWarning } from 'react-icons/ai'

function CustomTextarea({changeText, obj, last, next, submit}) {
    return (
        <div className='layout-one__right__answer'>
            <div className='textbox'>
                <textarea rows="4" cols="50" defaultValue={obj.answer[obj.activeQuestion]} name="comment" form="usrform" className='ant-input' placeholder='Type your answer hear...' onChange={changeText} ></textarea>
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

CustomTextarea.propTypes = {

}

export default CustomTextarea

