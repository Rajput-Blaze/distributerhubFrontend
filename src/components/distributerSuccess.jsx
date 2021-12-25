import React, { Component } from 'react';
import * as loadjs from 'loadjs';
import base from './../globals/base';
import * as service from '../services/apiServices';
import showNotification from '../services/notificationService';
import * as constant from '../services/constant';
import ViewCompany from './viewCompany';
import { useHistory, Link } from 'react-router-dom';
const Services = (props) => {
  const history = useHistory();
  var user = JSON.parse(localStorage.getItem('user'));
  const [state, setState] = React.useState(history?.location?.data ?? user);
  console.log(`history`, state);
  if (state) {
    localStorage.setItem('user', JSON.stringify(state));
  }

  return (
    <div
      className='row  h-100  emi_row justify-content-center'
      style={{ margin: '150px 0' }}>
      <div className='coln-8'>
        <div className='card widget-stat'>
          <div className='card-header bg-custom-blue center_text'>
            <h4 className='card-title text-white h1_tag'>
              {' '}
              Hello Distributor , We welcome you on Distributor hub
            </h4>

            <div className='two_btns_ps'></div>
          </div>
          <div className='card-body'>
            <div className='form-validation'>
              <div className='row middle2 center_text '>
                <span className='pt-3 pb-4  h1_tag'>
                  Distributor Account Created Successfully
                </span>
              </div>
              {/* <p className='text-center'>
                Welcome to the registration process at Distributorhub.in. Create
                a free business profile, Fill the registration form to get
                listed and to be recognized by best business & channel partner
              </p> */}
              <div className='row middle pb-4 pt-2'>
                <div className=''>
                  <div className='form-group '>
                    <div className='d-flex px-2'>
                      <div className='w-110 d-flex align-items-center mr-3'>
                        <Link to='/'>
                          <button
                            type='button'
                            className='btn px-5 btn-primary btn-lg mr-2'>
                            Home
                          </button>
                        </Link>
                      </div>
                      <div className='w-110 d-flex align-items-center'>
                        <Link to='/login'>
                          <button
                            type='button'
                            className='btn px-5 btn-primary btn-lg mr-2'>
                            login
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Services;
