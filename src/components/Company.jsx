import React, { useEffect, useState, useCallback } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
import { useHistory } from 'react-router-dom';
import moment from 'moment';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { v4 as uuidv4 } from 'uuid';
import { Multiselect } from 'multiselect-react-dropdown';
// import DatePicker from 'react-date-picker';
import Swal from 'sweetalert2';
import Loaderr from './Loaderr';

var _ = require('underscore');
function Index(props) {
  let history = useHistory();
  const [inputFields, setInputFields] = useState([
    { id: uuidv4(), name: '', brandName: '' },
  ]);

  const [intrestinputFields, setIntrestinputFields] = useState([
    {
      id: uuidv4(),
      name: '',
      brandName: '',
      category: '',
      categoryDropDown: [],
    },
  ]);
  const [inputFieldscity, setInputFieldscity] = useState([
    { id: uuidv4(), state: '', city: '', cityDropDown: [] },
  ]);
  const [passwordhideandshow, setpasswordhideandshow] = useState(false);
  const [passwordhideandshow2, setpasswordhideandshow2] = useState(false);

  const [successMsg, setsuccessMsg] = useState('');
  const [checknumber, setcheckNumber] = useState(false);
  const [Selectedyearerror, setSelectedyearerror] = useState('');
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
  const [checkstatus, setcheckstatus] = useState(true);
  const [Vechicle, setVechicle] = useState([]);
  const [formToggle, setformToggle] = useState(1);
  const [vehicle, setvehicle] = useState(props?.location?.data);
  const [prevData, setprevData] = useState(props);
  const [loading, setloading] = useState(false);
  const [Selectedyear, setSelectedyear] = useState(null);
  const [errorMsg, seterrorMsg] = useState('');
  const [SelectedDate, setSelectedDate] = useState(null);
  const [imagename, setimagename] = useState('');
  const [otherImage, setotherImage] = useState('');
  const [step, setstep] = useState(0);
  const [state, setState] = React.useState();
  const [statehandle, setstatehandle] = useState({});
  const [cityhandle, setcityhandle] = useState([]); //
  const [category, setcategory] = useState({});
  const [subCategory, setsubCategory] = useState([]);
  useEffect(() => {
    stateee();
    categoryy();
  }, []);
  useEffect(() => {
    const unloadCallback = (event) => {
      event.preventDefault();
      event.returnValue = '';
      return '';
    };

    window.addEventListener('beforeunload', unloadCallback);
    return () => window.removeEventListener('beforeunload', unloadCallback);
  }, []);

  const sweetAlert = (msg) => {
    history.push('/company-registration-successful');
    return;
    Swal.fire({
      title: msg,
      timer: 7000,
      icon: 'success',

      confirmButtonText: 'OK',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        history.goBack();
      } else {
        history.goBack();
      }
      // setTimeout(history.goBack(), 500);
    });
  };
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
    if (
      formToggle == 1 &&
      formsubmitdata.email &&
      formsubmitdata.password &&
      checkstatus
    ) {
      setloading(true);
      axios
        .post(apiUrl + 'user/getPhone', {
          email: formsubmitdata.email,
        })
        .then(function (respon) {
          setloading(false);

          seterrorMsg(respon.data.message);

          //  console.log(`respon`, respon);
        })
        .catch(function (error) {
          axios
            .post(apiUrl + 'user/register', {
              phoneNo: formsubmitdata.phoneNo,
              firstName: formsubmitdata.firstName,
              lastName: formsubmitdata.lastName,
              password: formsubmitdata.password,
              companyName: formsubmitdata.companyName,
              email: formsubmitdata.email,
              role: 0, //type
              type: 'company',
              userType: 1,
            })
            .then(function (respon) {
              setcheckstatus(false);
              setloading(false);
              if (formToggle == 1) {
                setstep(1);
                setformToggle(2);
                setheading('Company Details');
              }
              // console.log(`respon`, respon);
            })
            .catch(function (error) {
              setloading(false);
              console.log(`error`, error);
            });
        });
    } else if (formToggle == 1 && !checkstatus) {
      if (formToggle == 1) {
        setstep(1);
        setformToggle(2);
        setheading('Company Details');
      }
    } else if (formToggle == 2 && Selectedyear == null) {
      setSelectedyearerror('This is required ');
      return;
    } else if (formToggle == 6) {
      // console.log(`state`, state);
      setloading(true);
      const formData = new FormData();
      Object.keys(state).forEach((key) => {
        if (state[key]) {
          if (key == 'category') {
            // console.log(`key..`, key == 'category', state?.category);
            formData.append('category', JSON.stringify([state?.category]));
          } else {
            formData.append([key], state[key]);
          }
        }
      });
      for (let i = 0; i < otherImage.length; i++) {
        formData.append('otherImage', otherImage[i]);
      }
      formData.append('establishmentYear', Selectedyear);
      formData.append('profileImg', state?.profileImg);
      formData.append('preferred', JSON.stringify(inputFieldscity)); //state or city
      formData.append('subCategory', JSON.stringify(inputFields));
      formData.append('intreset', JSON.stringify(intrestinputFields));

      axios
        .post(apiUrl + 'user/updateuserprofile', formData)
        .then(function (respon) {
          // console.log(`respon`, respon);
          //showNotification('success', 'Company Added Successfully');
          setloading(false);
          sweetAlert(
            'Company Added Successfully Your Profile is under Review '
          );

          // history.push({
          //   pathname: '/',
          // });
        })
        .catch(function (error) {
          console.log(`error`, error);
          setloading(false);
          showNotification('danger', 'something went wrong');
        });
    } else {
      //console.log('InputFields', inputFields);
    }
    try {
      if (formToggle == 2) {
        setstep(2);
        setformToggle(3);
        setheading('Categories Details');
      } else if (formToggle == 3) {
        setformToggle(4);
        setstep(3);
        setheading('Brand  Name');
      } else if (formToggle == 4) {
        setformToggle(5);
        setstep(4);
        setheading(
          'Select preferred Sub-Category for Distribution ship Appointment'
        );
      } else if (formToggle == 5) {
        setformToggle(6);
        setstep(5);
        setheading('Upload logo');
      }
      //   else if (formToggle == 5) {
      //     setformToggle(6);
      //     setstep(5);
      //     setheading('Upload logo/Video');
      //   }
    } catch (err) {
      showNotification('danger', err?.message);
    }
  };

  const restrictAlpha = (e) => {
    const re = /[0-9A-F:]+/g;
    if (!re.test(e.key)) {
      e.preventDefault();
    }
  };
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setState({
      ...state,
      [name]: value,
    });
    // console.log(`name, value`, name, value);
  };
  const handleStatefunforcity = (data) => {
    setcityhandle(statehandle[data]);
  };
  const fileChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.files[0],
    });
  };
  const handleSeconsRequest = (e) => {
    e.preventDefault();
    setformToggle(1);
    setstep(0);
    setheading('Personal Details');
  };
  const handleThirdRequest = (e) => {
    e.preventDefault();
    setformToggle(2);
    setstep(1);
    setheading('Vehicle Information');
  };
  const handleFourthRequest = (e) => {
    e.preventDefault();
    setstep(2);
    setformToggle(3);
    setheading('Address');
  };
  const handleFivethRequest = (e) => {
    e.preventDefault();
    setstep(3);
    setformToggle(4);
    setheading('buying detail');
  };
  const handlesixthRequest = (e) => {
    e.preventDefault();
    setformToggle(5);
    setheading('Exchange Vehicle');
  };
  const handlesevenRequest = (e) => {
    e.preventDefault();
    setformToggle(6);
    setheading('Document');
  };
  // const gitBlock = (value) => {
  //   axios.get(apiUrl + 'user/getDistrict?district=' + value).then((res) => {
  //     setblockData(res.data.message);
  //   });
  // };
  const checkpincode = (e) => {
    var pincode = e.target.value;
    let checkReg = /(^[0-9][0-9][0-9][0-9][0-9][0-9]$)/g;
    if (checkReg.test(pincode)) {
      axios
        .get('https://api.postalpincode.in/pincode/' + pincode)
        .then((res) => {
          if (res?.data?.[0]?.PostOffice) {
            // setpost(res.data[0].PostOffice);
            // gitBlock(res.data[0].PostOffice[0].District);
            let obj = {
              district: res.data[0].PostOffice[0].District,
              pincode: pincode,
              state: res.data[0].PostOffice[0].State,
            };
            setState({
              ...state,
              ...obj,
            });
            // gitBlock(res.data[0].PostOffice[0].District);
          }
        });
    } else {
      // setpost([]);
    }
  };
  const getBrandList = () => {
    let token = localStorage.getItem('myData');
    let headers = {
      headers: {
        'x-token': `Bearer ${token}`,
      },
    };
    axios
      .get(apiUrl + 'brand/getBrandList?skip=1&limit=2000', headers)
      .then((response) => {
        let data = response?.data?.data[0].data;
        // console.log(`data`, data);
        // setbrand(data);
      })
      .catch(function (error) {
        showNotification('danger', error.message);
      });
  };

  // console.log(`category`, category, Object.key(category));Apparels & Fashion
  const updatesubcategory = (e) => {
    setsubCategory(category[e]);
    // console.log(`subCategory`, category[e]);
  };
  //handle Sub Category
  const handleChangeInput = (id, event) => {
    const newInputFields = inputFields.map((i) => {
      if (id === i.id) {
        i[event.target.name] = event.target.value;
      }
      return i;
    });

    setInputFields(newInputFields);
  };

  const handleAddFields = () => {
    setInputFields([
      ...inputFields,
      { id: uuidv4(), firstName: '', lastName: '' },
    ]);
  };

  const handleRemoveFields = (id) => {
    const values = [...inputFields];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    setInputFields(values);
  };

  const view = (data) => {
    props.history.push({
      pathname: '/viewLead',
      data,
    });
  };
  // state and city
  const handleChangeInputcity = (id, event) => {
    const newInputFields = inputFieldscity.map((i) => {
      if (id === i.id) {
        if (event.target.name == 'state') {
          i[event.target.name] = event.target.value;
          i.cityDropDown = statehandle[event.target.value];
        } else {
          i[event.target.name] = event.target.value;
        }
      }
      return i;
    });

    setInputFieldscity(newInputFields);
  };
  const handleChangeInputcitynew = (id, data) => {
    const newInputFields = inputFieldscity.map((i) => {
      if (id === i.id) {
        i.city = data;
      }
      return i;
    });

    setInputFieldscity(newInputFields);
  };
  const handleRemovecity = (id, data) => {
    const newInputFields = inputFieldscity.map((i) => {
      if (id === i.id) {
        i.city = data;
      }
      return i;
    });
    setInputFieldscity(newInputFields);
  };
  const handleAddFieldscity = () => {
    setInputFieldscity([
      ...inputFieldscity,
      { id: uuidv4(), state: '', city: '', cityDropDown: [] },
    ]);
  };

  const cityRemoveFields = (id) => {
    const values = [...inputFieldscity];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    setInputFieldscity(values);
  };
  //handle  Intreset
  const intresthandleChangeInput = (id, event) => {
    const newInputFields = intrestinputFields.map((i) => {
      if (id === i.id) {
        if (event.target.name == 'category') {
          // console.log(
          //   `id`,
          //   i.categoryDropDown,
          //   event.target.name == 'Category'
          // );
          i[event.target.name] = event.target.value;
          i.categoryDropDown = category[event.target.value];
        }
        i[event.target.name] = event.target.value;
      }
      return i;
    });
    setIntrestinputFields(newInputFields);
  };

  const intresthandleAddFields = () => {
    setIntrestinputFields([
      ...intrestinputFields,
      {
        id: uuidv4(),
        name: '',
        brandName: '',
        category: '',
        categoryDropDown: [],
      },
    ]);
  };

  const intresthandleRemoveFields = (id) => {
    const values = [...intrestinputFields];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    setIntrestinputFields(values);
  };
  const checkNumber = (e) => {
    var phoneNo = e.target.value;
    let checkReg = /(^[5-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]$)/g;

    if (checkReg.test(phoneNo)) {
      setcheckNumber(true);
    }
  };
  const checkNumber2 = (e) => {
    var phoneNo = e;
    let checkReg = /(^[5-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]$)/g;

    if (checkReg.test(phoneNo)) {
      axios
        .post(apiUrl + 'user/getPhone', {
          phoneNo: phoneNo,
        })
        .then(function (respon) {
          seterrorMsg(respon.data.message);

          //  console.log(`respon`, respon);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  const change = () => {
    if (passwordhideandshow) {
      setpasswordhideandshow(false);
    } else {
      setpasswordhideandshow(true);
    }
  };
  const change2 = () => {
    if (passwordhideandshow2) {
      setpasswordhideandshow2(false);
    } else {
      setpasswordhideandshow2(true);
    }
  };
  return (
    <>
      {/* <Header /> */}
      {loading ? <Loaderr /> : null}

      <div className='mt70'>
        <form autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
          <div className='container-fluid'>
            <div className='row justify-content-center h-100 align-items-center emi_row'>
              <div className='col-md-12'>
                <div className='card widget-stat'>
                  <Stepper
                    className='overflow'
                    steps={[
                      { label: 'Personal Detail' },
                      { label: 'Company Details' },
                      { label: 'Categories Details' },
                      { label: 'Brand  Name' },
                      {
                        label: 'Interest Details',
                      },
                      { label: 'Upload logo' },
                    ]}
                    activeStep={step}
                  />
                  <div className='card-header bg-custom-blue '>
                    <h4 className='card-title text-white'>{heading}</h4>
                  </div>
                  <div className='card-body'>
                    <div className='form-validation'>
                      {formToggle == 1 && (
                        <div className='row'>
                          <div className='col-sm-6'>
                            <div className='form-group '>
                              <label
                                className='col-form-label'
                                htmlFor='val-username'>
                                First Name<span className='text-danger'>*</span>
                              </label>

                              <input
                                type='text'
                                className='form-control'
                                id='val-username'
                                name='firstName'
                                value={state?.firstName}
                                onChange={handleChange}
                                placeholder='Enter first name..'
                                // required
                                ref={register({
                                  required: 'This is required ',
                                })}
                              />
                              <ErrorMessage
                                errors={errors}
                                name='firstName'
                                render={({ message }) => (
                                  <p className='error'>{message}</p>
                                )}
                              />
                            </div>
                          </div>
                          <div className='col-sm-6'>
                            <div className='form-group '>
                              <label
                                className='col-form-label'
                                htmlFor='val-username'>
                                Last Name
                              </label>
                              <input
                                type='text'
                                className='form-control'
                                id='val-username'
                                name='lastName'
                                // required
                                value={state?.lastName}
                                onChange={handleChange}
                                placeholder='Enter last name..'
                                ref={register}
                              />
                            </div>
                          </div>
                          <Col sm={6}>
                            <div className='form-group '>
                              <label
                                className='col-form-label'
                                for='val-username'>
                                Company Name
                                <span className='text-danger'>*</span>
                              </label>

                              <input
                                type='text'
                                className='form-control'
                                id='val-username'
                                value={state?.companyName}
                                name='companyName'
                                onChange={handleChange}
                                placeholder='Enter company number..'
                                ref={register({
                                  required: 'This is required ',

                                  // pattern: {
                                  //   value: /^[a-zA-Z]+$/,
                                  //   message: "Enter Valid company Name",
                                  // },
                                })}
                              />
                              <ErrorMessage
                                errors={errors}
                                name='companyName'
                                render={({ message }) => (
                                  <p className='error'>{message}</p>
                                )}
                              />
                            </div>
                          </Col>

                          <div className='col-sm-6'>
                            <div className='form-group '>
                              <label
                                className='col-form-label'
                                htmlFor='val-username'>
                                Email<span className='text-danger'>*</span>
                              </label>
                              <input
                                type='email'
                                className='form-control'
                                id='val-username'
                                name='email'
                                value={state?.email}
                                onChange={(e) => {
                                  seterrorMsg('');
                                  handleChange(e);
                                }}
                                placeholder='Enter email..'
                                ref={register({
                                  required: 'This is required ',
                                  pattern: {
                                    value:
                                      /^(([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})+([;.](([a-zA-Z0-9_\-\.]+)@{[a-zA-Z0-9_\-\.]+0\.([a-zA-Z]{2,5}){1,25})+)*$/,
                                    message: 'Enter Valid Email id',
                                  },
                                })}
                                // defaultValue={viewData?.email}
                              />
                              <ErrorMessage
                                errors={errors}
                                name='email'
                                render={({ message }) => (
                                  <p className='error'>{message}</p>
                                )}
                              />
                              <p className='error'>{errorMsg}</p>
                            </div>
                          </div>
                          <div className='col-sm-6'>
                            <div className='form-group '>
                              <label
                                className='col-form-label'
                                htmlFor='val-username'>
                                Mobile Number{' '}
                                <span className='text-danger'>*</span>
                              </label>
                              <input
                                //  type="number"
                                className='form-control'
                                id='val-username'
                                name='phoneNo'
                                onChange={(e) => {
                                  seterrorMsg('');
                                  handleChange(e);
                                }}
                                maxLength='10'
                                // required
                                value={state?.phoneNo}
                                // onChange={handleChange}
                                onKeyPress={(e) => restrictAlpha(e)}
                                placeholder='Enter mobile number...'
                                // ref={register}
                                ref={register({
                                  required: 'This is required ',
                                  pattern: {
                                    value:
                                      /^[5-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]$/,
                                    message: 'Enter Valid Contact Number',
                                  },
                                })}
                              />
                              <ErrorMessage
                                errors={errors}
                                name='phoneNo'
                                render={({ message }) => (
                                  <p className='error'>{message}</p>
                                )}
                              />
                            </div>
                          </div>
                          <div className='col-sm-6'>
                            <div className='form-group position-relative'>
                              <label
                                className='col-form-label'
                                htmlFor='val-username'>
                                Password<span className='text-danger'>*</span>
                              </label>
                              <input
                                type={passwordhideandshow ? 'text' : 'password'}
                                className='form-control'
                                // onKeyPress={(e) => restrictAlpha(e)}
                                id='val-username'
                                name='password'
                                value={state?.password}
                                onChange={handleChange}
                                placeholder='Enter Password ..'
                                ref={register({
                                  required: 'This is required ',
                                })}
                                // required
                                defaultValue={viewData?.fatherName}
                              />
                              {passwordhideandshow ? (
                                <i
                                  onClick={change}
                                  className='fa fa-eye-slash eye'></i>
                              ) : (
                                <i
                                  onClick={change}
                                  className='fa fa-eye eye'></i>
                              )}
                            </div>
                            <ErrorMessage
                              errors={errors}
                              name='password'
                              render={({ message }) => (
                                <p className='error'>{message}</p>
                              )}
                            />
                          </div>
                          <div className='col-sm-6'>
                            <div className='form-group position-relative'>
                              <label
                                className='col-form-label'
                                htmlFor='val-username'>
                                confirm Password
                                <span className='text-danger'>*</span>
                              </label>
                              <input
                                type={
                                  passwordhideandshow2 ? 'text' : 'password'
                                }
                                className='form-control'
                                // onKeyPress={(e) => restrictAlpha(e)}
                                onChange={handleChange}
                                id='val-username'
                                name='confirm_password'
                                value={state?.confirm_password}
                                // onChange={handleChange}
                                placeholder='Enter confirm Password ..'
                                ref={register({
                                  validate: (value) =>
                                    value === state.password ||
                                    'The passwords do not match',
                                  required: 'This is required ',
                                })}

                                // defaultValue={viewData?.fatherName}
                              />
                              {passwordhideandshow2 ? (
                                <i
                                  onClick={change2}
                                  className='fa fa-eye-slash eye'></i>
                              ) : (
                                <i
                                  onClick={change2}
                                  className='fa fa-eye eye'></i>
                              )}
                            </div>
                            <ErrorMessage
                              errors={errors}
                              name='confirm_password'
                              render={({ message }) => (
                                <p className='error'>{message}</p>
                              )}
                            />
                          </div>

                          <div className='col-lg-12 d-flex justify-content-end'>
                            <button type='submit' className='btn btn-primary'>
                              Next
                            </button>
                            {/* <button type='button' className='btn btn-primary'>
                              Next
                            </button> */}
                          </div>
                          <p className='successMag'>{successMsg}</p>
                        </div>
                      )}
                      {formToggle == 2 && (
                        <div className='row'>
                          <Col sm={6}>
                            <div className='form-group '>
                              <label
                                className='col-form-label'
                                for='val-username'>
                                Company Name
                                <span className='text-danger'>*</span>
                              </label>

                              <input
                                type='text'
                                className='form-control'
                                id='val-username'
                                name='companyName'
                                value={state?.companyName}
                                onChange={handleChange}
                                placeholder='Enter company name..'
                                ref={register({
                                  required: 'This is required ',
                                })}
                              />
                              <ErrorMessage
                                errors={errors}
                                name='companyName'
                                render={({ message }) => (
                                  <p className='error'>{message}</p>
                                )}
                              />
                            </div>
                          </Col>

                          <div className='col-lg-6'>
                            <div className='form-group '>
                              <label
                                className='col-form-label'
                                htmlFor='val-username'>
                                Contact person{' '}
                                <span className='text-danger'>*</span>
                              </label>

                              <input
                                type='text'
                                className='form-control'
                                id='val-username'
                                name='contactPerson'
                                value={state?.contactPerson}
                                onChange={handleChange}
                                placeholder='Enter Contact person..'
                                ref={register({
                                  required: 'This is required ',
                                })}
                              />
                              <ErrorMessage
                                errors={errors}
                                name='contactPerson'
                                render={({ message }) => (
                                  <p className='error'>{message}</p>
                                )}
                              />
                            </div>
                          </div>
                          <div className='col-lg-6'>
                            <div className='form-group '>
                              <label
                                className='col-form-label'
                                htmlFor='val-username'>
                                Contact number{' '}
                                <span className='text-danger'>*</span>
                              </label>

                              <input
                                type='text'
                                className='form-control'
                                id='val-username'
                                name='contactNumber'
                                maxLength='10'
                                onKeyPress={(e) => restrictAlpha(e)}
                                value={state?.contactNumber}
                                onChange={handleChange}
                                placeholder='Enter Contact number..'
                                ref={register({
                                  required: 'This is required ',
                                })}
                              />
                              <ErrorMessage
                                errors={errors}
                                name='contactNumber'
                                render={({ message }) => (
                                  <p className='error'>{message}</p>
                                )}
                              />
                            </div>
                          </div>
                          <div className='col-lg-6'>
                            <div className='form-group '>
                              <label
                                className='col-form-label'
                                htmlFor='val-username'>
                                Alternative number
                              </label>

                              <input
                                type='text'
                                className='form-control'
                                id='val-username'
                                maxLength='10'
                                name='alternativeNumber'
                                onKeyPress={(e) => restrictAlpha(e)}
                                value={state?.alternativeNumber}
                                onChange={handleChange}
                                placeholder='Enter Alternative number..'
                                ref={register({
                                  // required: 'This is required ',
                                })}
                              />
                              {/* <ErrorMessage
                                errors={errors}
                                name='alternativeNumber'
                                render={({ message }) => (
                                  <p className='error'>{message}</p>
                                )}
                              /> */}
                            </div>
                          </div>
                          <div className='col-lg-6'>
                            <div className='form-group '>
                              <label
                                className='col-form-label'
                                htmlFor='val-username'>
                                Email id
                              </label>

                              <input
                                type='email'
                                className='form-control'
                                id='val-username'
                                name='alternativeEmail'
                                value={state?.alternativeEmail}
                                onChange={handleChange}
                                placeholder='Enter Email id'
                                ref={register({
                                  // required: 'This is required ',
                                })}
                              />
                              <ErrorMessage
                                errors={errors}
                                name='alternativeEmail'
                                render={({ message }) => (
                                  <p className='error'>{message}</p>
                                )}
                              />
                            </div>
                          </div>

                          <div className='col-sm-6'>
                            <div className='form-group '>
                              <label
                                className='col-form-label'
                                htmlFor='val-username'>
                                Establishment Year{' '}
                                <span className='text-danger'>*</span>
                              </label>
                              <DatePicker
                                placeholderText='Establishment Year '
                                // onSelect={this.handleDateSelect.bind(this)}
                                selected={Selectedyear}
                                className='form-control'
                                onChange={(date) => setSelectedyear(date)}
                                showYearPicker
                                dateFormat='yyyy'
                              />
                              <p className='error'>{Selectedyearerror}</p>
                            </div>
                          </div>
                          <div className='col-lg-6'>
                            <div className='form-group '>
                              <label
                                className='col-form-label'
                                htmlFor='val-username'>
                                GST No <span className='text-danger'>*</span>
                              </label>

                              <input
                                type='text'
                                className='form-control'
                                id='val-username'
                                name='gstNo'
                                value={state?.gstNo}
                                onChange={handleChange}
                                placeholder='Enter GST No ..'
                                ref={register({
                                  required: 'This is required ',
                                  pattern: {
                                    value:
                                      /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/,
                                    message: 'Enter Valid GST Number',
                                  },
                                })}
                              />
                              <ErrorMessage
                                errors={errors}
                                name='gstNo'
                                render={({ message }) => (
                                  <p className='error'>{message}</p>
                                )}
                              />
                            </div>
                          </div>
                          <div className='col-lg-6'>
                            <div className='form-group '>
                              <label
                                className='col-form-label'
                                htmlFor='val-username'>
                                Turnover of the company{' '}
                                <span className='text-danger'>*</span>
                              </label>

                              <input
                                type='text'
                                className='form-control'
                                id='val-username'
                                name='turnoverOfTheCompany'
                                value={state?.turnoverOfTheCompany}
                                onChange={handleChange}
                                placeholder='Enter Turnover of the company ..'
                                ref={register({
                                  required: 'This is required ',
                                })}
                              />
                              <ErrorMessage
                                errors={errors}
                                name='turnoverOfTheCompany'
                                render={({ message }) => (
                                  <p className='error'>{message}</p>
                                )}
                              />
                            </div>
                          </div>
                          <div className='col-lg-6'>
                            <div className='form-group '>
                              <label
                                className='col-form-label'
                                htmlFor='val-username'>
                                Website
                              </label>

                              <input
                                type='link'
                                className='form-control'
                                id='val-username'
                                name='website'
                                value={state?.website}
                                onChange={handleChange}
                                placeholder='Enter Website'
                                ref={register}
                              />
                              {/* <ErrorMessage
                                errors={errors}
                                name='website'
                                render={({ message }) => (
                                  <p className='error'>{message}</p>
                                )}
                              /> */}
                            </div>
                          </div>
                          {/* address  */}
                          <div className='col-lg-6'>
                            <div className='form-group '>
                              <label
                                className='col-form-label'
                                htmlFor='val-username'>
                                Pin Code <span className='text-danger'>*</span>
                              </label>
                              <input
                                type='text'
                                className='form-control'
                                id='val-username'
                                onKeyPress={(e) => restrictAlpha(e)}
                                name='pincode'
                                maxLength={6}
                                onKeyUp={(e) => checkpincode(e)}
                                // value={state?.pincode}
                                placeholder='Enter pin code..'
                                ref={register({
                                  required: 'This is required ',
                                  pattern: {
                                    value:
                                      /(^[0-9][0-9][0-9][0-9][0-9][0-9]$)/g,
                                    message: 'Enter Valid Pincode ',
                                  },
                                })}
                              />

                              <ErrorMessage
                                errors={errors}
                                name='pincode'
                                render={({ message }) => (
                                  <p className='error'>{message}</p>
                                )}
                              />
                            </div>
                          </div>
                          <div className='col-lg-6'>
                            <div className='form-group '>
                              <label
                                className='col-form-label'
                                htmlFor='val-username'>
                                Country <span className='text-danger'>*</span>
                              </label>
                              <select
                                className='form-control'
                                id='exampleFormControlSelect1'
                                name='Country'
                                onChange={handleChange}
                                value={state?.Country}
                                ref={register({
                                  required: 'This is required ',
                                })}>
                                <option value='India'>{'India'}</option>
                              </select>
                              <ErrorMessage
                                errors={errors}
                                name='Country'
                                render={({ message }) => (
                                  <p className='error'>{message}</p>
                                )}
                              />
                            </div>
                          </div>
                          <div className='col-lg-6'>
                            <div className='form-group '>
                              <label
                                className='col-form-label'
                                htmlFor='val-username'>
                                State <span className='text-danger'>*</span>
                              </label>

                              <select
                                className='form-control'
                                id='exampleFormControlSelect1'
                                name='state'
                                value={state?.state}
                                // onChange={handleChange}
                                onChange={(e) => {
                                  handleChange(e);
                                  handleStatefunforcity(e.target.value);
                                }}
                                ref={register({
                                  required: 'This is required ',
                                })}>
                                <option value=''>Select State </option>
                                {Object.keys(statehandle).map((data) => (
                                  <option value={data}>{data}</option>
                                ))}
                              </select>
                              <ErrorMessage
                                errors={errors}
                                name='state'
                                render={({ message }) => (
                                  <p className='error'>{message}</p>
                                )}
                              />
                            </div>
                          </div>

                          <div className='col-lg-6'>
                            <div className='form-group '>
                              <label
                                className='col-form-label'
                                htmlFor='val-username'>
                                City <span className='text-danger'>*</span>
                              </label>
                              <select
                                className='form-control'
                                id='exampleFormControlSelect1'
                                name='cityVillage'
                                value={state?.cityVillage}
                                onChange={handleChange}
                                // onChange={(e) => {
                                //   handleChange(e);
                                //   handleStatefunforcity(e.target.value);
                                // }}
                                ref={register({
                                  required: 'This is required ',
                                })}>
                                <option value=''>Select city </option>
                                {cityhandle.map((data) => (
                                  <option value={data}>{data}</option>
                                ))}
                              </select>
                              <ErrorMessage
                                errors={errors}
                                name='cityVillage'
                                render={({ message }) => (
                                  <p className='error'>{message}</p>
                                )}
                              />
                            </div>
                          </div>

                          <div className='col-lg-6'>
                            <div className='form-group '>
                              <label
                                className='col-form-label'
                                htmlFor='val-username'>
                                Address<span className='text-danger'>*</span>
                              </label>

                              <input
                                type='text'
                                className='form-control'
                                id='val-username'
                                name='address'
                                value={state?.address}
                                onChange={handleChange}
                                placeholder='Enter address name..'
                                ref={register({
                                  required: 'This is required ',
                                })}
                              />
                              <ErrorMessage
                                errors={errors}
                                name='address'
                                render={({ message }) => (
                                  <p className='error'>{message}</p>
                                )}
                              />
                            </div>
                          </div>

                          <div className='col-lg-12 d-flex justify-content-end'>
                            {/* <button
                              type='button'
                              className='btn btn-primary mr-2'
                              onClick={(e) => {
                                handleSeconsRequest(e);
                              }}>
                              Previous
                            </button> */}
                            <button type='submit' className='btn btn-primary'>
                              Next
                            </button>
                          </div>
                          <p className='successMag'>{successMsg}</p>
                        </div>
                      )}
                      {formToggle == 3 && (
                        <div className='row'>
                          <div className='col-lg-6'>
                            <div className='form-group '>
                              <label
                                className='col-form-label'
                                htmlFor='val-username'>
                                Select Category{' '}
                                <span className='text-danger'>*</span>
                              </label>
                              <div className='py-4 px-4'>
                                {Object.keys(category).map((data) => (
                                  <div className='w-110 my-3 d-flex align-items-center mr-3'>
                                    <input
                                      type='radio'
                                      className='w-auto  mr-3 input_cus_radio'
                                      id='val-username'
                                      name='category'
                                      onChange={(e) => {
                                        handleChange(e);
                                        // console.log(e.target.value);
                                        updatesubcategory(e.target.value);
                                      }}
                                      value={data}
                                      ref={register({
                                        required: 'This is required ',
                                      })}
                                    />

                                    {data}
                                  </div>
                                ))}
                                <ErrorMessage
                                  errors={errors}
                                  name='category'
                                  render={({ message }) => (
                                    <p className='error'>{message}</p>
                                  )}
                                />
                              </div>
                            </div>
                          </div>

                          <div className='col-lg-12 d-flex justify-content-end'>
                            {/* <button
                              type='button'
                              className='btn btn-primary mr-2'
                              onClick={(e) => {
                                vehicle
                                  ? handleSeconsRequest(e)
                                  : handleThirdRequest(e);
                              }}>
                              Previous
                            </button> */}
                            <button type='submit' className='btn btn-primary'>
                              Next
                            </button>
                          </div>
                        </div>
                      )}
                      {formToggle == 4 && (
                        <div className='row'>
                          {inputFields.map((inputField) => (
                            <div key={inputField.id} className='row w-100 bb'>
                              <div className='col-2 cus_d_none_sm bb'>
                                Sub Category{' '}
                                <span className='text-danger'>*</span>
                              </div>
                              <div className='col-md-4 col-sm-6 bb'>
                                <select
                                  className='form-control'
                                  id='exampleFormControlSelect1'
                                  name='name'
                                  required
                                  // value={state?.subCategory}
                                  // value={inputField.firstName}
                                  // onChange={handleChange}
                                  onChange={(event) => {
                                    handleChangeInput(inputField.id, event);
                                    handleChange(event);
                                  }}
                                  ref={register({
                                    required: 'This is required ',
                                  })}>
                                  {/* {subCategory.map((data) => {
                                  <option value={data}>{data}</option>;
                                })} */}
                                  <option value=''>Select Sub Category</option>
                                  {subCategory.map((data) => (
                                    <option value={data}>{data}</option>
                                  ))}
                                </select>
                                <ErrorMessage
                                  errors={errors}
                                  name='name'
                                  render={({ message }) => (
                                    <p className='error'>{message}</p>
                                  )}
                                />
                              </div>
                              <div className='col-md-4 col-sm-6 bb'>
                                <input
                                  type='text'
                                  className='form-control'
                                  id='val-username'
                                  required
                                  name='brandName'
                                  onChange={(event) => {
                                    handleChangeInput(inputField.id, event);
                                    handleChange(event);
                                  }}
                                  // value={state?.brandName}
                                  // onChange={handleChange}
                                  placeholder='Add more Brand'
                                  // required
                                  ref={register({
                                    // required: 'This is required ',
                                  })}
                                />
                              </div>
                              <div className='col-md-2 col-sm-6 bb'>
                                {inputFields.length == 1 ? (
                                  ''
                                ) : (
                                  <span
                                    class='badge light badge-danger btn_cus'
                                    onClick={() =>
                                      inputFields.length == 1
                                        ? ''
                                        : handleRemoveFields(inputField.id)
                                    }>
                                    Delete
                                  </span>
                                )}

                                <span
                                  class='badge light badge-success btn_cus ml-1'
                                  onClick={handleAddFields}>
                                  Add
                                </span>
                              </div>
                            </div>
                          ))}

                          <h5 class='mt-5 col-sm-6 mb-2 cus_h1_text'>
                            Upload Product Image
                          </h5>
                          <div className='row w-100 '>
                            <div className='col-md-6 col-sm-12 '>
                              <div class='form-group '>
                                <label
                                  class='col-form-label cus_d_none_sm'
                                  for='val-username'>
                                  Select Multiple Image
                                </label>

                                <div class='custom-file mb-3'>
                                  <input
                                    type='file'
                                    class='custom-file-input'
                                    id='customFile'
                                    accept='image/*'
                                    onChange={(e) => {
                                      setotherImage(e.target.files);
                                      console.log(
                                        _.size(e.target.files),
                                        'otherImage'
                                      );
                                      let data = '';
                                      Object.keys(e.target.files).forEach(
                                        (key) => {
                                          if (data == '') {
                                            data =
                                              data + e.target.files[key].name;
                                          } else {
                                            data =
                                              data +
                                              ',' +
                                              e.target.files[key].name;
                                          }
                                          setimagename(data);
                                        }
                                      );
                                    }}
                                    name='otherImage'
                                    multiple
                                  />
                                  <label
                                    class='custom-file-label'
                                    for='customFile'>
                                    {imagename ? imagename : 'Choose File'}
                                  </label>
                                </div>
                              </div>
                            </div>
                            {/* <div className='col-4 bb'>
                              <button type='button' className='btn btn-primary'>
                                Add
                              </button>
                            </div> */}
                          </div>

                          <div className='col-lg-12 d-flex justify-content-end'>
                            {/* <button
                              type='button'
                              className='btn btn-primary mr-2'
                              onClick={(e) => {
                                handleFourthRequest(e);
                              }}>
                              Previous
                            </button> */}

                            <button type='submit' className='btn btn-primary'>
                              next
                            </button>
                          </div>
                          <p className='successMag'>{successMsg}</p>
                        </div>
                      )}
                      {formToggle == 5 && (
                        <div className='row'>
                          {intrestinputFields.map((inputField) => (
                            <div key={inputField.id} className='row w-100 bb'>
                              <div className='col-2 cus_d_none_sm bb'>
                                Sub Category
                                <span className='text-danger'>*</span>
                              </div>
                              <div className='col-md-4 col-sm-6 bb'>
                                <select
                                  className='form-control'
                                  id='exampleFormControlSelect1'
                                  name='name'
                                  required
                                  // value={state?.subCategory}
                                  // value={inputField.firstName}
                                  // onChange={handleChange}
                                  onChange={(event) => {
                                    intresthandleChangeInput(
                                      inputField.id,
                                      event
                                    );
                                    handleChange(event);
                                  }}
                                  ref={register}>
                                  {/* {subCategory.map((data) => {
                                  <option value={data}>{data}</option>;
                                })} */}
                                  <option value=''>Select Sub Category</option>
                                  {subCategory.map((data) => (
                                    <option value={data}>{data}</option>
                                  ))}
                                </select>
                              </div>
                              <div className='col-md-4 col-sm-6 bb'>
                                <input
                                  type='text'
                                  className='form-control'
                                  id='val-username'
                                  name='brandName'
                                  required
                                  onChange={(event) => {
                                    intresthandleChangeInput(
                                      inputField.id,
                                      event
                                    );
                                    handleChange(event);
                                  }}
                                  // value={state?.brandName}
                                  // onChange={handleChange}
                                  placeholder='Add more Brand'
                                  // required
                                  ref={register({
                                    //   required: 'This is required ',
                                  })}
                                />
                              </div>
                              <div className='col-2 bb'>
                                {intrestinputFields.length == 1 ? (
                                  ''
                                ) : (
                                  <span
                                    class='badge light badge-danger btn_cus'
                                    onClick={() =>
                                      intrestinputFields.length == 1
                                        ? ''
                                        : intresthandleRemoveFields(
                                            inputField.id
                                          )
                                    }>
                                    Delete
                                  </span>
                                )}

                                <span
                                  class='badge light btn_cus badge-success ml-1'
                                  onClick={intresthandleAddFields}>
                                  Add
                                </span>
                              </div>
                            </div>
                          ))}
                          <h5 class='mt-5 mb-2 cus_h1_text'>
                            Select preferred location for distribution-ship
                            appointment
                          </h5>
                          {inputFieldscity.map((InputFieldcity) => (
                            <div className='row w-100 bb'>
                              <div className='col-md-4 col-sm-6 bb'>
                                <select
                                  className='form-control'
                                  id='exampleFormControlSelect1'
                                  name='state'
                                  required
                                  // value={state?.state}
                                  onChange={(event) => {
                                    handleChangeInputcity(
                                      InputFieldcity.id,
                                      event
                                    );
                                    // handleStatefunforcity(event.target.value);
                                  }}
                                  // onChange={(e) => {
                                  //   handleChange(e);
                                  //   handleStatefunforcity(e.target.value);
                                  // }}
                                  ref={register}>
                                  <option value=''>Select State </option>
                                  {Object.keys(statehandle).map((data) => (
                                    <option value={data}>{data}</option>
                                  ))}
                                </select>
                              </div>
                              <div className='col-md-4 col-sm-6 bb'>
                                <Multiselect
                                  // ref={multiselectRef}
                                  required
                                  isObject={false}
                                  onRemove={(data) => {
                                    handleRemovecity(InputFieldcity.id, data);
                                  }}
                                  onSearch={function noRefCheck() {}}
                                  onSelect={(data) =>
                                    handleChangeInputcitynew(
                                      InputFieldcity.id,
                                      data
                                    )
                                  }
                                  options={InputFieldcity.cityDropDown}
                                />
                              </div>

                              <div className='col-md-4 col-sm-6 bb'>
                                {inputFieldscity.length == 1 ? (
                                  ''
                                ) : (
                                  <span
                                    class='badge light badge-danger btn_cus'
                                    onClick={() =>
                                      cityRemoveFields(InputFieldcity.id)
                                    }>
                                    Delete
                                  </span>
                                )}

                                <span
                                  class='badge  btn_cus light badge-success ml-1'
                                  onClick={handleAddFieldscity}>
                                  Add
                                </span>
                              </div>
                            </div>
                          ))}

                          <div className='col-lg-12 d-flex justify-content-end'>
                            {/* <button
                              type='button'
                              className='btn btn-primary mr-2'
                              onClick={(e) => {
                                handleFivethRequest(e);
                              }}>
                              Previous
                            </button> */}

                            <button type='submit' className='btn btn-primary'>
                              next
                            </button>
                          </div>
                          <p className='successMag'>{successMsg}</p>
                        </div>
                      )}
                      {formToggle == 6 && (
                        <div className='row'>
                          <div class='form-row mt-4'>
                            <div class='col-12 col-sm-4'>
                              <label for='file'>
                                Upload logo of the company
                              </label>
                            </div>
                            <div class='col-12 col-sm-8 mt-4 mt-sm-0'>
                              <input
                                class='multisteps-form__input form-control'
                                type='file'
                                // required
                                accept='image/*'
                                name='profileImg'
                                onChange={fileChange}
                                placeholder='image'
                                ref={register({
                                  //   required: 'This is required ',
                                })}
                              />
                            </div>
                          </div>
                          <div class='col-12 my-3'>
                            <label for='exampleFormControlTextarea1'>
                              About Company
                            </label>
                            <textarea
                              class='form-control'
                              name='aboutCompany'
                              onChange={handleChange}
                              ref={register}
                              maxLength='2000'
                              id='exampleFormControlTextarea1'
                              rows='5'></textarea>{' '}
                          </div>

                          <div className='col-lg-12 d-flex justify-content-end'>
                            {/* <button
                              type='button'
                              className='btn btn-primary mr-2'
                              onClick={(e) => {
                                handlesixthRequest(e);
                              }}>
                              Previous
                            </button> */}

                            <button type='submit' className='btn btn-primary'>
                              Save
                            </button>
                          </div>
                          <p className='successMag'>{successMsg}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default Index;
