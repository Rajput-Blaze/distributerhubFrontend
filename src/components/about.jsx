import React, { Component } from 'react';
import * as service from '../services/apiServices';
import showNotification from '../services/notificationService';
import { getTeamImageUrl } from '../globals/constant';
import HelmetComponent from './HelmetComponentAbout';

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detail: {},
      team: [],
    };
  }

  render() {
    return (
      <>
        <HelmetComponent />
        <div className='page-wrapper mt-5'>
          <div className='about-page-sections section-padding'>
            <nav aria-label='breadcrumb '>
              <ol class='breadcrumb justify-content-end'>
                <li class='breadcrumb-item'>
                  <a href='/'>Home</a>
                </li>
                <li class='breadcrumb-item active' aria-current='page'>
                  About Us
                </li>
              </ol>
            </nav>
            <div className='container nayk-container'>
              <div className='row axil-featured align-items-center'>
                <div className='col-lg-6 col-xl-6 col-md-12 col-12 mb-4 mb-lg-0'>
                  <div className='thumb-inner'>
                    <img
                      className='image w-100 img-fluid'
                      src='./assets/images/about/about.png'
                      alt='Featured Images'
                    />
                  </div>
                </div>
                <div className='col-lg-6 col-xl-6 col-md-12 col-12'>
                  <div className='inner'>
                    <div className='section-title text-left'>
                      <h1 className='title  h1_tag pb-2  '>
                        {'About - distributorhub.in'}
                      </h1>
                    </div>
                    <div className='text-wrap'>
                      Distributor Hub is a B2B platform that connects the
                      distributors with relevant companies / manufacturers’
                      vice-versa, who looking for Distributorship and business
                      opportunities. Those companies involved in manufacturing
                      and marketing and need to have a channel partner for their
                      product penetration in the market. Here,{' '}
                      {/* <a href='/'>
                        <b className=''> */}
                      Distributorhub.in{' '}
                      {/* </b>
                      </a> */}
                      fulfil the gap between companies and distributors by
                      providing them an online gateway that comes with an
                      informative listing of prominent distributors and
                      companies.
                      <div className='pt-3'>
                        Distributorhub.in makes it simple & easy with the online
                        listing to find out the best channel partners as per the
                        requirement of the companies. This platform provides all
                        crucial contact information details which help companies
                        and distributors for going ahead in a future business
                        partnership.
                      </div>
                      Giving solutions to all at one place to find out new
                      distributorship and business opportunities.
                      Distributorhub.in plays a{' '}
                      <a href='/advantage-and-benefit'>
                        <b>vital role for companies and distributors </b>
                      </a>{' '}
                      to enhance their business proficiency with
                      Cost-effectiveness and hassle-free journey to finding out
                      Best channel Partner as per the needed requirement and
                      exploring network for reaching all over India.
                      <div className='pt-3'>
                        This platform gives wing to companies and distributors
                        who all are seeking for appointing distributors and
                        searching manufacturing companies for taking
                        distribution-ship in their desired state/city. This
                        platform providing online search and offline meetings
                        with channel partners.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=' container nayk-container align-items-center pt-5'>
              Many manufacturers / companies in India are struggling and not
              able to set up their business network due to a lack of leads of
              distributors and many distributors still waiting for the best
              companies with whom they want to work as a channel partner. Due to
              limited resource companies / manufacturers and distributor does
              not get meet at one point of time. But with the help of
              distributor hub, it is possible with{' '}
              <a href='/registration-create-free-business-profile'>
                <b> listing their selves on the online portal </b>
              </a>{' '}
              to recognize among the similar or different groups who have never
              been recognized before.
              <div className='pt-3'>
                Distributor hub is bound to congregate every distributor,
                organization, manufacturers and other SMEs at the same place to
                grow their business profitably. Expecting in the future we’ll
                serve millions of clients with the hope of helping new start-ups
                and established organizations. For finding out the best channel
                partner and new business opportunities always click on{' '}
                <a href='/'>
                  <b className=''>Distributorhub.in </b>
                </a>
              </div>
            </div>
          </div>

          <div className='shipping-area about-shipping'>
            <div className='container'>
              <div className='shipping-bg'>
                <div className='row shipping-wrap py-5 py-xl-0'>
                  <div className='col-lg-3'>
                    <div className='shipping-item'>
                      <div className='shipping-img'>
                        <i className='far fa-award' />
                      </div>
                      <div className='shipping-content'>
                        <h2 className='title'>India’s #1</h2>
                        {/* <p className='short-desc mb-0'>Largest Auto portal.</p> */}
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-3 pt-4 pt-lg-0'>
                    <div className='shipping-item'>
                      <div className='shipping-img'>
                        <i className='fal fa-users' />
                      </div>
                      <div className='shipping-content'>
                        <h2 className='title'>Total Distrubter</h2>
                        {/* <p className='short-desc mb-0'>Every 4 minute.</p> */}
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-3 pt-4 pt-lg-0'>
                    <div className='shipping-item'>
                      <div className='shipping-img'>
                        <i className='fal fa-users' />
                      </div>
                      <div className='shipping-content'>
                        <h2 className='title'>Total Company</h2>
                        {/* <p className='short-desc mb-0'>Every 4 minute.</p> */}
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-3 pt-4 pt-lg-0'>
                    <div className='shipping-item'>
                      <div className='shipping-img'>
                        <i className='fas fa-tags' />
                      </div>
                      <div className='shipping-content'>
                        <h2 className='title'>Offers</h2>
                        {/* <p className='short-desc mb-0'>
                          Stay updated pay less.
                        </p> */}
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
  }
}
