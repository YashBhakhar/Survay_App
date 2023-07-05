import React from 'react'
import PropTypes from 'prop-types'
import { DatePicker, Space } from 'antd';
import { AiFillWarning } from 'react-icons/ai';
import dayjs from 'dayjs';

function CustomDate({changeDate, obj, last, next, submit}) {
    const dateFormat = 'YYYY-MM-DD';
    
    return (
        <div className='layout-one__right__answer'>
            <div className='date'>
                <Space direction="vertical" size={12}>
                    <DatePicker defaultValue={dayjs(obj.answer[obj.activeQuestion] === '' ? '2015/01/01' : obj.answer[obj.activeQuestion], dateFormat)} onChange={changeDate} />
                </Space>
            </div>
            <div className='container__preview__right__submit' >
                {last == obj.activeQuestion ? <button onClick={submit} >Submit</button> : <button onClick={next}>Ok</button>}
            </div>
            {obj.require ? <div className='container__preview__right__error' >
                <AiFillWarning />
                <span>This answer is required</span>
            </div> : <></>}
        </div>
    )
}

CustomDate.propTypes = {

}

export default CustomDate

