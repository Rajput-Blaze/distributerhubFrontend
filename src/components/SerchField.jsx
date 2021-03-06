import React, { useEffect, useState, useCallback } from 'react';
import { Multiselect } from 'multiselect-react-dropdown';

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
import Loaderr from './Loaderr';
import { Helmet } from 'react-helmet';
function SerchField(props) {
  const multiselectRefcity = React.createRef();
  const multiselectRefsub = React.createRef();

  const history = useHistory();

  const [isLoading, setisLoading] = useState(false);
  const [successMsg, setsuccessMsg] = useState('');
  const [cityarray, setcityarray] = useState([]);
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
  const [categoryData, setcategoryData] = useState([]);
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
        'https://raw.githubusercontent.com/Rowdy-Rathore/Indian-Cities/main/states-cities.json'
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
      setisLoading(true);

      var city = JSON.stringify(cityarray);
      let subCategory = JSON.stringify(categoryData);
      subCategory = { subCategory };
      city = { city };
      let che = { ...formsubmitdata, ...city, ...subCategory };
      console.log(che);

      axios
        .post(apiUrl + 'user/search', che) //data.data.verify_otp
        .then(function (respon) {
          // if()

          // console.log(`respon...`, respon?.data?.data?.verify_otp.length);
          if (respon?.data?.data?.verify_otp.length == 0) {
            setisLoading(false);
            showNotification('danger', 'No record Found');
          } else {
            setisLoading(false);
            setsearchresult(respon?.data?.data?.verify_otp ?? []);
            // #search_Result
            document
              .getElementById('search_Result')
              .scrollIntoView({ behavior: 'smooth' });
            // history.push('#search_Result');
          }
        })
        .catch(function (error) {
          setisLoading(false);
          console.log(`error`, error);
        });
      // .finally((e) => {
      //   setisLoading(false);
      // });
    }
  };
  const view = (data) => {
    console.log('fgff', data);
    if (state?.type == 'company') {
      history.push({
        pathname: '/company-detail/' + data._id,
        data,
        type: state?.type,
      });
    } else {
      history.push({
        pathname: '/Distributor-detail/' + data._id,
        data,
        type: state?.type,
      });
    }
  };
  const handleChangee = (data, id) => {
    console.log(data, 'data');
    if (id == 2) setcategoryData(data);
    else {
      setcityarray(data);
    }
  };
  const handleRemove = (data, id) => {
    console.log(data, 'data');
    if (id == 2) setcategoryData(data);
    else {
      setcityarray(data);
    }
  };
  // console.log('cityarray', cityarray);
  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <title>
          Looking for distributorship and business opportunities in
          India-Distributor Hub
        </title>
        <meta
          name='description'
          content='Distributor Hub provides a platform that connects the distributors and companies vice versa, Searching for distributorship and business opportunities in India, Click here'
        />
        <meta
          name='keywords'
          content='Distributor, Distributorship, Looking Distributorship Opportunities in India, Business Opportunities in India, channel partners, business partner, looking for distributors, company looking for distributors, wanted distributor, world best business opportunity, manufacturing companies, Distributor business Opportunities '></meta>
        <link rel='canonical' href='https://distributorhub.in/' />
      </Helmet>
      {isLoading ? <Loaderr /> : ''}
      <div className='serch '>
        <form autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
          <div className='container-fluid'>
            <div className='row  h-100  emi_row justify-content-center'>
              <div className='coln-8'>
                <div className='card widget-stat'>
                  <div className='card-header bg-custom-blue center_text'>
                    <h1 className='card-title text-white h1_tag'>
                      {' '}
                      Looking For Best Business and Distributorship
                      Opportunities In India
                    </h1>

                    <div className='two_btns_ps'></div>
                  </div>
                  <div className='card-body'>
                    <div className='form-validation'>
                      <div className='row middle2 center_text '>
                        <span className='pt-3 pb-2  h1_tag'>
                          FIND BEST CHANNEL PARTNER
                        </span>
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
                                  required
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
                                Distributor{' '}
                                <input
                                  type='radio'
                                  className='w-auto ml-2 input_cus_radio'
                                  id='val-username'
                                  name='type'
                                  required
                                  value='distributor'
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
                            className='form-control shad'
                            id='exampleFormControlSelect1'
                            name='category'
                            required
                            value={state?.category}
                            onChange={(e) => {
                              handleChange(e);
                              multiselectRefsub.current.resetSelectedValues();
                              if (e.target.value != '')
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
                          <Multiselect
                            isObject={false}
                            ref={multiselectRefsub}
                            placeholder='Select Sub Category'
                            onRemove={(data) => {
                              handleRemove(data, 2);
                            }}
                            onSearch={function noRefCheck() {}}
                            onSelect={(data) => {
                              handleChangee(data, 2);
                            }}
                            options={subCategory}
                          />
                        </div>
                      </div>
                      <div className='row align-item-center pt-2 '>
                        <div className='col-sm-12 col-md-6 pb-sm-2'>
                          <select
                            className='form-control shad'
                            id='exampleFormControlSelect1'
                            name='state'
                            required
                            value={state?.state}
                            onChange={(e) => {
                              handleChange(e);
                              handleStatefunforcity(e.target.value);
                              multiselectRefcity.current.resetSelectedValues();
                            }}
                            ref={register}>
                            <option value=''>Select State </option>
                            {Object.keys(statehandle).map((data) => (
                              <option value={data}>{data}</option>
                            ))}
                          </select>
                        </div>
                        <div className='col-sm-12 col-md-6 '>
                          {/* <select
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
                          </select> */}
                          <Multiselect
                            isObject={false}
                            ref={multiselectRefcity}
                            placeholder='Select City'
                            onRemove={(data) => {
                              handleRemove(data, 1);
                            }}
                            onSearch={function noRefCheck() {}}
                            onSelect={(data) => {
                              handleChangee(data, 1);
                            }}
                            options={cityhandle}
                          />
                        </div>
                      </div>
                      <div className=' row align-item-center'>
                        <div className='offset-2 col-8 bb mt-2'>
                          <span className='d-flex'>
                            <button
                              type={isLoading ? 'button' : 'submit'}
                              className='btn px-5 btn-primary btn-lg mr-2'>
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
            <h4 class='container-fluid mt-5 pt-5' id='search_Result'>
              {searchresult.length != 0
                ? state?.type.charAt(0).toUpperCase() +
                  state?.type.slice(1) +
                  ' Record found'
                : ''}
            </h4>
            <div className='row  h-100 align-items-center'>
              {/* <div className='justify-content-center h-100 align-items-center'>
              charAt(0).toUpperCase() + str.slice(1)
               */}

              {searchresult.map((data, index) => (
                <div class='col-10  col-md-4 col-lg-3 offset_1_sm'>
                  <div class='x_car_offer_main_boxes_wrapper float_left'>
                    {/* x_car_offer_img */}
                    <div class=' float_left'>
                      <Image
                        className='img-fluid padding_10'
                        alt='img'
                        src={
                          data &&
                          data?.profileImg &&
                          data?.profileImg != 'undefined'
                            ? data.profileImg
                            : '/assets/images/dummylogo.jpeg'
                        }
                      />
                    </div>
                    <div class='gsc_col-xs-12 holder truncate'>
                      <div class='price'>
                        <span class='icon-cd_R'>
                          {state?.type == 'company'
                            ? 'Company Name'
                            : 'Distributor Name'}
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
                      <div class='BtnFull cus_btn_center buttonHolder buttonHolder virtualNumberBtn'>
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
