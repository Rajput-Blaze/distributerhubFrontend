import React, { useEffect, useState, useCallback } from 'react';

import apiUrl from '../../globals/config';
import axios from 'axios';
import showNotification from '../../services/notificationService';
import { useParams } from 'react-router-dom';
export default function ChangePassword() {
  let { auth } = useParams();
  const [state, setstate] = useState('');
  const [message, setmessage] = useState('');
  const [passwordhideandshow, setpasswordhideandshow] = useState(false);
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setstate({
      ...state,
      [name]: value,
    });
  };
  const submit = () => {
    const { password } = state;
    console.log(state, auth);

    if (state.password == state.cnfpassword) {
      axios
        .post(apiUrl + 'user/changePassword', { id: auth, password })
        .then(function (resp) {
          console.log(`resp`, resp);
          if (resp) {
            showNotification('success', 'Password Changed  Successfully');

            // localStorage.setItem('myData', resp.data.token);
            // localStorage.setItem('role', resp?.data?.role ?? 0);
            // localStorage.setItem('userType', resp?.data?.userType ?? 0);
            // // console.log(`resp?.data`, resp?.data);
            // this.props.history.push('/');
            // window.location.reload();
          } else {
            showNotification('danger', 'Invalid Crendiantial ');
          }
        })
        .catch(function (error) {
          console.log(`error`, error);
        });
    } else {
      setmessage("Password Don't Match");
    }
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
                  <h5 className='text-center'>Change Password</h5>
                  <p className='mb-4 hide_in_sm'>
                    Lorem ipsum dolor sit amet elit. Sapiente sit aut eos
                    consectetur adipisicing.
                  </p>
                </div>
                <form action='#' method='post'>
                  <div className='form-group first'>
                    <label htmlFor='username'>Password</label>
                    <input
                      type={passwordhideandshow ? 'text' : 'password'}
                      name='password'
                      required
                      value={state.password}
                      onChange={(e) => {
                        handleChange(e);
                        setmessage('');
                      }}
                      className='form-control'
                      id='password'
                    />
                  </div>
                  <div className='form-group last mb-4 position-relative'>
                    <label htmlFor='password'>Confirm Password</label>
                    <input
                      type={passwordhideandshow ? 'text' : 'password'}
                      name='cnfpassword'
                      required
                      value={state.cnfpassword}
                      onChange={(e) => {
                        handleChange(e);
                        setmessage('');
                      }}
                      className='form-control'
                      id='password'
                    />

                    {passwordhideandshow ? (
                      <i onClick={change} className='far fa-check-square mt-2'>
                        Hide Password
                      </i>
                    ) : (
                      <i onClick={change} className='far fa-square mt-2'>
                        {' '}
                        Show Password
                      </i>
                    )}
                    <p className='error'>{message}</p>
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
