import React from 'react'
import PropTypes from 'prop-types'
import './admin.css'
import { useNavigate } from 'react-router-dom'

function Header(props) {
    const navigate = useNavigate()

    const logOut = () => {
  navigate('/')
    }
  return (
      <div className='header_main'>
                <div className='header_left'>
                    <img src="https://surveyagency.netlify.app/images/logo.png" className='header_left_image' />
                    <span>SurveyAgency</span>
                </div>
                <div className='header_right'>
                    <div className='header_right_btn' onClick={logOut}>
                        <span>Log Out</span>
                        <img src='https://surveyagency.netlify.app/images/right-arrow.png' className='header_right_image' />
                    </div>
                </div>
            </div>
  )
}

Header.propTypes = {

}

export default Header

