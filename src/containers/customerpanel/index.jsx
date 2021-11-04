import React, { useEffect, useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import base from '../../globals/base';
import Header from '../header/header';
import Footer from '../footer/footer';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import styled from 'styled-components';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import axios from 'axios';
import ToggleButton from 'react-toggle-button'
import showNotification from '../../.../../services/notificationService';
import jwt_decode from 'jwt-decode';
import * as constant from '../.../../../services/constant';
import apiUrl from '../../globals/config';
var fileDownload = require('js-file-download');
export default function Index(props) {
  const [category, setcategory] = useState(
    props?.location?.data?.category ?? []
  );
  const [subCategory, setsubCategory] = useState(
    props?.location?.data?.subCategory ?? []
  );
  const [id, setid] = useState('');
  const [intreset, setintreset] = useState(props.location.data?.intreset ?? []);
  const [loction, setloction] = useState(props.location.data?.preferred ?? []);
  const [state, setState] = React.useState(false ?? []);
  let history = useHistory();
  const [role, setrole] = useState('');

  useEffect(() => {
    setrole(localStorage.getItem('userType'));

    var decoded = jwt_decode(window.localStorage.getItem('myData'));
    setid(decoded.userId);
    const ongoing = (page) => {
      axios
        .get(apiUrl + 'user/getcompanyById/' + decoded.userId)
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
  console.log(`role`, role);
  return (
    <>
      <div className='content-body'>
        <div className='container-fluid'>
          <div className='row justify-content-center h-100 align-items-center emi_row'>
            <div className='col-md-12'>
              <div className='card widget-stat'>
                <div className='card-header bg-custom-blue '>
                  <h4 className='card-title text-white'>Personal Details</h4>

                  <div className='two_btns_ps'>
                    <button
                      type='button'
                      onClick={() => {
                        history.push({
                          pathname: '/updateData/' + id,
                          data: 1,
                        });
                      }}
                      className='btn btn-light ml-2'>
                      <i
                        className='fa fa-pencil-square-o pr-1'
                        aria-hidden='true'></i>
                      <span>Update</span>
                    </button>
                  </div>
                </div>

                <div className='card-body'>
                  <div className='form-validation'>
                    <div className='profile-personal-info'>
                      <div className='row mb-2'>
                        <div className='col-sm-3 col-5'>
                          <h6 className='f-w-500'>
                            First Name <span className='pull-right'>:</span>
                          </h6>
                        </div>
                        <div className='col-sm-9 col-7'>
                          <span>
                            {state && state.firstName ? state.firstName : 'N/A'}{' '}
                          </span>
                        </div>
                      </div>
                      <div className='row mb-2'>
                        <div className='col-sm-3 col-5'>
                          <h6 className='f-w-500'>
                            Last Name <span className='pull-right'>:</span>
                          </h6>
                        </div>
                        <div className='col-sm-9 col-7'>
                          <span>
                            {state && state.lastName ? state.lastName : 'N/A'}{' '}
                          </span>
                        </div>
                      </div>{' '}
                      <div className='row mb-2'>
                        <div className='col-sm-3 col-5'>
                          <h6 className='f-w-500'>
                            Email<span className='pull-right'>:</span>
                          </h6>
                        </div>
                        <div className='col-sm-9 col-7'>
                          <span>
                            {state && state.email ? state.email : 'N/A'}{' '}
                          </span>
                        </div>
                      </div>{' '}
                      <div className='row mb-2'>
                        <div className='col-sm-3 col-5'>
                          <h6 className='f-w-500'>
                            Mobile Number <span className='pull-right'>:</span>
                          </h6>
                        </div>
                        <div className='col-sm-9 col-7'>
                          <span>
                            {state && state.phoneNo ? state.phoneNo : 'N/A'}{' '}
                          </span>
                        </div>
                      </div>{' '}
                      <div className='row mb-2 align-items-center'>
                        <div className='col-sm-3 col-5'>
                          <h6 className='f-w-500'>
                            Company Logo<span className='pull-right'>:</span>
                          </h6>
                        </div>
                        <div className='col-sm-9 col-7 d-flex align-items-center'>
                          <span>
                            <Image
                              className='doc_image'
                              alt='img'
                              src={
                                state && state.profileImg
                                  ? state.profileImg
                                  : 'assets/images/17.jpg'
                              }
                            />
                          </span>
                          {/* <span className='file-name-box'>
                            {state && state.profileImg
                              ? state.profileImg
                              : 'N/A'}
                          </span>
                          {state && state.docs?.panDoc ? (
                            <button
                              type='button'
                              onClick={(e) => download(state.docs.panDoc)}
                              class='btn btn-dark  bg-dark-cus ml-auto'>
                              <i
                                class='fa fa-cloud-download pr-1'
                                aria-hidden='true'></i>
                              <span>Download</span>
                            </button>
                          ) : (
                            ''
                          )} */}
                        </div>
                      </div>{' '}
                      {role == 1 ? (
                        <div className='row mb-2'>
                          <div className='col-sm-3 col-5'>
                            <h6 className='f-w-500'>
                              About Company{' '}
                              <span className='pull-right'>:</span>
                            </h6>
                          </div>
                          <div className='col-sm-9 col-7'>
                            <span>
                              {state && state.aboutCompany
                                ? state.aboutCompany
                                : 'N/A'}{' '}
                            </span>
                          </div>
                        </div>
                      ) : (
                        ''
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* firm Details */}
              <div className='card widget-stat'>
                <div className='card-header bg-custom-blue '>
                  <h4 className='card-title text-white'>firm Details</h4>

                  <div className='two_btns_ps'>
                    <button
                      type='button'
                      onClick={() => {
                        var newid = role == 1 ? 2 : 5;
                        return history.push({
                          pathname: '/updateData/' + id,
                          data: newid,
                        });
                      }}
                      className='btn btn-light ml-2'>
                      <i
                        className='fa fa-pencil-square-o pr-1'
                        aria-hidden='true'></i>
                      <span>Update</span>
                    </button>
                  </div>
                </div>

                <div className='card-body'>
                  <div className='form-validation'>
                    <div className='profile-personal-info'>
                      <div className='row mb-2'>
                        <div className='col-sm-3 col-5'>
                          <h6 className='f-w-500'>
                            {role == 1
                              ? 'Company Name'
                              : 'Distributer Firm Name'}
                            <span className='pull-right'>:</span>
                          </h6>
                        </div>
                        <div className='col-sm-9 col-7'>
                          <span>
                            {state && state?.companyName
                              ? state.companyName
                              : 'N/A'}{' '}
                          </span>
                        </div>
                      </div>
                      <div className='row mb-2'>
                        <div className='col-sm-3 col-5'>
                          <h6 className='f-w-500'>
                            Contact person<span className='pull-right'>:</span>
                          </h6>
                        </div>
                        <div className='col-sm-9 col-7'>
                          <span>
                            {state && state?.contactPerson
                              ? state.contactPerson
                              : 'N/A'}{' '}
                          </span>
                        </div>
                      </div>{' '}
                      <div className='row mb-2'>
                        <div className='col-sm-3 col-5'>
                          <h6 className='f-w-500'>
                            Contact number <span className='pull-right'>:</span>
                          </h6>
                        </div>
                        <div className='col-sm-9 col-7'>
                          <span>
                            {state && state?.contactNumber
                              ? state.contactNumber
                              : 'N/A'}{' '}
                          </span>
                        </div>
                      </div>
                      <div className='row mb-2'>
                        <div className='col-sm-3 col-5'>
                          <h6 className='f-w-500'>
                            Alternative number
                            <span className='pull-right'>:</span>
                          </h6>
                        </div>
                        <div className='col-sm-9 col-7'>
                          <span>
                            {state && state?.alternativeNumber
                              ? state?.alternativeNumber
                              : 'N/A'}{' '}
                          </span>
                        </div>
                      </div>{' '}
                      <div className='row mb-2'>
                        <div className='col-sm-3 col-5'>
                          <h6 className='f-w-500'>
                            Alternative email{' '}
                            <span className='pull-right'>:</span>
                          </h6>
                        </div>
                        <div className='col-sm-9 col-7'>
                          <span>
                            {state && state?.alternativeEmail
                              ? state?.alternativeEmail
                              : 'N/A'}{' '}
                          </span>
                        </div>
                      </div>{' '}
                      <div className='row mb-2'>
                        <div className='col-sm-3 col-5'>
                          <h6 className='f-w-500'>
                            Establishment Year
                            <span className='pull-right'>:</span>
                          </h6>
                        </div>
                        <div className='col-sm-9 col-7'>
                          <span>
                            {state && state?.establishmentYear
                              ? state?.establishmentYear
                              : 'N/A'}{' '}
                          </span>
                        </div>
                      </div>{' '}
                      <div className='row mb-2'>
                        <div className='col-sm-3 col-5'>
                          <h6 className='f-w-500'>
                            GST No<span className='pull-right'>:</span>
                          </h6>
                        </div>
                        <div className='col-sm-9 col-7'>
                          <span>
                            {state && state?.gstNo ? state?.gstNo : 'N/A'}{' '}
                          </span>
                        </div>
                      </div>
                      <div className='row mb-2'>
                        <div className='col-sm-3 col-5'>
                          <h6 className='f-w-500'>
                            Turnover of the company
                            <span className='pull-right'>:</span>
                          </h6>
                        </div>
                        <div className='col-sm-9 col-7'>
                          <span>
                            {state && state?.turnoverOfTheCompany
                              ? state?.turnoverOfTheCompany
                              : 'N/A'}{' '}
                          </span>
                        </div>
                      </div>{' '}
                      {/* start distributer data */}
                      {role == 1 ? (
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
                      <div className='row mb-2'>
                        <div className='col-sm-3 col-5'>
                          <h6 className='f-w-500'>
                            Pin Code <span className='pull-right'>:</span>
                          </h6>
                        </div>
                        <div className='col-sm-9 col-7'>
                          <span>
                            {state && state?.pincode ? state.pincode : 'N/A'}{' '}
                          </span>
                        </div>
                      </div>
                      <div className='row mb-2'>
                        <div className='col-sm-3 col-5'>
                          <h6 className='f-w-500'>
                            Country
                            <span className='pull-right'>:</span>
                          </h6>
                        </div>
                        <div className='col-sm-9 col-7'>
                          <span>{state ? 'India' : 'N/A'} </span>
                        </div>
                      </div>{' '}
                      <div className='row mb-2'>
                        <div className='col-sm-3 col-5'>
                          <h6 className='f-w-500'>
                            State <span className='pull-right'>:</span>
                          </h6>
                        </div>
                        <div className='col-sm-9 col-7'>
                          <span>
                            {state && state?.state ? state.state : 'N/A'}{' '}
                          </span>
                        </div>
                      </div>{' '}
                      <div className='row mb-2'>
                        <div className='col-sm-3 col-5'>
                          <h6 className='f-w-500'>
                            City/Village
                            <span className='pull-right'>:</span>
                          </h6>
                        </div>
                        <div className='col-sm-9 col-7'>
                          <span>
                            {state && state?.cityVillage
                              ? state.cityVillage
                              : 'N/A'}{' '}
                          </span>
                        </div>
                      </div>{' '}
                      <div className='row mb-2'>
                        <div className='col-sm-3 col-5'>
                          <h6 className='f-w-500'>
                            Address
                            <span className='pull-right'>:</span>
                          </h6>
                        </div>
                        <div className='col-sm-9 col-7'>
                          <span>
                            {state && state?.address ? state.address : 'N/A'}{' '}
                          </span>
                        </div>
                      </div>{' '}
                    </div>
                  </div>
                </div>
              </div>
              <div className='card widget-stat'>
                <div className='card-header bg-custom-blue '>
                  <h4 className='card-title text-white'>
                    Product Category Details
                  </h4>

                  <div className='two_btns_ps'>
                    <button
                      type='button'
                      onClick={() => {
                        history.push({
                          pathname: '/updateData/' + id,
                          data: 3,
                        });
                      }}
                      className='btn btn-light ml-2'>
                      <i
                        className='fa fa-pencil-square-o pr-1'
                        aria-hidden='true'></i>
                      <span>Update</span>
                    </button>
                  </div>
                </div>

                <div className='card-body'>
                  <div className='form-validation'>
                    <div className='profile-personal-info'>
                      <div className='row mb-2'>
                        <div className='col-sm-4 '>
                          <h6 className='f-w-500'>Category </h6>
                          <p>{state?.category && state?.category.toString()}</p>
                        </div>
                        <div className='col-sm-4'>
                          <h6 className='f-w-500'>Sub Category </h6>
                          {state?.subCategory &&
                            state?.subCategory.map((data) => {
                              return <p>{data?.name}</p>;
                            })}
                        </div>
                        <div className='col-sm-4'>
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
                  <div className='two_btns_ps'>
                    <button
                      type='button'
                      onClick={() => {
                        history.push({
                          pathname: '/updateData/' + id,
                          data: 4,
                          categorydata: state?.category,
                        });
                      }}
                      className='btn btn-light ml-2'>
                      <i
                        className='fa fa-pencil-square-o pr-1'
                        aria-hidden='true'></i>
                      <span>Update</span>
                    </button>
                  </div>
                </div>
                {console.log('state?.category', state?.category)}
                <div className='card-body'>
                  <div className='form-validation'>
                    <div className='profile-personal-info'>
                      <div className='row mb-2'>
                        <div className='col-sm-4 '>
                          <h6 className='f-w-500'>Category </h6>
                          <p>{state?.category && state?.category.toString()}</p>
                        </div>
                        <div className='col-sm-4'>
                          <h6 className='f-w-500'>Sub Category </h6>
                          {state?.intreset &&
                            state?.intreset.map((data) => {
                              return <p>{data?.name}</p>;
                            })}
                        </div>
                        <div className='col-sm-4'>
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
                        <div className='col-sm-4 '>
                          <h6 className='f-w-500'>State </h6>
                          {state?.preferred && state?.preferred[0]?.state}
                        </div>
                        <div className='col-sm-8'>
                          <h6 className='f-w-500'>City </h6>
                          <p>
                            {state &&
                              state?.preferred &&
                              state?.preferred[0]?.city &&
                              state?.preferred[0]?.city.toString()}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-lg-12 d-flex '>
              {/* <Link to='/leads'> */}
              {/* <button
                type='button'
                className='btn btn-primary mr-2'
                onClick={(e) => {
                  history.goBack();
                }}>
                Back
              </button> */}
              {/* </Link> */}
            </div>

            {/* <input type='button' value='button' /> */}
          </div>
        </div>
      </div>
    </>
  );
}
