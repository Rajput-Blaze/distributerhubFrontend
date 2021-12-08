import React, { useState, useEffect } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { Link, useParams, useHistory } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import Header from '../../header/header';
import Footer from '../../footer/footer';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import axios from 'axios';
import apiUrl from '../../../globals/config';
function Index(props) {
  const { id } = useParams();
  let history = useHistory();

  // if (!props.location.data) {
  //   props.history.push({
  //     pathname: '/ongoingDeals',
  //   });
  // }
  const [viewData, setViewData] = useState(props.location.data);
  const [state, setState] = React.useState('');

  const fileChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.files[0],
    });
  };
  const handleChange = (evt) => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();

    const data = state;

    const formData = new FormData();
    console.log(`state?.otherImage`, state?.otherImage);
    // return;
    formData.append('otherImage', state?.otherImage);

    axios
      .post(apiUrl + 'user/productImageAdd/' + id, formData)
      .then((resp) => {
        history.goBack();

        console.log(`resp`, resp);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      {/* <Header /> */}
      <div className='content-body'>
        <div className='container-fluid'>
          <div class='row emi_row '>
            <div class='col-lg-12'>
              <div class='card widget-stat'>
                <div class='card-header bg-custom-blue '>
                  <h4 class='card-title text-white'>Add Product</h4>
                </div>
                <div class='card-body'>
                  <div class='form-validation'>
                    <Row>
                      <Col sm={6}>
                        <div class='form-group '>
                          <label class='col-form-label' for='val-username'>
                            Product Image
                          </label>

                          <div class='custom-file'>
                            {/* <input
                              type="file"
                              class="custom-file-input form-control"
                            />
                            <label class="custom-file-label">Choose file</label> */}
                            <input
                              type='file'
                              required
                              name='otherImage'
                              class='custom-file-input form-control'
                              onChange={fileChange}
                            />
                            <label class='custom-file-label'>
                              {state?.otherImage?.name
                                ? state.otherImage?.name
                                : 'Choose File'}
                            </label>
                            {/* <label class="custom-file-label">Choose file</label> */}
                          </div>
                        </div>
                      </Col>

                      <Col sm={12} className='d-flex mt-3'>
                        <Link
                          className='mr-2'
                          onClick={(e) => history.goBack()}>
                          {' '}
                          <button type='submit' class='btn btn-primary'>
                            Back
                          </button>
                        </Link>
                        {/* <Link className='' to='/#0'> */}{' '}
                        <button
                          type='submit'
                          onClick={(e) => {
                            onSubmit(e);
                          }}
                          class='btn btn-primary'>
                          Save
                        </button>
                        {/* </Link> */}
                      </Col>
                    </Row>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default Index;
