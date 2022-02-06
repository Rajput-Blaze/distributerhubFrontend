/*  ©2020 Ozvid Technologies Pvt. Ltd. All Rights Reserved.Hosted by jiWebHosting.com  */
import React from 'react';
import base from '../../globals/base';
import { Link } from 'react-router-dom';

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='footer'>
        <div className='copyright'>
          <p className='mb-0'>
            © 2016-2022 <a href='/#0/'>distributorhub</a> | All Rights Reserved.
            Developed By{' '}
            <a target='_blank' href='https://rajput-blaze.github.io/'>
              Vishwajeet Singh
            </a>
          </p>
        </div>
      </div>
    );
  }
}
