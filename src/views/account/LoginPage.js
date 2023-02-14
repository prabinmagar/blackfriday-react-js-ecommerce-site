import React, { useState, useEffect } from 'react';
import { useAuthContext } from '../../context/authContext';
import "../../styles/LoginPage.scss";
import { useNavigate } from 'react-router-dom';
import { route } from "../../constants";

const LoginPage = () => {
  const navigate = useNavigate();
  const { makeAuthRequest, dispatch, authData, authErrorMsg } = useAuthContext();
  const [loginData, setLoginData] = useState({ username: "", password: "" });

  const formDataHandler = (event, property) => {
    setLoginData({
      ...loginData,
      [property]: event.target.value
    });
  }
  
  const handleSubmit = async(event) => {
    event.preventDefault();
    makeAuthRequest(dispatch, loginData);
  }

  useEffect(() => {
    if(authData.isLoggedIn) navigate(route.BASKET);
    // eslint-disable-next-line
  }, [authData.isLoggedIn]);
  
  console.log(authErrorMsg);

  return (
    <main className='bg-secondary'>
      <div className='container'>
        <div className='sc-login'>
          <div className = "login-content px-5 py-4">
            <div className = "login-title fs-20">Login / Sign In</div>
            <form onSubmit={handleSubmit}>
              <div className='form-element'>
                <label htmlFor='username' className = "form-label">Username: </label>
                <input className = "form-control" type = "text" id = "username" onChange={(event) => formDataHandler(event, "username")} value = {loginData.username} required />
              </div>
              <div className='form-element'>
                <label className='form-label' htmlFor='password'>Password:</label>
                <input className = "form-control" type = "password" id = "password" onChange={(event) => formDataHandler(event, "password")} value = {loginData.password} required />
              </div>
              <button type = "submit" className = "btn-login fs-16">Login</button>
              <div className='login-error-msg text-center my-3'>
                <p className='text-danger'>
                  { authErrorMsg }
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}

export default LoginPage