import React, { Component } from 'react';
import * as loadjs from 'loadjs';
import base from './../globals/base';
import * as service from '../services/apiServices';
import showNotification from '../services/notificationService';
import * as constant from '../services/constant';
import ViewCompany from './viewCompany';
import { useHistory, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
const Services = (props) => {
  const history = useHistory();
  var user = JSON.parse(localStorage.getItem('user'));
  const [state, setState] = React.useState(history?.location?.data ?? user);
  console.log(`history`, state);
  if (state) {
    localStorage.setItem('user', JSON.stringify(state));
  }

  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <title>
          Distributorhub.in:Create Free Business Profile / Registration
          Form-Join Now
        </title>
        <meta
          name='description'
          content='To Become or appoint a distributor in your category of business, register your business on Distributorhub.in and build your business network in India'
        />
        <meta
          name='keywords'
          content='Get free registration, Registration, Join Free Now – Distributorhub.in, become distributor, appoint distributor, find distributor, search distributor, search business, distributorship opportunities, business partner, channel partner, distributor,  business partnership, world best business opportunity '></meta>
        <link
          rel='canonical'
          href='https://distributorhub.in/registration-create-free-business-profile'
        />
      </Helmet>
      <nav aria-label='breadcrumb ' style={{ margin: '62px 0 0 0' }}>
        <ol class='breadcrumb justify-content-end'>
          <li class='breadcrumb-item'>
            <a href='/'>Home</a>
          </li>
          <li class='breadcrumb-item active' aria-current='page'>
            Login
          </li>
        </ol>
      </nav>
      <div className='row  h-100  emi_row marginSpace justify-content-center'>
        <div className='coln-8'>
          <div className='card widget-stat'>
            <div className='card-header bg-custom-blue center_text'>
              <h1 className='card-title text-white h1_tag'>
                {' '}
                Hello Business Partner, We welcome you on Distributor hub
              </h1>

              <div className='two_btns_ps'></div>
            </div>
            <div className='card-body'>
              <div className='form-validation'>
                <p className='text-center'>
                  Welcome to the registration process at Distributorhub.in
                  Create a free business profile, Fill the registration form to
                  get listed and to be recognized by best business & channel
                  partner
                </p>
                <div className='row middle2 center_text '>
                  <span className='pt-3 pb-4  h1_tag'>
                    Select Firm Type For registration
                  </span>
                </div>
                <div className='row middle pb-4 pt-2'>
                  <div className=''>
                    <div className='form-group '>
                      <div className='d-flex px-2'>
                        <div className='w-110 d-flex align-items-center mr-3'>
                          <Link to='/company-registration'>
                            <button
                              type='button'
                              className='btn px-3 btn-primary btn-lg mr-2'>
                              Company
                            </button>
                          </Link>
                        </div>
                        <div className='w-110 d-flex align-items-center'>
                          <Link to='/distributor-registration'>
                            <button
                              type='button'
                              className='btn px-3 btn-primary btn-lg mr-2'>
                              Distributor
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
    </>
  );
};
export default Services;
