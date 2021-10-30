import React, { Component } from 'react';
import * as service from '../services/apiServices';
import showNotification from '../services/notificationService';
import * as constant from '../services/constant';
var Freshdesk = require('freshdesk-api');
var freshdesk = new Freshdesk(
  'https://naayak.freshdesk.com/',
  'NTvjJVEZz5hfMBXFn7'
);

export default class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formdata: {
        firstName: '',
        phoneNo: '',
        email: '',
        subject: '',
        message: '',
      },
      submitted: false,
      detail: {},
      map: '',
      emailError: false,
    };
  }

  componentDidMount() {
    this.getContactUsData();
  }

  getContactUsData() {
    service.getContactUsData().then((resp) => {
      if (resp?.data?.success) {
        this.setState({
          detail: resp.data.data[0],
        });
      }
    });
  }

  handleChange = (e) => {
    const { target } = e;
    this.setState((prev) => ({
      formdata: {
        ...prev.formdata,
        [target.name]: target.value,
      },
    }));
  };
  restrictAlpha = (e) => {
    const re = /^[0-9\b]+$/;
    const { target } = e;
    if (e.target.value === '' || re.test(e.target.value)) {
      this.setState((prev) => ({
        formdata: {
          ...prev.formdata,
          [target.name]: target.value,
        },
      }));
    }
  };

  handleForm = (e) => {
    e.preventDefault();

    this.setState({
      submitted: true,
    });

    if (
      this.state.formdata.firstName === '' ||
      this.state.formdata.phoneNo === '' ||
      this.state.formdata.email === '' ||
      this.state.formdata.subject === '' ||
      this.state.formdata.message === ''
    ) {
      return false;
    }
    let pattern =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!pattern.test(this.state.formdata.email)) {
      this.setState({
        emailError: true,
      });
      return;
    } else {
      this.setState({
        emailError: false,
      });
    }

    var obj = {
      firstName: this.state.formdata.firstName,
      phoneNo: this.state.formdata.phoneNo,
      email: this.state.formdata.email,
      subject: this.state.formdata.subject,
      message: this.state.formdata.message,
    };
    this.sendData(obj);
  };

  sendData = (detail) => {
    service
      .postMessageContactUs(detail)
      .then((resp) => {
        if (resp?.data?.success) {
          showNotification('success', resp.data.message);

          this.setState({
            formdata: {
              firstName: '',
              phoneNo: '',
              email: '',
              subject: '',
              message: '',
            },
          });
          this.setState({
            submitted: false,
            emailError: false,
          });
        }
      })
      .catch((err) => {
        showNotification('danger', constant.ERRORMSG);
      });
  };

  render() {
    return (
      <>
        <div className='page-wrapper'>
          <div className='x_contact_title_main_wrapper float_left padding_tb_100'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-12'>
                  <div className='x_offer_car_heading_wrapper x_offer_car_heading_wrapper_contact float_left'>
                    <h4>get in touch</h4>
                    <h3>Contact Info</h3>
                    <p>{this.state.detail?.t1}</p>
                  </div>
                </div>
                <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 full_width mt-3'>
                  <div className='x_contact_title_icon_cont_main_box'>
                    <div className='x_contact_title_icon'>
                      {' '}
                      <i className='fas fa-map-marker-alt'></i>
                    </div>
                    <div className='x_contact_title_icon_cont'>
                      <h3>
                        <a href='#'>address</a>
                      </h3>
                      <p>{this.state.detail?.address}</p>
                    </div>
                  </div>
                </div>
                <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 full_width mt-3'>
                  <div className='x_contact_title_icon_cont_main_box'>
                    <div className='x_contact_title_icon'>
                      {' '}
                      <i className='fa fa-phone'></i>
                    </div>
                    <div className='x_contact_title_icon_cont'>
                      <h3>
                        <a href='#'>phone Number</a>
                      </h3>
                      <p>{this.state.detail?.phoneNumber}</p>
                    </div>
                  </div>
                </div>
                <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 full_width mt-3'>
                  <div className='x_contact_title_icon_cont_main_box'>
                    <div className='x_contact_title_icon'>
                      <i className='fa fa-envelope'></i>
                    </div>
                    <div className='x_contact_title_icon_cont'>
                      <h3>
                        <a href='#'>Email Address</a>
                      </h3>
                      <p>
                        <a href='#'>{this.state.detail?.emailAddress}</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='x_contact_title_main_wrapper float_left padding_tb_100'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-12'>
                  <div className='x_offer_car_heading_wrapper x_offer_car_heading_wrapper_contact float_left'>
                    <h4>get in touch</h4>
                    <h3>Leave A Message</h3>
                    <p>{this.state.detail?.d1}</p>
                  </div>
                </div>
                <div className='col-xl-5 offset-xl-1 col-lg-4 col-md-4 col-sm-12 col-xs-12'>
                  <div className='contect_form1'>
                    <input
                      type='text'
                      placeholder=' Name *'
                      value={this.state.formdata.firstName}
                      name='firstName'
                      onChange={this.handleChange}
                      maxLength='50'
                    />
                    {this.state.submitted &&
                      this.state.formdata.firstName === '' && (
                        <span className='text-danger'> This is required</span>
                      )}
                  </div>
                </div>
                <div className='col-xl-5 col-lg-4 col-md-4 col-sm-12 col-xs-12'>
                  <div className='contect_form1'>
                    <input
                      type='text'
                      placeholder='Phone No *'
                      value={this.state.formdata.phoneNo}
                      name='phoneNo'
                      onChange={(e) => {
                        // this.handleChange(e);
                        this.restrictAlpha(e);
                      }}
                      // onChange={this.handleChange}
                      maxLength='10'
                    />
                    {this.state.submitted &&
                      this.state.formdata.phoneNo === '' && (
                        <span className='text-danger'> This is required</span>
                      )}
                  </div>
                </div>
                <div className='col-xl-5 offset-xl-1 col-lg-4 col-md-4 col-sm-12 col-xs-12'>
                  <div className='contect_form1'>
                    <input
                      type='email'
                      placeholder='Email *'
                      value={this.state.formdata.email}
                      name='email'
                      onChange={this.handleChange}
                      maxLength='100'
                    />
                    {this.state.submitted &&
                      this.state.formdata.email === '' && (
                        <span className='text-danger'> This is required</span>
                      )}
                    {this.state.submitted && this.state.emailError && (
                      <span className='text-danger'>
                        {' '}
                        Please enter valid email
                      </span>
                    )}
                  </div>
                </div>
                <div className='col-xl-5 col-lg-4 col-md-4 col-sm-12 col-xs-12'>
                  <div className='contect_form1'>
                    <select
                      // className='form-control'
                      id='exampleFormControlSelect1'
                      name='wheels'
                      onChange={this.handleChange}>
                      <option value='4'>4</option>
                    </select>
                    {/* <input
                      type='text'
                      placeholder='Subject *'
                      value={this.state.formdata.subject}
                      name='subject'
                      onChange={this.handleChange}
                      maxLength='100'
                    />
                    {this.state.submitted &&
                      this.state.formdata.subject === '' && (
                        <span className='text-danger'> This is required</span>
                      )} */}
                  </div>
                </div>
                <div className='col-xl-10 offset-xl-1 col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                  <div className='contect_form1'>
                    <textarea
                      rows='4'
                      placeholder='Message *'
                      name='message'
                      value={this.state.formdata.message}
                      onChange={this.handleChange}
                      maxLength='100'></textarea>
                    {this.state.submitted &&
                      this.state.formdata.message === '' && (
                        <span className='text-danger'> This is required</span>
                      )}
                  </div>
                </div>
                <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                  <div className='contect_btn contect_btn_contact'>
                    <ul>
                      <li>
                        <a href='#' onClick={this.handleForm}>
                          Submit <i className='fa fa-arrow-right'></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
