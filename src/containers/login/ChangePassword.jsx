import React, { useEffect, useState, useCallback } from 'react';

import apiUrl from '../../globals/config';
import axios from 'axios';
import Swal from 'sweetalert2';
import showNotification from '../../services/notificationService';
import { useParams, useHistory } from 'react-router-dom';
import Loaderr from '../../components/Loaderr';
export default function ChangePassword() {
  let history = useHistory();

  let { auth } = useParams();
  const [state, setstate] = useState('');
  const [message, setmessage] = useState('');
  const [loading, setloading] = useState(false);

  const [passwordhideandshow, setpasswordhideandshow] = useState(false);
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setstate({
      ...state,
      [name]: value,
    });
  };
  const sweetAlert = (msg) => {
    Swal.fire({
      title: msg,
      timer: 7000,
      icon: 'success',

      confirmButtonText: 'Login',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        history.push('/Login');
      } else {
        history.push('/');
      }
      // setTimeout(history.goBack(), 500);
    });
  };
  const submit = () => {
    const { password } = state;
    console.log(state, auth);
    setloading(true);

    if (state.password == state.cnfpassword) {
      axios
        .post(apiUrl + 'user/changePassword', { id: auth, password })
        .then(function (resp) {
          setloading(false);

          console.log(`resp`, resp);
          if (resp) {
            sweetAlert('Password Changed  Successfully');
            // showNotification('success', 'Password Changed  Successfully');
            // localStorage.setItem('myData', resp.data.token);
            // localStorage.setItem('role', resp?.data?.role ?? 0);
            // localStorage.setItem('userType', resp?.data?.userType ?? 0);
            // // console.log(`resp?.data`, resp?.data);
            // history.push('/login');
            // window.location.reload();
          } else {
            showNotification('danger', 'Invalid Crendiantial ');
          }
        })
        .catch(function (error) {
          setloading(false);

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
    <>
      {loading ? <Loaderr /> : null}

      <div className='content mt-5 pt-3'>
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
                    <h3 className='text-center h1_tag'> Reset Your Password</h3>
                    {/* <p className='mb-4 hide_in_sm'>
                     
                    </p> */}
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
                        <i
                          onClick={change}
                          className='far fa-check-square mt-2'>
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
    </>
  );
}
