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
import ToggleButton from 'react-toggle-button';
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
  const [render, setrender] = useState('');
  const [companyDistributerName, setcompanyDistributerName] = useState('');
  let history = useHistory();
  const [role, setrole] = useState('');
  const [hiddenNumber, sethiddenNumber] = useState(undefined);
  useEffect(() => {
    setrole(localStorage.getItem('userType'));
    setcompanyDistributerName(
      localStorage.getItem('userType') == 1 ? 'Company' : 'Distributor'
    );
    var decoded = jwt_decode(window.localStorage.getItem('myData'));
    setid(decoded.userId);
    const ongoing = (page) => {
      axios
        .get(apiUrl + 'user/getcompanyById/' + decoded.userId)
        .then((resp) => {
          var data = resp?.data?.data;
          setState(resp?.data?.data);
          localStorage.setItem('profileImg', resp?.data?.data?.profileImg);
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
  }, [render]);
  useEffect(() => {
    if (hiddenNumber?.value == false || hiddenNumber?.value == true) {
      axios
        .post(apiUrl + 'user/hideShowNumber/' + id, {
          hiddenNumber: hiddenNumber?.value,
        })
        .then((resp) => {
          var data = resp?.data?.data;
          console.log(`resp?.data`, resp?.data);
          // state.firstName
          // apiUrl + state.profileImg
          //state?.userType
        })
        .catch((err) => {
          console.log(`err`, err);
          showNotification('danger', err.message);
        });
    } else {
      console.log(`---------fire api undefined`, hiddenNumber?.value);
    }
  }, [hiddenNumber?.value]);

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
  const deleteImage = (image) => {
    console.log(`image`, image);

    axios
      .post(apiUrl + 'user/productImageDelete/' + id, { otherImage: image })
      .then((resp) => {
        // history.goBack();
        setrender((e) => e + 1);
        console.log(`resp`, resp);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className='content-body'>
        <div className='container-fluid'>
          <div className='row justify-content-center h-100 align-items-center emi_row'>
            <div className='col-md-12'>
              {state?.status == false ? (
                <div className='card widget-stat'>
                  <div className='card-header bg-custom-red '>
                    <h6 className=' text-white'>
                      Your Account verification is in process, don’t worry it
                      will get verified soon than your profile will get live
                    </h6>
                  </div>
                </div>
              ) : (
                ''
              )}

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
                      <hr />
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
                      <hr />
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
                      <hr />
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
                      <hr />
                      <div className='row mb-2 align-items-center'>
                        <div className='col-sm-3 col-5'>
                          <h6 className='f-w-500'>
                            {companyDistributerName} Logo
                            <span className='pull-right'>:</span>
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
                      <hr />
                      {role == 1 ? (
                        <div className='row mb-2'>
                          <div className='col-sm-3 col-5'>
                            <h6 className='f-w-500'>
                              About {companyDistributerName}
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
                              : 'Distributor Firm Name'}
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
                      <hr />
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
                      </div>
                      <hr />
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
                      </div>
                      <hr />
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
                      </div>
                      <hr />
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
                              ? state?.establishmentYear.split(' ')[3]
                              : 'N/A'}{' '}
                          </span>
                        </div>
                      </div>
                      <hr />
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
                            Turnover of the {role == 1 ? 'Company' : 'Firm'}
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
                      </div>
                      <hr />
                      <div className='row mb-2'>
                        <div className='col-sm-3 col-5'>
                          <h6 className='f-w-500'>
                            Website <span className='pull-right'>:</span>
                          </h6>
                        </div>
                        <div className='col-sm-9 col-7'>
                          <span>
                            {state && state?.website ? state.website : 'N/A'}{' '}
                          </span>
                        </div>
                      </div>
                      {/* start distributer data */}
                      {role == 1 ? (
                        ''
                      ) : (
                        <>
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
                          <hr />
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
                          <hr />
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
                          <hr />
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
                          <hr />
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
                      <hr />
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
                      </div>
                      <hr />
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
                      </div>
                      <hr />
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
                      </div>
                      <hr />
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
                      </div>
                      <hr />
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
                        var newid = role == 2 ? 7 : 3; //check role if distributer(role =2) then 7 update form
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

                <div className='card-body responsiveCardouter'>
                  <div className='form-validation'>
                    <div className='profile-personal-info'>
                      <div className='row responsiveCardinner mb-2'>
                        <div className='col-4 '>
                          <h6 className='f-w-500'>Category </h6>
                          <p>{state?.category && state?.category.toString()}</p>
                        </div>
                        <div className='col-8'>
                          <div className='table-responsive'>
                            <table className='table'>
                              <thead>
                                <tr className='table_th'>
                                  <th className='width100'>Sub Category</th>
                                  <th className='width100'>SubBrand </th>
                                </tr>
                              </thead>
                              <tbody>
                                {state?.subCategory &&
                                  state?.subCategory.map((data) => {
                                    return (
                                      <tr>
                                        <td>{data?.name}</td>
                                        <td>{data?.brandName}</td>
                                      </tr>
                                    );
                                  })}
                              </tbody>
                            </table>
                          </div>
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
                        var newid = role == 2 ? 4 : 6; //check role if distributer(role =2) then 4 update form
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
                {/* {console.log('state?.category', state?.category)} */}
                <div className='card-body'>
                  <div className='table-responsive'>
                    <table className='table'>
                      <thead>
                        <tr className='table_th'>
                          <th className='width100'>Category</th>
                          <th className='width100'>Sub Category</th>
                          {state?.userType == 1 ? (
                            <th className='width100'>Brand</th>
                          ) : (
                            ''
                          )}
                        </tr>
                      </thead>
                      <tbody>
                        {state?.userType == 1 &&
                          state?.intreset.map((data, index) => {
                            return (
                              <tr>
                                {index == 0 ? (
                                  <td>
                                    {state?.category &&
                                      state?.category.toString()}
                                  </td>
                                ) : (
                                  <td></td>
                                )}
                                <td>{data?.name}</td>
                                <td>{data?.brandName}</td>
                              </tr>
                            );
                          })}
                        {state?.userType == 2 &&
                          state?.intreset.map((data, index) => {
                            return (
                              <tr>
                                <td>{data?.category}</td>
                                <td>{data?.name}</td>
                              </tr>
                            );
                          })}
                      </tbody>
                    </table>
                  </div>
                  <div className='table-responsive'>
                    <table className='table'>
                      <thead>
                        <tr className='table_th'>
                          <th className='width100'>State</th>
                          <th className='width100'>City </th>
                        </tr>
                      </thead>
                      <tbody>
                        {state?.preferred?.map((data, index) => {
                          return (
                            <tr>
                              <td>{data?.state}</td>
                              <td>{data?.city.toString()}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className='card widget-stat'>
                <div className='card-header bg-custom-blue '>
                  <h4 className='card-title text-white'>Product's Image</h4>

                  <div className='two_btns_ps'>
                    <button
                      type='button'
                      onClick={() => {
                        history.push({
                          pathname: '/stageone/' + id,
                        });
                      }}
                      className='btn btn-light ml-2'>
                      <i
                        className='fa fa-pencil-square-o pr-1'
                        aria-hidden='true'></i>
                      <span>Add</span>
                    </button>
                  </div>
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
                                    <div
                                      className='d-flex justify-content-center'
                                      // style={{ position: 'absolute' }}
                                    >
                                      {/* //login-button call-btn */}
                                      <p
                                        className='btn btn-danger ml-3'
                                        onClick={(e) => deleteImage(item)}>
                                        Delete
                                      </p>
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
            </div>
            {/* {console.log(state?.value, 'statee.valu')} */}
            <div className='col-lg-12 d-flex '>
              <ToggleButton
                value={hiddenNumber?.value || false}
                onToggle={(value) => {
                  sethiddenNumber({
                    value: !value,
                  });
                }}
              />{' '}
              <p className='pl-2'>
                {hiddenNumber?.value == true
                  ? 'Number Is hidden'
                  : 'Number Is Public'}
              </p>
            </div>

            {/* <input type='button' value='button' /> */}
          </div>
        </div>
      </div>
    </>
  );
}
