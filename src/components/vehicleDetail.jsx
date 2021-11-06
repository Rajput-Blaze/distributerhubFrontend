import React, { useState, useEffect } from 'react';
import StoreContext from '../context/store';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import base from '../globals/base';
import apiBase from '../globals/config';
import * as loadjs from 'loadjs';
import { withRouter } from 'react-router';
import * as service from '../services/apiServices';
import showNotification from '../services/notificationService';
import * as constant from '../services/constant';
import axios from 'axios';
import apiUrl from '../globals/config';
import Rating from 'react-rating';
import Moment from 'react-moment';
import { getCarImageUrl, getPriceInLakh } from '../globals/constant';
import { Link, useParams } from 'react-router-dom';
import { Country, State, City } from 'country-state-city';
import { Image } from 'react-bootstrap';
// import { convertFromRaw,convertToRaw } from 'draft-js'
// import { stateToHTML } from 'draft-js-export-html';
// import draftToHtml from "draftjs-to-html";
// import convert from "htmr";
declare var $;

const options = {
  responsive: {
    0: {
      items: 1,
    },
    576: {
      items: 1,
    },
    768: {
      items: 2,
    },
    992: {
      items: 3,
    },
  },
};

const VehicleDetail = (props) => {
  // var user = JSON.parse(localStorage.getItem('user'));
  // if (!props.location.data) {
  //   props.history.push({
  //     pathname: '/',
  //   });
  // }
  const [category, setcategory] = useState(
    props?.location?.data?.category ?? []
  );
  const [subCategory, setsubCategory] = useState(
    props?.location?.data?.subCategory ?? []
  );

  const [intreset, setintreset] = useState(props.location.data?.intreset ?? []);
  const [loction, setloction] = useState(props.location.data?.preferred ?? []);
  const [state, setState] = React.useState(props?.location?.data ?? '');
  const [type, settype] = React.useState(props?.location?.type ?? '');

  const { id } = useParams();
  useEffect(() => {
    const ongoing = (page) => {
      axios
        .get(apiUrl + 'user/getcompanyById/' + id)
        .then((resp) => {
          var data = resp?.data?.data;
          setState(resp?.data?.data);
          setsubCategory(resp?.data?.data?.subCategory);
          setintreset(resp?.data?.data?.intreset);
          setloction(resp?.data?.data?.preferred);
          // state.firstName
          // apiUrl + state.profileImg
          //state?.userType
        })
        .catch((err) => {
          showNotification('danger', err.message);
        });
    };
    ongoing();
  }, []);

  console.log(`state`, state);
  const [faq, setfaq] = useState([
    {
      question: `${type} Name`,
      answer: state?.companyName,
    },
    {
      question: 'Contact Personal',
      answer: state?.contactPerson,
    },
    {
      question: 'Contact No',
      answer: state?.contactNumber,
    },
    {
      question: 'Alternate no.',
      answer: state?.alternativeNumber,
    },
    {
      question: 'Address',
      answer: state?.address,
    },
    {
      question: 'City',
      answer: state?.city,
    },
    {
      question: 'State',
      answer: state?.state,
    },
    {
      question: 'Pincode',
      answer: state?.pincode,
    },
    {
      question: 'County',
      answer: 'India',
    },
    {
      question: 'GST No.',
      answer: state?.gstNo,
    },
    {
      question: 'Turnover of the Company',
      answer: state?.turnoverOfTheCompany,
    },
    {
      question: 'Establishment Yea',
      answer: state?.establishmentYear,
    },
    {
      question: 'Mail ID ',
      answer: state?.email,
    },
    {
      question: 'Website',
      answer: 'Towntask.in',
    },
  ]);

  return (
    <>
      <div className='btc_tittle_main_wrapper'>
        <div className='btc_tittle_img_overlay'></div>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 full_width'>
              <div className='btc_tittle_left_heading'>
                {/* <h1>{state?.type}Detail</h1> */}
              </div>
            </div>
            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 full_width'>
              <div className='btc_tittle_right_heading'>
                <div className='btc_tittle_right_cont_wrapper'>
                  <ul>
                    <li>
                      <Link to='/home'>Home</Link>{' '}
                      <i className='fa fa-angle-right'></i>
                    </li>
                    <li>
                      <Link>{type} Listing</Link>{' '}
                      <i className='fa fa-angle-right'></i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='page-wrapper'>
        <div className='page-details-top-section'>
          <div className='container nayk-container'>
            <div className='row container align-items-center'>
              <div className='img_main col-6 col-md-4 d-flex justify-content-center img_cus_padding_border'>
                {' '}
                {console.log(state?.profileImg, 'state?.profileImg')}
                <img
                  // src={getCarImageUrl(state?.profileImg)} // https://tiimg.tistatic.com/gd/co_logos/MR-MART-v1-149910.jpeg
                  src={state?.profileImg}
                  class='responsive '
                  width='300'
                  height='300'
                />{' '}
              </div>
              <div className='col-6 col-md-8'>
                {' '}
                <h4 className='text_insm'> {state?.companyName}</h4>
                <div className='rating-wrap d-flex'>
                  <div className='rating-list py-3'>
                    <Rating
                      // onChange={this.handleRating}
                      initialRating={3}
                      emptySymbol={<i className='fal fa-star rating_color'></i>}
                      fullSymbol={<i className='fas fa-star rating_color'></i>}
                      readonly
                    />
                  </div>
                  <div className='rating-text'>
                    {/* <span>{this.state.count} reviews</span>
      <a href='#rating_div'>Rate This Car</a> */}
                  </div>
                </div>
                <div className='hide_in_sm'>
                  <img
                    src='/assets/images/trust-stamp-big.png'
                    alt='seal Stamp'
                    width='112'
                    height='112'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='page-details-main-section'>
          <div className='container nayk-container'>
            {/* new container  */}
            <div className='row justify-content-center  align-items-center emi_row'>
              <div className='col-md-12'>
                {/* slider image */}
                <div className='card widget-stat'>
                  <div className='card-header bg-custom-blue '>
                    <h4 className='card-title text-white'>Product's Image</h4>

                    <div className='two_btns_ps'></div>
                  </div>

                  <div className='card-body'>
                    <div className='form-validation'>
                      <div className='profile-personal-info'>
                        <div className='row mb-2'>
                          <div className='col-12 '>
                            <OwlCarousel
                              className='similar-cars owl-carousel owl-theme custom-slider'
                              margin={10}
                              items={3}
                              nav
                              dots={false}
                              {...options}>
                              {state?.otherImage &&
                                state?.otherImage.map((item, id) => (
                                  <div key={id} className='item'>
                                    <div className='x_car_offer_main_boxes_wrapper float_left'>
                                      <div className='x_car_offer_img float_left'>
                                        <img src={item} alt={item} />
                                      </div>
                                    </div>
                                  </div>
                                ))}
                            </OwlCarousel>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* About us */}
                <div className='card widget-stat'>
                  <div className='card-header bg-custom-blue '>
                    <h4 className='card-title text-white'>About Company</h4>

                    <div className='two_btns_ps'></div>
                  </div>

                  <div className='card-body'>
                    <div className='form-validation'>
                      <div className='profile-personal-info'>
                        <div className='row mb-2'>
                          <div className='col-12 col-md-11 '>
                            <p>{state?.aboutCompany}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Category Details */}
                <div className='card widget-stat'>
                  <div className='card-header bg-custom-blue '>
                    <h4 className='card-title text-white'>
                      Product Category Details
                    </h4>

                    <div className='two_btns_ps'></div>
                  </div>

                  <div className='card-body'>
                    <div className='form-validation'>
                      <div className='profile-personal-info'>
                        <div className='row mb-2'>
                          <div className='col-4 '>
                            <h6 className='f-w-500'>Category </h6>
                            <p>
                              {state?.category && state?.category.toString()}
                            </p>
                          </div>
                          <div className='col-4'>
                            <h6 className='f-w-500'>Sub Category </h6>
                            {state?.subCategory &&
                              state?.subCategory.map((data) => {
                                return <p>{data?.name}</p>;
                              })}
                          </div>
                          <div className='col-4'>
                            <h6 className='f-w-500'>Brand Name </h6>
                            {state?.subCategory &&
                              state?.subCategory.map((data) => {
                                return <p>{data?.brandName}</p>;
                              })}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* //Interest Details */}
                <div className='card widget-stat'>
                  <div className='card-header bg-custom-blue '>
                    <h4 className='card-title text-white'>
                      Distribution-ship For Preferred Category &amp; Location
                    </h4>
                    <div className='two_btns_ps'></div>
                  </div>

                  <div className='card-body'>
                    <div className='form-validation'>
                      <div className='profile-personal-info'>
                        <div className='row mb-2'>
                          <div className='col-4 '>
                            <h6 className='f-w-500'>Category </h6>
                            <p>
                              {state?.category && state?.category.toString()}
                            </p>
                          </div>
                          <div className='col-4'>
                            <h6 className='f-w-500'>Sub Category </h6>
                            {state?.intreset &&
                              state?.intreset.map((data) => {
                                return <p>{data?.name}</p>;
                              })}
                          </div>
                          <div className='col-4'>
                            <h6 className='f-w-500'>Brand Name </h6>
                            {state?.intreset &&
                              state?.intreset.map((data) => {
                                return <p>{data?.brandName}</p>;
                              })}
                          </div>
                        </div>
                        <hr />

                        {/* <p>{state.category.toString()}</p> */}
                        <div className='row py-3'>
                          <div className='col-4 '>
                            <h6 className='f-w-500'>State </h6>
                            {state &&
                              state?.preferred &&
                              state?.preferred.map((data) => {
                                return data?.state;
                              })}
                            {/* {state?.preferred && state?.preferred[0]?.state} */}
                          </div>
                          <div className='col-8'>
                            <h6 className='f-w-500'>City </h6>
                            <p>
                              {state &&
                                state?.preferred &&
                                state?.preferred.map((data) => {
                                  return data?.city.toString();
                                })}
                              {/* {state &&
                                state?.preferred &&
                                state?.preferred[0]?.city &&
                                state?.preferred[0]?.city.toString()} */}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* personal Detail  */}
                <div className='card widget-stat'>
                  <div className='card-header bg-custom-blue '>
                    <h4 className='card-title text-white'>
                      Company Contact Details
                    </h4>

                    <div className='two_btns_ps'></div>
                  </div>

                  <div className='card-body'>
                    <div className='form-validation'>
                      <div className='profile-personal-info'>
                        <div className='row mb-2'>
                          <div className='col-4 col-5'>
                            <h6 className='f-w-500'>
                              Name<span className='pull-right'>:</span>
                            </h6>
                          </div>
                          <div className='col-sm-8 col-7'>
                            <span>
                              {state && state?.companyName
                                ? state?.companyName
                                : 'N/A'}{' '}
                            </span>
                          </div>
                        </div>
                        <div className='row mb-2'>
                          <div className='col-4 col-5'>
                            <h6 className='f-w-500'>
                              Contact Personal{' '}
                              <span className='pull-right'>:</span>
                            </h6>
                          </div>
                          <div className='col-sm-8 col-7'>
                            <span>
                              {state && state?.contactPerson
                                ? state?.contactPerson
                                : 'N/A'}{' '}
                            </span>
                          </div>
                        </div>{' '}
                        <div className='row mb-2'>
                          <div className='col-4 col-5'>
                            <h6 className='f-w-500'>
                              Contact No<span className='pull-right'>:</span>
                            </h6>
                          </div>
                          <div className='col-sm-8 col-7'>
                            <span>
                              {state && state?.contactNumber
                                ? state?.contactNumber
                                : 'N/A'}{' '}
                            </span>
                          </div>
                        </div>{' '}
                        <div className='row mb-2'>
                          <div className='col-4 col-5'>
                            <h6 className='f-w-500'>
                              Alternate no.{' '}
                              <span className='pull-right'>:</span>
                            </h6>
                          </div>
                          <div className='col-sm-8 col-7'>
                            <span>
                              {state && state?.alternativeNumber
                                ? state?.alternativeNumber
                                : 'N/A'}{' '}
                            </span>
                          </div>
                        </div>{' '}
                        {state?.type == 1 ? (
                          ''
                        ) : (
                          <>
                            <div className='row mb-2'>
                              <div className='col-sm-3 col-5'>
                                <h6 className='f-w-500'>
                                  Website <span className='pull-right'>:</span>
                                </h6>
                              </div>
                              <div className='col-sm-9 col-7'>
                                <span>
                                  {state && state?.website
                                    ? state.website
                                    : 'N/A'}{' '}
                                </span>
                              </div>
                            </div>
                            <div className='row mb-2'>
                              <div className='col-sm-3 col-5'>
                                <h6 className='f-w-500'>
                                  Number of Brand{' '}
                                  <span className='pull-right'>:</span>
                                </h6>
                              </div>
                              <div className='col-sm-9 col-7'>
                                <span>
                                  {state && state?.numberofBrand
                                    ? state.numberofBrand
                                    : 'N/A'}{' '}
                                </span>
                              </div>
                            </div>
                            <div className='row mb-2'>
                              <div className='col-sm-3 col-5'>
                                <h6 className='f-w-500'>
                                  Distributor Cover Area
                                  <span className='pull-right'>:</span>
                                </h6>
                              </div>
                              <div className='col-sm-9 col-7'>
                                <span>
                                  {state && state?.distributorCoverArea
                                    ? state.distributorCoverArea
                                    : 'N/A'}{' '}
                                </span>
                              </div>
                            </div>
                            <div className='row mb-2'>
                              <div className='col-sm-3 col-5'>
                                <h6 className='f-w-500'>
                                  Number of Employee{' '}
                                  <span className='pull-right'>:</span>
                                </h6>
                              </div>
                              <div className='col-sm-9 col-7'>
                                <span>
                                  {state && state?.numberofEmployee
                                    ? state.numberofEmployee
                                    : 'N/A'}{' '}
                                </span>
                              </div>
                            </div>
                            <div className='row mb-2'>
                              <div className='col-sm-3 col-5'>
                                <h6 className='f-w-500'>
                                  Godown Space{' '}
                                  <span className='pull-right'>:</span>
                                </h6>
                              </div>
                              <div className='col-sm-9 col-7'>
                                <span>
                                  {state && state?.godownSpace
                                    ? state.godownSpace
                                    : 'N/A'}{' '}
                                </span>
                              </div>
                            </div>
                          </>
                        )}
                        <div className='row mb-2 align-items-center'>
                          <div className='col-4 col-5'>
                            <h6 className='f-w-500'>
                              Address<span className='pull-right'>:</span>
                            </h6>
                          </div>
                          <div className='col-sm-8 col-7 d-flex align-items-center'>
                            <span className='file-name-box'>
                              {state && state?.address ? state.address : 'N/A'}
                            </span>
                          </div>
                        </div>{' '}
                        <div className='row mb-2'>
                          <div className='col-4 col-5'>
                            <h6 className='f-w-500'>
                              City <span className='pull-right'>:</span>
                            </h6>
                          </div>
                          <div className='col-sm-8 col-7'>
                            <span>
                              {state && state?.cityVillage
                                ? state.cityVillage
                                : 'N/A'}{' '}
                            </span>
                          </div>
                        </div>{' '}
                        <div className='row mb-2'>
                          <div className='col-4 col-5'>
                            <h6 className='f-w-500'>
                              State <span className='pull-right'>:</span>
                            </h6>
                          </div>
                          <div className='col-sm-8 col-7'>
                            <span>
                              {state && state?.state ? state.state : 'N/A'}{' '}
                            </span>
                          </div>
                        </div>{' '}
                        <div className='row mb-2'>
                          <div className='col-4 col-5'>
                            <h6 className='f-w-500'>
                              Pin Code <span className='pull-right'>:</span>
                            </h6>
                          </div>
                          <div className='col-sm-8 col-7'>
                            <span>
                              {state && state?.pincode ? state.pincode : 'N/A'}{' '}
                            </span>
                          </div>
                        </div>
                        <div className='row mb-2'>
                          <div className='col-4 col-5'>
                            <h6 className='f-w-500'>
                              Country
                              <span className='pull-right'>:</span>
                            </h6>
                          </div>
                          <div className='col-sm-8 col-7'>
                            <span>{state ? 'India' : 'N/A'} </span>
                          </div>
                        </div>{' '}
                        <div className='row mb-2'>
                          <div className='col-4 col-5'>
                            <h6 className='f-w-500'>
                              Establishment Year
                              <span className='pull-right'>:</span>
                            </h6>
                          </div>
                          <div className='col-sm-8 col-7'>
                            <span>
                              {state && state?.establishmentYear
                                ? state?.establishmentYear.split(' ')[3]
                                : 'N/A'}{' '}
                            </span>
                          </div>
                        </div>{' '}
                        <div className='row mb-2'>
                          <div className='col-4 col-5'>
                            <h6 className='f-w-500'>
                              GST No<span className='pull-right'>:</span>
                            </h6>
                          </div>
                          <div className='col-sm-8 col-7'>
                            <span>
                              {state && state?.gstNo ? state?.gstNo : 'N/A'}{' '}
                            </span>
                          </div>
                        </div>
                        <div className='row mb-2'>
                          <div className='col-4 col-5'>
                            <h6 className='f-w-500'>
                              Mail Id
                              <span className='pull-right'>:</span>
                            </h6>
                          </div>
                          <div className='col-sm-8 col-7'>
                            <span>
                              {state && state?.email ? state?.email : 'N/A'}{' '}
                            </span>
                          </div>
                        </div>{' '}
                        <div className='row mb-2'>
                          <div className='col-4 col-5'>
                            <h6 className='f-w-500'>
                              Turnover of the company
                              <span className='pull-right'>:</span>
                            </h6>
                          </div>
                          <div className='col-sm-8 col-7'>
                            <span>
                              {state && state?.turnoverOfTheCompany
                                ? state?.turnoverOfTheCompany
                                : 'N/A'}{' '}
                            </span>
                          </div>
                        </div>{' '}
                        {/* <div className='row mb-2'>
                          <div className='col-4 col-5'>
                            <h6 className='f-w-500'>
                              Website
                              <span className='pull-right'>:</span>
                            </h6>
                          </div>
                          <div className='col-sm-8 col-7'>
                            <span>{'N/A'} </span>
                          </div>
                        </div>{' '} */}
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

export default withRouter(VehicleDetail);
