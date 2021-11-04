import React, { useEffect, useState, useCallback } from 'react';
import apiUrl from '../../globals/config';

import axios from 'axios';
import showNotification from '../../services/notificationService';
import { useHistory } from 'react-router-dom';
export default function Login(props) {
  let history = useHistory();
  const [state, setstate] = useState('');
  const [passwordhideandshow, setpasswordhideandshow] = useState(false);
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setstate({
      ...state,
      [name]: value,
    });
  };

  const submit = () => {
    console.log(state);
    //user/otpVerification
    axios
      .post(apiUrl + 'user/otpVerification', state)
      .then(function (resp) {
        if (resp?.data.token) {
          console.log(resp.data);
          showNotification('success', 'Login  Successfully');
          localStorage.setItem('myData', resp.data.token);
          localStorage.setItem('role', resp?.data?.role ?? 0);
          localStorage.setItem('userType', resp?.data?.userType ?? 0);
          // console.log(`resp?.data`, resp?.data);
          history.push('/');
          window.location.reload();
        }
      })
      .catch(function (error) {
        showNotification('danger', error?.response?.data?.message);
        // Object.keys(error).forEach((e) => {
        //   console.log('111111', error[e]);
        // });
      });
  };
  const change = () => {
    if (passwordhideandshow) {
      setpasswordhideandshow(false);
    } else {
      setpasswordhideandshow(true);
    }
  };
  return (
    <div className='content'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 hide_in_sm'>
            <img
              src='/assets/images/undraw_remotely_2j6y.svg'
              alt='Image'
              className='img-fluid'
            />
          </div>
          <div className='col-md-6 contents'>
            <div className='row justify-content-center'>
              <div className='col-md-8 mt-4'>
                <div className='mb-4'>
                  <h3 className='text-center'>Sign In</h3>
                  <p className='mb-4 hide_in_sm'>
                    Lorem ipsum dolor sit amet elit. Sapiente sit aut eos
                    consectetur adipisicing.
                  </p>
                </div>
                <form action='#' method='post'>
                  <div className='form-group first'>
                    <label htmlFor='username'>Email ID</label>
                    <input
                      type='email'
                      required
                      maxLength='10'
                      value={state.email}
                      onChange={(e) => {
                        handleChange(e);
                      }}
                      name='email'
                      className='form-control'
                    />
                  </div>
                  <div className='form-group last mb-4 position-relative'>
                    <label htmlFor='password'>Password</label>
                    <input
                      type={passwordhideandshow ? 'text' : 'password'}
                      name='password'
                      required
                      value={state.password}
                      onChange={(e) => {
                        handleChange(e);
                      }}
                      className='form-control'
                      id='password'
                    />

                    {passwordhideandshow ? (
                      <i onClick={change} className='fa fa-eye-slash eye'></i>
                    ) : (
                      <i onClick={change} className='fa fa-eye eye'></i>
                    )}
                  </div>
                  <div className='d-flex mb-5 align-items-center'>
                    <span className=''>
                      <a href='/forgot-password' className='forgot-pass'>
                        Forgot Password !
                      </a>
                    </span>
                  </div>
                  <input
                    type='button'
                    onClick={submit}
                    defaultValue='Log In'
                    className='btn btn-block btn-primary mb-3'
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
