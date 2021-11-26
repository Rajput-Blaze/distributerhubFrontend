import React, { useEffect, useState, useCallback } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import base from '../../globals/base';
import Header from '../header/header';
import Footer from '../footer/footer';
import Swal from 'sweetalert2';
import { v4 as uuidv4 } from 'uuid';
import { Multiselect } from 'multiselect-react-dropdown';

import showNotification from '../../services/notificationService';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import apiUrl from '../../globals/config';
import axios from 'axios';
import moment from 'moment';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import DatePicker from 'react-datepicker';
import _ from 'underscore';
import 'react-datepicker/dist/react-datepicker.css';
function Index(props) {
  // if (!props.location?.data) {
  //   props.history.push({
  //     pathname: "/",
  //   });
  // }
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
  const { id } = useParams();
  const [Selectedyear, setSelectedyear] = useState(null);
  const [SelectedDate, setSelectedDate] = useState(null);
  const [statehandle, setstatehandle] = useState({});
  const [successMsg, setsuccessMsg] = useState('');
  const [email, setemail] = useState('');
  const [viewData, setViewData] = useState();
  const { register, errors, handleSubmit } = useForm();
  const [cityhandle, setcityhandle] = useState([]);
  const [imagename, setimagename] = useState('');
  const [otherImage, setotherImage] = useState('');
  const [inputfilepan, setinputfilepan] = useState('');
  const [inputfile, setinputfile] = useState('');
  const [inputfilepic, setinputfilepic] = useState('');
  const [districtData, setdistrictData] = useState([]);
  const [blockData, setblockData] = useState([]);
  const [brand, setbrand] = useState([]);
  const [Type, setType] = useState([]);
  const [iscomplete, setiscomplete] = useState(false);
  const [subCategory, setsubCategory] = useState([]);
  const [formToggle, setformToggle] = useState(props.location.data ?? 3);
  const [heading, setheading] = useState(
    formToggle == 1
      ? 'Personal Details'
      : formToggle == 2
      ? 'Firm Detail'
      : formToggle == 3
      ? 'Category'
      : formToggle == 4
      ? 'Intrest'
      : 'Firm Detail'
  );
  const [prevData, setprevData] = useState(props);
  const [data, setdata] = useState({});
  const [pramsdata, setpramsdata] = useState(props.location.data);
  const [approve, setapprove] = useState(
    props?.location?.categorydata && props?.location?.categorydata[0]
      ? props?.location?.categorydata[0]
      : ''
  );
  const [errorMsg, seterrorMsg] = useState('');
  const [category, setcategory] = useState({});
  const [state, setState] = React.useState({
    firstName: '',
    lastName: '',
    fatherName: '',
    dateOfBirth: '',
    noOfUnits: '',
    email: '',
    phoneNo: '',
    pincode: '',
    district: '',
    postOffice: '',
    block: '',
    cityVillage: '',
    address: '',
    landmark: '',
    aadharNo: '',
    aadharDoc: '',
    pan: '',
    panDoc: '',
    bankDetails: '',
    bankDoc: '',
    financeSchemes: '',
    buyingTimeline: '',
    exchangeCompany: '',
    commercialUse: '',
    brand: '',
    type: '',
    variants: '',
  });
  console.log(
    `props.location.categorydata`,
    props?.location?.categorydata && props?.location?.categorydata[0]
  );
  useEffect(() => {
    getLeads();
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
      .then((resp) => {
        if (approve) {
          console.log(resp?.data[approve], 'resp?.data[approve]');
          setsubCategory(resp?.data[approve]);
        }

        return setcategory(resp?.data);
      })
      .catch((err) => console.log(err));
  }
  const sweetAlert = (msg) => {
    Swal.fire({
      title: msg,
      timer: 7000,
      icon: 'success',

      confirmButtonText: 'OK',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        props.history.goBack();
      } else {
        props.history.goBack();
      }
      // setTimeout(history.goBack(), 500);
    });
  };
  const getLeads = () => {
    axios
      .get(apiUrl + 'user/getcompanyById/' + id)
      .then((resp) => {
        var data = resp?.data?.data;
        setState(resp?.data?.data);
        setemail(resp?.data?.data?.email);
      })
      .catch((err) => {
        showNotification('danger', err.message);
      });
  };

  const onSubmit = (formsubmitdata) => {
    const formData = new FormData();
    formData.append('email', email);

    if (formToggle == 1 || formToggle == 2 || formToggle == 5) {
      // const formData = new FormData();
      Object.keys(formsubmitdata).forEach((key) => {
        if (formsubmitdata[key]) {
          formData.append([key], formsubmitdata[key]);
          console.log([key], formsubmitdata[key]);
        }
      });
      // formData.append('phoneNo', phoneNo);
    }
    // console.log(`phoneNo`, phoneNo);
    // return; category
    else if (formToggle == 3) {
      formData.append('category', JSON.stringify([state?.category]));
      formData.append('subCategory', JSON.stringify(inputFields));
    } else if (formToggle == 4) {
      formData.append('preferred', JSON.stringify(inputFieldscity)); //state or city

      formData.append('intreset', JSON.stringify(intrestinputFields));
    }
    axios
      .post(apiUrl + 'user/updateuserprofile/', formData)
      .then((resp) => {
        console.log(`resp`, resp);
        sweetAlert('Update Successfully');
      })
      .catch((err) => {
        showNotification('danger', err.response.data.message);
      });
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
  };
  const updatesubcategory = (e) => {
    setsubCategory(category[e]);
    // console.log(`subCategory`, category[e]);
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

  const checkpincode = (e) => {
    var pincode = e.target.value;
    let checkReg = /(^[0-9][0-9][0-9][0-9][0-9][0-9]$)/g;
    if (checkReg.test(pincode)) {
      axios
        .get('https://api.postalpincode.in/pincode/' + pincode)
        .then((res) => {
          if (res?.data?.[0]?.PostOffice) {
            // setpost(res.data[0].PostOffice);
            var data = res.data[0].PostOffice;
            var block = [];
            data.map((data, index) => {
              block.push(data.Block);
            });
            // setblockData([...new Set(block)]);
            let obj = {
              district: res.data[0].PostOffice[0].District,
              pincode: pincode,
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
  const back = () => {
    props.history.goBack();
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
  if (state)
    return (
      <>
        <div className='content-body'>
          <form autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
            <div className='container-fluid'>
              <div className='row justify-content-center h-100 align-items-center emi_row'>
                <div className='col-md-12'>
                  <div className='card widget-stat'>
                    <div className='card-header bg-custom-blue'>
                      <h4 className='card-title text-white'>{heading}</h4>
                    </div>
                    <div className='card-body'>
                      <div className='form-validation'>
                        {formToggle == 1 && (
                          <div className='row'>
                            <div className='col-lg-6'>
                              <div className='form-group '>
                                <label
                                  className='col-form-label'
                                  htmlFor='val-username'>
                                  First Name
                                  <span className='text-danger'>*</span>
                                </label>

                                <input
                                  type='text'
                                  className='form-control'
                                  id='val-username'
                                  name='firstName'
                                  value={state?.firstName}
                                  onChange={handleChange}
                                  required
                                  placeholder='Enter name..'
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
                            <div className='col-lg-6'>
                              <div className='form-group '>
                                <label
                                  className='col-form-label'
                                  htmlFor='val-username'>
                                  Last Name
                                </label>
                                <input
                                  required
                                  className='form-control'
                                  id='val-username'
                                  name='lastName'
                                  value={state?.lastName}
                                  onChange={handleChange}
                                  placeholder='Enter last name..'
                                  ref={register}
                                />
                              </div>
                            </div>
                            <div className='col-lg-6'>
                              <div className='form-group '>
                                <label
                                  className='col-form-label'
                                  htmlFor='val-username'>
                                  Email
                                </label>
                                <input
                                  type='email'
                                  className='form-control'
                                  id='val-username'
                                  name='email'
                                  required
                                  value={state?.email}
                                  onChange={handleChange}
                                  placeholder='Enter email..'
                                  ref={register({
                                    // required: "This is required ",
                                    pattern: {
                                      value:
                                        /^(([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})+([;.](([a-zA-Z0-9_\-\.]+)@{[a-zA-Z0-9_\-\.]+0\.([a-zA-Z]{2,5}){1,25})+)*$/,
                                      message: 'Enter Valid Email id',
                                    },
                                  })}
                                  defaultValue={viewData?.email}
                                />
                                <ErrorMessage
                                  errors={errors}
                                  name='email'
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
                                  Mobile Number
                                </label>
                                <input
                                  className='form-control'
                                  id='val-username'
                                  disabled
                                  maxLength='10'
                                  value={state?.phoneNo}
                                  onChange={handleChange}
                                  onKeyPress={(e) => restrictAlpha(e)}
                                  placeholder='Enter mobile number...'
                                  defaultValue={viewData?.phone}
                                />
                              </div>
                            </div>

                            <div className='col-lg-12'>
                              <div className='contect_form1'>
                                <textarea
                                  rows='4'
                                  placeholder='Message *'
                                  name='aboutCompany'
                                  defaultValue={state?.aboutCompany}
                                  ref={register}
                                  maxLength='500'></textarea>
                              </div>
                            </div>
                            <div className='col-lg-12 d-flex justify-content-end'>
                              <button
                                type='button'
                                onClick={back}
                                className='btn btn-primary mr-2'>
                                Back
                              </button>
                              <button type='submit' className='btn btn-primary'>
                                Save
                              </button>
                            </div>
                            <p className='successMag'>{successMsg}</p>
                          </div>
                        )}
                        {formToggle == 2 && (
                          <div className='row'>
                            <div className='col-lg-6'>
                              <div className='form-group '>
                                <label
                                  className='col-form-label'
                                  htmlFor='val-username'>
                                  Company Name
                                </label>
                                <input
                                  required
                                  className='form-control'
                                  id='val-username'
                                  name='companyName'
                                  value={state?.companyName}
                                  onChange={handleChange}
                                  placeholder='Enter  Company Name..'
                                  ref={register}
                                />
                              </div>
                            </div>
                            <div className='col-lg-6'>
                              <div className='form-group '>
                                <label
                                  className='col-form-label'
                                  htmlFor='val-username'>
                                  Contact person
                                </label>
                                <input
                                  required
                                  className='form-control'
                                  id='val-username'
                                  name='contactPerson'
                                  value={state?.contactPerson}
                                  onChange={handleChange}
                                  placeholder='Enter  Contact person..'
                                  ref={register}
                                />
                              </div>
                            </div>
                            <div className='col-lg-6'>
                              <div className='form-group '>
                                <label
                                  className='col-form-label'
                                  htmlFor='val-username'>
                                  Contact number
                                </label>
                                <input
                                  required
                                  className='form-control'
                                  id='val-username'
                                  name='contactNumber'
                                  value={state?.contactNumber}
                                  onChange={handleChange}
                                  placeholder='Enter Contact number..'
                                  ref={register}
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
                                  required
                                  className='form-control'
                                  id='val-username'
                                  name='alternativeNumber'
                                  value={state?.alternativeNumber}
                                  onChange={handleChange}
                                  placeholder='Enter Alternative number..'
                                  ref={register}
                                />
                              </div>
                            </div>
                            <div className='col-lg-6'>
                              <div className='form-group '>
                                <label
                                  className='col-form-label'
                                  htmlFor='val-username'>
                                  Alternative email
                                </label>
                                <input
                                  required
                                  className='form-control'
                                  id='val-username'
                                  name='alternativeEmail'
                                  value={state?.alternativeEmail}
                                  onChange={handleChange}
                                  placeholder='Enter  Alternative email..'
                                  ref={register}
                                />
                              </div>
                            </div>
                            <div className='col-lg-6'>
                              <div className='form-group '>
                                <label
                                  className='col-form-label'
                                  htmlFor='val-username'>
                                  Establishment Year
                                </label>
                                <input
                                  required
                                  className='form-control'
                                  id='val-username'
                                  name='lastName'
                                  value={state?.lastName}
                                  onChange={handleChange}
                                  placeholder='Enter last name..'
                                  ref={register}
                                />
                              </div>
                            </div>
                            <div className='col-lg-6'>
                              <div className='form-group '>
                                <label
                                  className='col-form-label'
                                  htmlFor='val-username'>
                                  Gst No
                                </label>
                                <input
                                  required
                                  className='form-control'
                                  id='val-username'
                                  name='gstNo'
                                  value={state?.gstNo}
                                  onChange={handleChange}
                                  placeholder='Enter Gst No..'
                                  ref={register}
                                />
                              </div>
                            </div>
                            <div className='col-lg-6'>
                              <div className='form-group '>
                                <label
                                  className='col-form-label'
                                  htmlFor='val-username'>
                                  Turnover of the company
                                </label>
                                <input
                                  required
                                  className='form-control'
                                  id='val-username'
                                  name='turnoverOfTheCompany'
                                  value={state?.turnoverOfTheCompany}
                                  onChange={handleChange}
                                  placeholder='Enter Turnover of the company..'
                                  ref={register}
                                />
                              </div>
                            </div>
                            <div className='col-lg-6'>
                              <div className='form-group '>
                                <label
                                  className='col-form-label'
                                  htmlFor='val-username'>
                                  Pin Code
                                </label>
                                <input
                                  type='text'
                                  className='form-control'
                                  id='val-username'
                                  onKeyPress={(e) => restrictAlpha(e)}
                                  name='pincode'
                                  maxLength={6}
                                  onKeyUp={(e) => checkpincode(e)}
                                  defaultValue={state?.pincode}
                                  placeholder='Enter pin code..'
                                  ref={register}
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
                                  Country
                                </label>
                                <select
                                  className='form-control'
                                  id='exampleFormControlSelect1'
                                  name='Country'
                                  onChange={handleChange}
                                  value={state?.Country}
                                  ref={register}>
                                  <option value='India'>{'India'}</option>
                                </select>
                              </div>
                            </div>
                            <div className='col-lg-6'>
                              <div className='form-group '>
                                <label
                                  className='col-form-label'
                                  htmlFor='val-username'>
                                  State
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
                                  ref={register}>
                                  <option value=''>Select State </option>
                                  {Object.keys(statehandle).map((data) => (
                                    <option value={data}>{data}</option>
                                  ))}
                                </select>
                              </div>
                            </div>

                            <div className='col-lg-6'>
                              <div className='form-group '>
                                <label
                                  className='col-form-label'
                                  htmlFor='val-username'>
                                  City/Village
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
                                  ref={register}>
                                  <option value=''>Select city </option>
                                  {cityhandle.map((data) => (
                                    <option value={data}>{data}</option>
                                  ))}
                                </select>
                              </div>
                            </div>

                            <div className='col-lg-6'>
                              <div className='form-group '>
                                <label
                                  className='col-form-label'
                                  htmlFor='val-username'>
                                  Address
                                </label>

                                <input
                                  type='text'
                                  className='form-control'
                                  id='val-username'
                                  name='address'
                                  value={state?.address}
                                  onChange={handleChange}
                                  placeholder='Enter address name..'
                                  ref={register}
                                />
                              </div>
                            </div>

                            <div className='col-lg-12 d-flex justify-content-end'>
                              <button
                                type='button'
                                className='btn btn-primary mr-2'
                                onClick={back}>
                                Back
                              </button>

                              <button type='submit' className='btn btn-primary'>
                                Save
                              </button>
                            </div>
                            <p className='successMag'>{successMsg}</p>
                          </div>
                        )}
                        {formToggle == 3 && (
                          <>
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
                                          required
                                          name='category'
                                          value={state?.category}
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
                            </div>
                            <div className='row'>
                              {inputFields.map((inputField) => (
                                <div
                                  key={inputField.id}
                                  className='row w-100 bb'>
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
                                      ref={register}>
                                      {/* {subCategory.map((data) => {
                                  <option value={data}>{data}</option>;
                                })} */}
                                      <option value=''>
                                        Select Sub Category
                                      </option>
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
                                      onChange={(event) => {
                                        handleChangeInput(inputField.id, event);
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

                              {/* <h5 class='mt-5 col-sm-6 mb-2 cus_h1_text'>
                                Upload Product Image (* Multiple Image )
                              </h5> */}
                              {/* <div className='row w-100 '>
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
                                                  data +
                                                  e.target.files[key].name;
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
                                </div> */}
                              {/* <div className='col-4 bb'>
                              <button type='button' className='btn btn-primary'>
                                Add
                              </button>
                            </div> */}
                              {/* </div> */}

                              <div className='col-lg-12 d-flex justify-content-end'>
                                <button
                                  type='button'
                                  className='btn btn-primary mr-2'
                                  onClick={back}>
                                  Back
                                </button>

                                <button
                                  type='submit'
                                  className='btn btn-primary'>
                                  Save
                                </button>
                              </div>
                              <p className='successMag'>{successMsg}</p>
                            </div>
                          </>
                        )}
                        {formToggle == 4 && (
                          <>
                            <div className='row'>
                              {intrestinputFields.map((inputField) => (
                                <div
                                  key={inputField.id}
                                  className='row w-100 bb'>
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
                                      <option value=''>
                                        Select Sub Category
                                      </option>
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
                                      isObject={false}
                                      onRemove={function noRefCheck() {}}
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
                                <button
                                  type='button'
                                  className='btn btn-primary mr-2'
                                  onClick={back}>
                                  Back
                                </button>

                                <button
                                  type='submit'
                                  className='btn btn-primary'>
                                  Save
                                </button>
                              </div>

                              <p className='successMag'>{successMsg}</p>
                            </div>
                          </>
                        )}
                        {formToggle == 5 && (
                          <div className='row'>
                            <div className='col-lg-6'>
                              <div className='form-group '>
                                <label
                                  className='col-form-label'
                                  htmlFor='val-username'>
                                  Company Name
                                </label>
                                <input
                                  required
                                  className='form-control'
                                  id='val-username'
                                  name='companyName'
                                  value={state?.companyName}
                                  onChange={handleChange}
                                  placeholder='Enter  Company Name..'
                                  ref={register}
                                />
                              </div>
                            </div>
                            <div className='col-lg-6'>
                              <div className='form-group '>
                                <label
                                  className='col-form-label'
                                  htmlFor='val-username'>
                                  Contact person
                                </label>
                                <input
                                  required
                                  className='form-control'
                                  id='val-username'
                                  name='contactPerson'
                                  value={state?.contactPerson}
                                  onChange={handleChange}
                                  placeholder='Enter  Contact person..'
                                  ref={register}
                                />
                              </div>
                            </div>
                            <div className='col-lg-6'>
                              <div className='form-group '>
                                <label
                                  className='col-form-label'
                                  htmlFor='val-username'>
                                  Contact number
                                </label>
                                <input
                                  required
                                  className='form-control'
                                  id='val-username'
                                  name='contactNumber'
                                  value={state?.contactNumber}
                                  onChange={handleChange}
                                  placeholder='Enter Contact number..'
                                  ref={register}
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
                                  required
                                  className='form-control'
                                  id='val-username'
                                  name='alternativeNumber'
                                  value={state?.alternativeNumber}
                                  onChange={handleChange}
                                  placeholder='Enter Alternative number..'
                                  ref={register}
                                />
                              </div>
                            </div>
                            <div className='col-lg-6'>
                              <div className='form-group '>
                                <label
                                  className='col-form-label'
                                  htmlFor='val-username'>
                                  Alternative email
                                </label>
                                <input
                                  required
                                  className='form-control'
                                  id='val-username'
                                  name='alternativeEmail'
                                  value={state?.alternativeEmail}
                                  onChange={handleChange}
                                  placeholder='Enter  Alternative email..'
                                  ref={register}
                                />
                              </div>
                            </div>
                            <div className='col-lg-6'>
                              <div className='form-group '>
                                <label
                                  className='col-form-label'
                                  htmlFor='val-username'>
                                  Establishment Year
                                </label>
                                <input
                                  required
                                  className='form-control'
                                  id='val-username'
                                  name='lastName'
                                  value={state?.lastName}
                                  onChange={handleChange}
                                  placeholder='Enter last name..'
                                  ref={register}
                                />
                              </div>
                            </div>
                            <div className='col-lg-6'>
                              <div className='form-group '>
                                <label
                                  className='col-form-label'
                                  htmlFor='val-username'>
                                  Gst No
                                </label>
                                <input
                                  required
                                  className='form-control'
                                  id='val-username'
                                  name='gstNo'
                                  value={state?.gstNo}
                                  onChange={handleChange}
                                  placeholder='Enter Gst No..'
                                  ref={register}
                                />
                              </div>
                            </div>
                            <div className='col-lg-6'>
                              <div className='form-group '>
                                <label
                                  className='col-form-label'
                                  htmlFor='val-username'>
                                  Turnover of the company
                                </label>
                                <input
                                  required
                                  className='form-control'
                                  id='val-username'
                                  name='turnoverOfTheCompany'
                                  value={state?.turnoverOfTheCompany}
                                  onChange={handleChange}
                                  placeholder='Enter Turnover of the company..'
                                  ref={register}
                                />
                              </div>
                            </div>
                            <div className='col-lg-6'>
                              <div className='form-group '>
                                <label
                                  className='col-form-label'
                                  htmlFor='val-username'>
                                  Number of Brand
                                </label>

                                <input
                                  type='text'
                                  className='form-control'
                                  id='val-username'
                                  name='numberofBrand'
                                  value={state.numberofBrand}
                                  onChange={handleChange}
                                  placeholder='Enter  Number of Brand'
                                  ref={register}
                                />
                              </div>
                            </div>
                            <div className='col-lg-6'>
                              <div className='form-group '>
                                <label
                                  className='col-form-label'
                                  htmlFor='val-username'>
                                  Distributor Cover Area
                                </label>

                                <input
                                  type='text'
                                  className='form-control'
                                  id='val-username'
                                  name=' distributorCoverArea'
                                  value={state.distributorCoverArea}
                                  onChange={handleChange}
                                  placeholder='Enter Distributor Cover Area'
                                  ref={register}
                                />
                              </div>
                            </div>
                            <div className='col-lg-6'>
                              <div className='form-group '>
                                <label
                                  className='col-form-label'
                                  htmlFor='val-username'>
                                  Number of Employee
                                </label>

                                <input
                                  type='number'
                                  className='form-control'
                                  id='val-username'
                                  name=' numberofEmployee'
                                  onKeyPress={(e) => restrictAlpha(e)}
                                  value={state.numberofEmployee}
                                  onChange={handleChange}
                                  placeholder='Enter Number of Employee'
                                  ref={register}
                                />
                              </div>
                            </div>
                            <div className='col-lg-6'>
                              <div className='form-group '>
                                <label
                                  className='col-form-label'
                                  htmlFor='val-username'>
                                  Godown Space
                                </label>

                                <input
                                  type='text'
                                  className='form-control'
                                  id='val-username'
                                  name='godownSpace'
                                  value={state.godownSpace}
                                  onChange={handleChange}
                                  placeholder='Enter Godown Space'
                                  ref={register}
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
                                  value={state.website}
                                  onChange={handleChange}
                                  placeholder='Enter Website'
                                  ref={register}
                                />
                              </div>
                            </div>

                            <div className='col-lg-6'>
                              <div className='form-group '>
                                <label
                                  className='col-form-label'
                                  htmlFor='val-username'>
                                  Pin Code
                                </label>
                                <input
                                  type='text'
                                  className='form-control'
                                  id='val-username'
                                  onKeyPress={(e) => restrictAlpha(e)}
                                  name='pincode'
                                  maxLength={6}
                                  onKeyUp={(e) => checkpincode(e)}
                                  defaultValue={state?.pincode}
                                  placeholder='Enter pin code..'
                                  ref={register}
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
                                  Country
                                </label>
                                <select
                                  className='form-control'
                                  id='exampleFormControlSelect1'
                                  name='Country'
                                  onChange={handleChange}
                                  value={state?.Country}
                                  ref={register}>
                                  <option value='India'>{'India'}</option>
                                </select>
                              </div>
                            </div>
                            <div className='col-lg-6'>
                              <div className='form-group '>
                                <label
                                  className='col-form-label'
                                  htmlFor='val-username'>
                                  State
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
                                  ref={register}>
                                  <option value=''>Select State </option>
                                  {Object.keys(statehandle).map((data) => (
                                    <option value={data}>{data}</option>
                                  ))}
                                </select>
                              </div>
                            </div>

                            <div className='col-lg-6'>
                              <div className='form-group '>
                                <label
                                  className='col-form-label'
                                  htmlFor='val-username'>
                                  City/Village
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
                                  ref={register}>
                                  <option value=''>Select city </option>
                                  {cityhandle.map((data) => (
                                    <option value={data}>{data}</option>
                                  ))}
                                </select>
                              </div>
                            </div>

                            <div className='col-lg-6'>
                              <div className='form-group '>
                                <label
                                  className='col-form-label'
                                  htmlFor='val-username'>
                                  Address
                                </label>

                                <input
                                  type='text'
                                  className='form-control'
                                  id='val-username'
                                  name='address'
                                  value={state?.address}
                                  onChange={handleChange}
                                  placeholder='Enter address name..'
                                  ref={register}
                                />
                              </div>
                            </div>

                            <div className='col-lg-12 d-flex justify-content-end'>
                              <button
                                type='button'
                                className='btn btn-primary mr-2'
                                onClick={back}>
                                Back
                              </button>

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
      </>
    );
}

export default Index;
