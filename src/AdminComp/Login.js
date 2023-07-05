import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getUser } from '../Redux/todoAction'

function Login(props) {
  const dispatch = useDispatch()
  let navigate = useNavigate()
  const [email, setEmail] = useState(false)
  const [password, setPassword] = useState(false)
  const initUser = { email: '', password: '' };
  const [user, setUser] = useState(initUser);
  let velid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


  const handleSignup = () => {
    navigate('/')
  }

  const handleData = (e) => {
    let nameFeild = e.target.name
    if (nameFeild == 'email' && e.target.value.trim().length > 0) {
      setEmail(false)
    }
    if (nameFeild == 'password' && e.target.value.trim().length > 0) {
      setPassword(false)
    }
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }

  const handleLogin = (e) => {
    e.preventDefault()
    if (user.email.trim().length < 1 || !user.email.match(velid)) {
      setEmail(true)
    }
    if (user.password.trim().length < 1) {
      setPassword(true)
    }
    if (user.email && user.password && user.email.match(velid)) {
      const allUsers = JSON.parse(localStorage.getItem("users"))
      if(allUsers == null) {
        alert('Enter valid data')
      }
      let result = allUsers.find((users) => users.email === user.email && users.password === user.password)
      if(result !== undefined) {
        dispatch(getUser(result.id))
        sessionStorage.setItem('result',JSON.stringify(result))
        navigate('/home')
      } else {
        alert('Enter valid data')
      }
    }
  }


  return (
    <div className="container">
      <div className="row">
        <h1 className="header">Login</h1>
        <form style={{ display: 'grid' }}>
          <label className="lable">Email</label>
          <br />
          <input type="email" placeholder="your email" name='email' className="form-input" onChange={handleData} />
          {email ? <label className="validate hide" id="email-validate_2">Enter valid email</label> : <></>}
          <br />
          <label className="lable">Password</label>
          <br />
          <input type="text" placeholder="your password" name='password' className="form-input" onChange={handleData} />
          {password ? <label className="validate hide" id="password-validate_2">Enter valid password</label> : <></>}
          <br />
          <button type="button" className="btn-primary" onClick={handleLogin} >Login</button>
        </form>
        <br />
        <div style={{ display: 'flex' }}>
          <p style={{ fontSize: 18 }}>Don't have a account :- </p>
          <button className="a_1" onClick={handleSignup}>Signup</button>
        </div>
      </div>
    </div>

  )
}



export default Login

