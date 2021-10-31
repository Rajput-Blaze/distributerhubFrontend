import React, { useState, useEfect } from 'react';
import apiUrl from '../../globals/config';
import axios from 'axios';
import showNotification from '../../services/notificationService';

export default function Forgotpassword() {
  const [state, setState] = React.useState('');
  const [success, setsuccess] = useState(false);
  const [message, setmessage] = useState('');
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setState({
      ...state,
      [name]: value,
    });
  };
  const submit = () => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(state?.email)) {
      axios
        .post(apiUrl + 'user/forgetPassword', state)
        .then(function (resp) {
          setsuccess(true);
        })
        .catch((err) => {
          showNotification('danger', err?.response?.data?.message);
          console.log(err, 'errrrrrrrrrrr');
        });
      console.log(`state`, state);
    } else {
      setmessage('Invalid Email Address');
    }
  };
  return (
    <section id='main' className='clearfix user-page my-5'>
      <div className='container py-3'>
        <div className='row text-center'>
          {success ? (
            <div className='center_text_bg'>
              <h6> Reset Link Send to your Email</h6>
            </div>
          ) : (
            <div className='col-md-8 offset-md-2 col-lg-6 offset-lg-3'>
              <div className='user-account'>
                <h5>Reset Password</h5>

                <div className='form-group'>
                  <input
                    type='email'
                    required
                    className='form-control my-3'
                    placeholder='Enter Email'
                    name='email'
                    value={state.email}
                    onChange={(e) => {
                      handleChange(e);
                      setmessage('');
                    }}
                  />
                  <p className='error'>{message}</p>
                </div>
                <input
                  type='button'
                  onClick={submit}
                  defaultValue='Submit'
                  className='btn btn-block btn-primary mb-3 py-3'
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
