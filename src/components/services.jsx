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
    <div className='page-wrapper services-page'>
      <div
        className='content'
        style={{ height: '50vh', marginTop: '70px', padding: '50px 0px' }}>
        <div className='container card widget-stat'>
          <p className='text-center pt-5 pb-2'>Select Form Type For Register</p>
          <div className='row'>
            <div className='col'>
              <Link to='/company-register'>
                <input
                  type='button'
                  // onClick={submit}
                  defaultValue='Company'
                  className='btn btn-block btn-primary mb-3'
                />
              </Link>
            </div>
            <div className='col'>
              <a href='/distributer-register'>
                <input
                  type='button'
                  // onClick={submit}
                  defaultValue='Distributer'
                  className='btn btn-block btn-primary mb-3'
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Services;
