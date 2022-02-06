import React, { useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import axios from 'axios';
import apiUrl from '../../globals/config';
import Header from '../header/header';
import { param } from 'jquery';
import OwlCarousel from 'react-owl-carousel';
import Swal from 'sweetalert2';
import showNotification from '../../services/notificationService';
var fileDownload = require('js-file-download');
function ViewProfile(props) {
  const { id } = useParams();
  // if (!props.location.data) {
  //   props.history.push({
  //     pathname: '/',
  //   });
  // }
  const alert = () => {
    Swal.fire({
      // title: '<strong>HTML <u>example</u></strong>',
      icon: 'info',
      html: ' Please Add Product Category Details  First',

      showCloseButton: true,
      // showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: 'ok',
      cancelButtonText: 'cancel',
    });
  };
  const [role, setrole] = useState('');
  let history = useHistory();
  const [category, setcategory] = useState(
    props?.location?.data?.category ?? []
  );
  const [subCategory, setsubCategory] = useState(
    props?.location?.data?.subCategory ?? []
  );

  const [companyDistributerName, setcompanyDistributerName] = useState('');
  const [loction, setloction] = useState(props.location.data?.preferred ?? []);
  const [render, setrender] = useState('');

  const [state, setState] = React.useState(false ?? []);

  useEffect(() => {
    ongoing();
  }, [render]);
  const ongoing = (page) => {
    axios
      .get(apiUrl + 'user/getcompanyById/' + id)
      .then((resp) => {
        var data = resp?.data?.data;
        setState(resp?.data?.data);
        setrole(resp?.data?.data?.userType);
        setcompanyDistributerName(
          resp?.data?.data?.userType == 1 ? 'Company' : 'Distributor'
        );
      })
      .catch((err) => {
        showNotification('danger', err.message);
      });
  };
  // const getLeads = () => {
  //   axios
  //     .post(apiUrl + 'user/verifyNo', props.location.data)
  //     .then((response) => {
  //       let data = response.data.data;
  //       data.commercialUse = response.data?.data?.vehicle?.commercialUse;
  //       data.vehicleToExchanghe =
  //         response.data?.data?.vehicle?.vehicleToExchanghe;
  //       data.chequeBook = response.data?.data?.docs?.chequeBook;
  //       setState(data);
  //       setblockData([data.block]);
  //       setpost([{ Name: data.postOffice }]);
  //     })
  //     .catch(function (error) {
  //       showNotification('danger', error.message);
  //     });
  // };

  function download(url, name) {
    var fileName = name + '.' + url.split('.')[1];

    axios
      .get(apiUrl + url, {
        responseType: 'blob',
      })
      .then((res) => {
        fileDownload(res.data, fileName);
      });
  }
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
        window.location.reload();
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
              <div className='card widget-stat'>
                <div className='card-header bg-custom-blue '>
                  <h4 className='card-title text-white'>Personal Details</h4>

                  <div className='two_btns_ps'>
                    {/* <Link to="/"> */}
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
                    {/* </Link> */}
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
                      </div>{' '}
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
                              alt='logo'
                              src={
                                state &&
                                state?.profileImg &&
                                state?.profileImg != 'undefined'
                                  ? state.profileImg
                                  : '/assets/images/dummylogo.jpeg'
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
                      <div className='row mb-2'>
                        <div className='col-sm-3 col-5'>
                          <h6 className='f-w-500'>
                            About {companyDistributerName}{' '}
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
                      </div>{' '}
                      <hr />
                    </div>
                  </div>
                </div>
              </div>

              {/* firm Details */}
              <div className='card widget-stat'>
                <div className='card-header bg-custom-blue '>
                  <h4 className='card-title text-white'>
                    {companyDistributerName} Details
                  </h4>

                  <div className='two_btns_ps'>
                    <button
                      type='button'
                      onClick={() => {
                        var newid = role == 1 ? 2 : 5; //1- company 2--distributer
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
                            {console.log(role, 'role')}
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
                      </div>{' '}
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
                      </div>{' '}
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
                      </div>{' '}
                      <hr />
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
                      <hr />
                      <div className='row mb-2'>
                        <div className='col-sm-3 col-5'>
                          <h6 className='f-w-500'>
                            Email id
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
                      </div>{' '}
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
                      </div>{' '}
                      <hr />
                      <div className='row mb-2'>
                        <div className='col-sm-3 col-5'>
                          <h6 className='f-w-500'>
                            Turnover of the {'Firm'}
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
                      </div>{' '}
                      <hr />
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
                          </div>{' '}
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
                          </div>{' '}
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
                          </div>{' '}
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
                          </div>{' '}
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
                      </div>{' '}
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
                      </div>{' '}
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
                      </div>{' '}
                      <hr />
                      <div className='row mb-2'>
                        <div className='col-sm-3 col-5'>
                          <h6 className='f-w-500'>
                            City
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
                      </div>{' '}
                      <hr />
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
                      // onClick={() => {
                      //   history.push({
                      //     pathname: '/updateData/' + id,
                      //     data: 3,
                      //   });
                      // }}
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
                                  <th className='width100'>Brand </th>
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
                        if (state?.category.length) {
                          var newid = role == 2 ? 4 : 6; //check role if distributer(role =2) then 4 update form
                          return history.push({
                            pathname: '/updateData/' + id,
                            data: newid,
                          });
                        } else {
                          alert();
                        }
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

              {/* product image  */}
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

            <div className='col-lg-12 d-flex '>
              {/* <Link to='/leads'> */}
              <button
                type='button'
                className='btn btn-primary mr-2'
                onClick={(e) => {
                  history.goBack();
                }}>
                Back
              </button>
              {/* </Link> */}
            </div>

            {/* <input type='button' value='button' /> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewProfile;
