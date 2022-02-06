import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Footer extends Component {
  render() {
    return (
      <footer id='footer-main' className='footers footer-home'>
        <div className='x_footer_bottom_main_wrapper float_left'>
          <div className='container'>
            <div className='row'>
              <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12'>
                <div className='x_footer_bottom_box_wrapper float_left'>
                  <h3>About Us</h3>
                  <p>
                    Distributor Hub is a B2B platform that connects the
                    distributors with relevant companies / manufacturers’
                    vice-versa
                  </p>
                  <span>
                    <a href='/about-us'>
                      Read More &nbsp;
                      <i className='fa fa-angle-double-right' />
                    </a>
                  </span>
                  <ul>
                    <li>
                      <a href='https://www.facebook.com/distributorhub.in'>
                        <i className='fab fa-facebook-f' />
                      </a>
                    </li>
                    <li>
                      <a href='https://twitter.com/Distributor_Hub'>
                        <i className='fab fa-twitter' />
                      </a>
                    </li>

                    <li style={{ backgroundColor: '#ed0b4c' }}>
                      <a href='https://www.instagram.com/distributorhub.in/'>
                        <i class='fab fa-instagram' />
                      </a>
                    </li>
                    <li style={{ backgroundColor: 'red' }}>
                      <a href='https://www.youtube.com/channel/UCYBh3qczdqcMYie_L9nnbgw/'>
                        <i class='fab fa-youtube' />
                      </a>
                    </li>
                    <li style={{ backgroundColor: '#0e76a8' }}>
                      <a href='https://www.linkedin.com/company/distributor-hub/'>
                        <i class='fab fa-linkedin' />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12'>
                <div className='x_footer_bottom_box_wrapper_second float_left'>
                  <h3>UseFul Links</h3>
                  <ul>
                    <li>
                      <a href='/about-us'>
                        <i className='fa fa-long-arrow-right' /> &nbsp; About
                      </a>
                    </li>
                    <li>
                      <a href='/advantage-and-benefit'>
                        <i className='fa fa-long-arrow-right' /> &nbsp;
                        Advantages/Benefit
                      </a>
                    </li>
                    <li>
                      <a href='/contact-us'>
                        <i className='fa fa-long-arrow-right' /> &nbsp; Contact
                        Us
                      </a>
                    </li>
                    <li>
                      <a href='/terms-condition'>
                        <i className='fa fa-long-arrow-right' /> &nbsp; Terms
                        and Conditions
                      </a>
                    </li>

                    <li>
                      <a href='/privacy-policy'>
                        <i className='fa fa-long-arrow-right' /> &nbsp; Privacy
                        &amp; Cookies Policy
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12'>
                <div className='x_footer_bottom_box_wrapper_third float_left'>
                  <h3>Have Questions?</h3>
                  <div className='x_footer_bottom_icon_section float_left'>
                    <div className='x_footer_bottom_icon'>
                      {' '}
                      <i className='fas fa-phone-alt' />
                    </div>
                    <div className='x_footer_bottom_icon_cont'>
                      <h4>Contact Number</h4>
                      <p>9565109111</p>
                    </div>
                  </div>
                  <div className='x_footer_bottom_icon_section x_footer_bottom_icon_section2 float_left'>
                    <div className='x_footer_bottom_icon x_footer_bottom_icon2'>
                      {' '}
                      <i className='fas fa-envelope' />
                    </div>
                    <div className='x_footer_bottom_icon_cont'>
                      <h4>Email Us</h4>
                      <p>
                        <a>distributorhub.in@gmail.com</a>
                      </p>
                    </div>
                  </div>
                  {/* <div className='x_footer_bottom_icon_section x_footer_bottom_icon_section2 float_left'>
                    <div className='x_footer_bottom_icon x_footer_bottom_icon3'>
                      {' '}
                      <i className='fa fa-map-marker' />
                    </div>
                    <div className='x_footer_bottom_icon_cont x_footer_bottom_icon_cont2'>
                      <h4>
                        <a href='#'>View On Map</a>
                      </h4>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          <p className='text-white text-center pt-5'>
            Distributorhub.in - An ideal platform for those who are looking
            forward to Appointing or Becoming a Distributor.{' '}
          </p>
        </div>
        <div className='footer-2'>
          <div className='container'>
            <div className='footer-widget'>
              <p className='text-center  mb-0'>
                Design &amp; Development by{' '}
                <a
                  style={{ color: 'White' }}
                  href='https://rajput-blaze.github.io/'>
                  Vishwajeet Singh
                </a>{' '}
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
