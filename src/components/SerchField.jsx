import React, { useEffect, useState, useCallback } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import base from '../globals/base';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import showNotification from '../services/notificationService';
import { Stepper } from 'react-form-stepper';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import apiUrl from '../globals/config.js';
import axios from 'axios';
// import { useHistory } from 'react-router-dom';
import moment from 'moment';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import Swal from 'sweetalert2';
import * as session from '../utils/session';
function SerchField(props) {
  const history = useHistory();

  const [successMs, setsuccessMs] = useState('');
  const [successMsg, setsuccessMsg] = useState('');
  const [post, setpost] = useState([]);
  const [brand, setbrand] = useState([]);
  const [Type, setType] = useState([]);
  const [viewData, setViewData] = useState();
  const { register, errors, handleSubmit } = useForm();
  const [inputfilead, setinputfilead] = useState('');
  const [heading, setheading] = useState('Personal Details');
  const [inputfilepan, setinputfilepan] = useState('');
  const [inputfile, setinputfile] = useState('');
  const [inputfilepic, setinputfilepic] = useState('');
  const [districtData, setdistrictData] = useState([]);
  const [blockData, setblockData] = useState([]);
  const [id, setid] = useState('');
  const [Vechicle, setVechicle] = useState([]);
  const [formToggle, setformToggle] = useState(1);
  const [vehicle, setvehicle] = useState(props?.location?.data);
  const [prevData, setprevData] = useState(props);
  const [data, setdata] = useState({});
  const [Selectedyear, setSelectedyear] = useState(null);
  const [errorMsg, seterrorMsg] = useState('');
  const [SelectedDate, setSelectedDate] = useState(null);
  const [Varient, setVarient] = useState([]);
  const [exchange, setexchange] = useState(false);
  const [step, setstep] = useState(0);
  const [state, setState] = React.useState();
  const [statehandle, setstatehandle] = useState({});
  const [cityhandle, setcityhandle] = useState([]); //
  const [category, setcategory] = useState({});
  const [searchresult, setsearchresult] = useState([]);
  const [subCategory, setsubCategory] = useState([]);
  useEffect(() => {
    stateee();
    categoryy();
  }, []);
  function stateee() {
    axios
      .get(
        'https://raw.githubusercontent.com/bhanuc/indian-list/master/state-city.json'
      )
      .then((resp) => setstatehandle(resp?.data))
      .catch((err) => console.log(err));
  }
  function categoryy() {
    axios
      .get(window.location.origin + '/categories.json')
      .then((resp) => setcategory(resp?.data))
      .catch((err) => console.log(err));
  }
  const onSubmit = (formsubmitdata) => {
    serch(formsubmitdata);
  };
  const handleStatefunforcity = (data) => {
    setcityhandle(statehandle[data]);
  };
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setState({
      ...state,
      [name]: value,
    });
  };
  const emptystate = () => {
    setsearchresult([]);
  };
  const updatesubcategory = (e) => {
    setsubCategory(category[e]);
  };
  const serch = (formsubmitdata) => {
    if (session.getToken() == null) {
      Swal.fire({
        title: 'Login To Perform search',
        icon: 'info',
        // html:
        //   "<a href='/company' class='btn btn-primary ' > Company </a>" +
        //   "<a href='/Distributer' class='btn btn-primary ml-3' > Distributer </a>",
        showCloseButton: true,
        showConfirmButton: false,
        showClass: {
          popup: 'animate__animated animate__zoomIn',
        },
        hideClass: {
          popup: 'animate__animated animate__zoomOut',
        },
      });
    } else {
      axios
        .post(apiUrl + 'user/search', formsubmitdata) //data.data.verify_otp
        .then(function (respon) {
          // if()
          setsearchresult(respon?.data?.data?.verify_otp ?? []);
          console.log(`respon...`, respon?.data?.data?.verify_otp.length);
          if (respon?.data?.data?.verify_otp.length == 0) {
            showNotification('danger', 'No record Found');
          }
        })
        .catch(function (error) {
          console.log(`error`, error);
        });
    }
  };
  const view = (data) => {
    console.log('fgff', data);

    history.push({
      pathname: '/vehicle-detail/60f7d9285efda3d40c2857fb',
      data,
      type: state?.type,
    });
  };
  return (
    <>
      {/* <Header /> */}
      <div className='serch '>
        <form autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
          <div className='container-fluid'>
            <div className='row  h-100  emi_row justify-content-center'>
              <div className='coln-8'>
                <div className='card widget-stat'>
                  <div className='card-body'>
                    <div className='form-validation'>
                      <div className='row middle2'>
                        <span className='pt-3 pb-2 cus-text '>
                          Looking For Best Business and Distributership
                          Opportunities In India
                        </span>
                        {/* <span >Select Any one of These </span> */}
                      </div>
                      <div className='row middle'>
                        <div className=''>
                          <div className='form-group '>
                            <div className='d-flex px-2'>
                              <div className='w-110 d-flex align-items-center mr-3'>
                                Company{' '}
                                <input
                                  type='radio'
                                  className='w-auto ml-2 input_cus_radio'
                                  id='val-username'
                                  name='type'
                                  onChange={(e) => {
                                    handleChange(e);
                                    emptystate(e);
                                  }}
                                  value='company'
                                  //   checked={
                                  //     state?.commercialUse == 'yes' ? true : ''
                                  //   }
                                  ref={register}
                                />
                              </div>
                              <div className='w-110 d-flex align-items-center'>
                                Distributer{' '}
                                <input
                                  type='radio'
                                  className='w-auto ml-2 input_cus_radio'
                                  id='val-username'
                                  name='type'
                                  value='distributer'
                                  //   checked={
                                  //     state?.commercialUse == 'no' ? true : ''
                                  //   }
                                  onChange={(e) => {
                                    handleChange(e);
                                    emptystate(e);
                                  }}
                                  ref={register}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='row align-items-center '>
                        <div className='col-sm-12 col-md-6 pb-sm-2'>
                          <select
                            className='form-control'
                            id='exampleFormControlSelect1'
                            name='category'
                            required
                            value={state?.category}
                            onChange={(e) => {
                              handleChange(e);
                              updatesubcategory(e.target.value);
                            }}
                            ref={register}>
                            <option value=''>Select Category</option>
                            {Object.keys(category).map((data) => (
                              <option value={data}>{data}</option>
                            ))}
                          </select>
                        </div>
                        <div className='col-sm-12 col-md-6'>
                          <select
                            className='form-control'
                            id='exampleFormControlSelect1'
                            name='subCategory'
                            required
                            value={state?.subCategory}
                            onChange={(e) => {
                              handleChange(e);
                              // handleStatefunforcity(e.target.value);
                            }}
                            ref={register}>
                            <option value=''>Select Sub Category</option>
                            {subCategory.map((data) => (
                              <option value={data}>{data}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className='row align-item-center pt-2 '>
                        <div className='col-sm-12 col-md-6 pb-sm-2'>
                          <select
                            className='form-control'
                            id='exampleFormControlSelect1'
                            name='state'
                            required
                            value={state?.state}
                            onChange={(e) => {
                              handleChange(e);
                              handleStatefunforcity(e.target.value);
                            }}
                            ref={register}>
                            <option value=''>Select State </option>
                            {Object.keys(statehandle).map((data) => (
                              <option value={data}>{data}</option>
                            ))}
                          </select>
                        </div>
                        <div className='col-sm-12 col-md-6 '>
                          <select
                            className='form-control'
                            id='exampleFormControlSelect1'
                            name='city'
                            required
                            value={state?.city}
                            onChange={(e) => {
                              handleChange(e);
                            }}
                            ref={register}>
                            <option value=''>Select City </option>
                            {cityhandle.map((data) => (
                              <option value={data}>{data}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className=' row align-item-center'>
                        <div className='offset-2 col-8 bb mt-2'>
                          <span className=''>
                            <button
                              type='submit'
                              className='btn px-5 btn-primary btn-lg'>
                              search
                            </button>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h4 class='container-fluid mt-5 pt-5'>
              {searchresult.length != 0
                ? state?.type.toUpperCase() + ' Record found'
                : ''}
            </h4>
            <div className='row justify-content-center h-100 align-items-center'>
              {/* <div className='justify-content-center h-100 align-items-center'> */}

              {searchresult.map((data, index) => (
                <div class='col-xl-3  col-md-6 col-sm-6 col-12'>
                  <div class='x_car_offer_main_boxes_wrapper float_left'>
                    <div class='x_car_offer_img float_left'>
                      <Image
                        className='img-fluid'
                        alt='img'
                        src={apiUrl + data.profileImg}
                      />
                    </div>
                    <div class='gsc_col-xs-12 holder truncate'>
                      {/* <Link title="Maruti Swift" to="/"> */}

                      <div class='price'>
                        <span class='icon-cd_R'>
                          {state?.type == 'company'
                            ? 'Company Name'
                            : 'Distributer Name'}
                          :-
                        </span>
                        {data?.companyName}
                        <sup></sup>
                      </div>
                      <span>
                        <i class='fas fa-map-marker-alt '>
                          <span class='pl-2'>
                            {data?.state}
                            {','}
                            {data?.cityVillage}
                          </span>
                        </i>
                      </span>
                      <div class='BtnFull buttonHolder buttonHolder virtualNumberBtn'>
                        <div
                          class=' btn-dcb btn-col-cus'
                          onClick={() => view(data)}>
                          View {state?.type}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </form>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default SerchField;
