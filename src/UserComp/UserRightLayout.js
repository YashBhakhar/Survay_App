import React, { useRef, useState } from 'react'
import PropTypes from 'prop-types'
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { DatePicker, Space } from 'antd';
import { AiFillWarning, AiOutlineCheck } from 'react-icons/ai';
import '../AdminComp/admin.css'
import CustomEmail from './CustomInput/CustomEmail';
import CustomMultiChoice from './CustomInput/CustomMultiChoice';
import CustomWebsite from './CustomInput/CustomWebsite';
import CustomDate from './CustomInput/CustomDate';
import CustomTextbox from './CustomInput/CustomTextbox';
import CustomTextarea from './CustomInput/CustomTextarea';
import CustomNumber from './CustomInput/CustomNumber';
import CustomPhone from './CustomInput/CustomPhone';
import CustomFeedback from './CustomInput/CustomFeedback';

dayjs.extend(customParseFormat);

function UserRightLayout({ content, changeAnswer, next, last, obj, submit }) {
    
    const changeText = (e) => {
        changeAnswer(e.target.value)
    }

    const changeDate = (date, dateString) => {
        changeAnswer(dateString)
    }

    switch (content.type) {
        case 'multipleChoice':
            return <CustomMultiChoice
            changeAnswer = {changeAnswer}
            last={last}
            next={next}
            obj={obj}
            content={content}
            submit={submit}
            />

        case 'website':
            return <CustomWebsite 
            changeText={changeText}
            obj={obj}
            last={last}
            next={next}
            submit={submit}
            />

        case 'date':
            return <CustomDate 
            changeDate={changeDate}
            obj={obj}
            last={last}
            next={next}
            submit={submit}
            />

        case 'textbox':
            return <CustomTextbox 
            changeText={changeText}
            obj={obj}
            last={last}
            next={next}
            submit={submit}
            />

        case 'textarea':
            return <CustomTextarea 
            changeText={changeText}
            obj={obj}
            last={last}
            next={next}
            submit={submit}
            />

        case 'number':
            return <CustomNumber 
            changeText={changeText}
            obj={obj}
            last={last}
            next={next}
            submit={submit}
            />

        case 'email':
           return <CustomEmail 
            changeText={changeText}
            obj={obj}
            last={last}
            next={next}
            submit={submit}
           />

        case 'phone':
            return <CustomPhone 
            changeText={changeText}
            obj={obj}
            last={last}
            next={next}
            submit={submit}
           />

        case 'feedback':
            return <CustomFeedback
            changeAnswer = {changeAnswer}
            last={last}
            next={next}
            obj={obj}
            submit={submit}
            />

        default: return <></>
    }
}

export default UserRightLayout

