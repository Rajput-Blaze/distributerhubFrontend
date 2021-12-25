import React, { Component } from 'react';
import * as service from '../services/apiServices';
import showNotification from '../services/notificationService';
import { getTeamImageUrl } from '../globals/constant';
import { Helmet } from 'react-helmet';

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detail: {},
      team: [],
    };
  }
  // componentDidMount() {
  //   this.getAbout();
  // // }

  // getAbout() {
  //   service.getAbout().then((resp) => {
  //     if (resp?.data?.success) {
  //       this.setState({
  //         detail: resp.data.data[0],
  //       });
  //     }
  //   });
  //   service.getTeamMembers().then((resp) => {
  //     if (resp?.data?.success) {
  //       this.setState({
  //         team: resp.data.data,
  //       });
  //     }
  //   });

  //   // getTeamMembers
  // }

  render() {
    return (
      <>
        <Helmet>
          <meta charSet='utf-8' />
          <title>
            Best Business Opportunities and Distributorship Opportunities in
            India
          </title>
          <meta
            name='description'
            content='Distributorhub.in- Provide the same platform to two different organizations, meet hands for the same purpose of a business that never met before. Showcases, connect and grow your business in India'
          />
          <meta
            name='keywords'
            content='distributorship opportunities, best business opportunities, channel partner, distributor, company, organization, world best business opportunity, new business opportunities'></meta>
          <link
            rel='canonical'
            href='https://distributorhub.in/http://localhost:3000/advantage-and-benefit'
          />
        </Helmet>
        <div className='page-wrapper mt-5'>
          <div className='about-page-sections section-padding'>
            <nav aria-label='breadcrumb '>
              <ol class='breadcrumb justify-content-end'>
                <li class='breadcrumb-item'>
                  <a href='/'>Home</a>
                </li>
                <li class='breadcrumb-item active' aria-current='page'>
                  Advantage and Benefit
                </li>
              </ol>
            </nav>
            <div className='container nayk-container'>
              <div className='row axil-featured align-items-center'>
                <div className='col-lg-6 col-xl-6 col-md-12 col-12 mb-4 mb-lg-0'>
                  <div className='thumb-inner'>
                    <img
                      className='image w-100 img-fluid'
                      src='./assets/images/about/about2.png'
                      alt='Featured Images'
                    />
                  </div>
                </div>
                <div className='col-lg-6 col-xl-6 col-md-12 col-12'>
                  <div className='inner'>
                    <div className='section-title text-left'>
                      <h2 className='title '>{'Why Choose Us'}</h2>
                    </div>
                    <div className='text-wrap'>
                      This platform gives wing to companies and distributors who
                      all are seeking for appointing distributors and searching
                      manufacturing companies for taking distribution-ship in
                      their desired state/city. This platform providing online
                      search and offline meetings with channel partners.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='section-padding why-choose-section'>
            <div className='container nayk-container'>
              <div className='section-title text-center mb--20'>
                <h3 className='title pb-2'>
                  Advantage & Benefit for Distributors, Companies and
                  Manufacturer
                </h3>
                <ul
                  className=''
                  style={{ listStyle: 'disc', padding: '0 10vw' }}>
                  <li style={{ listStyle: 'disc' }}>
                    Provide the same platform to two different organizations,
                    meet hands for the same purpose of a business that never met
                    before.
                  </li>
                  <li style={{ listStyle: 'disc' }}>
                    <a href='/registration-create-free-business-profile'>
                      <b>Create a free Business Profile</b>
                    </a>{' '}
                    and connect with business partners and build your trust
                    through your mutual relationships
                  </li>
                  <li style={{ listStyle: 'disc' }}>
                    Showcase your business category online and make a network,
                    connect and grow your business.
                  </li>
                </ul>
              </div>
              <div className='row'>
                {/* Start Single Service */}
                {/* <div className='col-lg-4 col-md-6 col-12 mt-40'>
                  <div className='service-box '>
                    <div className='icon'>
                      <img
                        src='./assets/images/about/layer.svg'
                        alt='Icon Images'
                      />
                      <div className='text'>1</div>
                    </div>
                    <div className='content'>
                      <h4 className='title'>
                        <a href>
                          Advantage & Benefit for Distributors, Companies and
                          Manufacturer{' '}
                        </a>
                      </h4>
                      <ul
                        className=''
                        style={{ listStyle: 'disc', paddingLeft: '10px' }}>
                        <li style={{ listStyle: 'disc' }}>
                          Provide the same platform to two different
                          organizations, meet hands for the same purpose of a
                          business that never met before.
                        </li>
                        <li style={{ listStyle: 'disc' }}>
                          <a href='/Register'>
                            <b>Create a free Business Profile</b>
                          </a>{' '}
                          and connect with business partners and build your
                          trust through your mutual relationships
                        </li>
                        <li style={{ listStyle: 'disc' }}>
                          Showcase your business category online and make a
                          network, connect and grow your business.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div> */}
                {/* End Single Service  */}
                {/* Start Single Service  */}
                <div className='col-lg-6 col-md-6 col-12 mt-40'>
                  <div className='service-box color-var-2 '>
                    <div className='icon'>
                      <img
                        src='./assets/images/about/layer.svg'
                        alt='Icon Images'
                      />
                      <div className='text'>1</div>
                    </div>
                    <div className='content'>
                      <h4 className='title'>
                        <a href>Distributors Advantages & Benefits</a>
                      </h4>
                      <ul
                        className=''
                        style={{ listStyle: 'disc', paddingLeft: '10px' }}>
                        <li style={{ listStyle: 'disc' }}>
                          The world is becoming digital, and presence online is
                          very important for Today’s business era. Here, the
                          <a href='/'>
                            {' '}
                            <b>Distributors hub</b>
                          </a>{' '}
                          gives new opportunities to being online and growing
                          distributorship with connecting different
                          companies/manufacturers.
                        </li>
                        <li style={{ listStyle: 'disc' }}>
                          Reach and reorganization becomes easy with the online
                          listing of the distributor
                        </li>
                        <li style={{ listStyle: 'disc' }}>
                          Distributor reaches the same category of organization
                          at a one-time click.
                        </li>
                        <li style={{ listStyle: 'disc' }}>
                          Distributor distribution expansion is possible in the
                          same & different categories of products, and it is
                          also possible to expand the same or different area of
                          market, city and state
                        </li>
                        <li style={{ listStyle: 'disc' }}>
                          This online portal gives a platform to distributors
                          for{' '}
                          <a href='/'>
                            <b>searching and taking distributorship</b>
                          </a>{' '}
                          for their new business opportunities.
                        </li>
                        <li style={{ listStyle: 'disc' }}>
                          View every listed company information through one
                          profile.
                        </li>
                        <li style={{ listStyle: 'disc' }}>
                          Get notified when any interested company send a
                          request for conversation, you can instantly connect
                          through call or Mail
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* End Single Service  */}
                {/* Start Single Service  */}
                <div className='col-lg-6 col-md-6 col-12 mt-40'>
                  <div className='service-box color-var-3 '>
                    <div className='icon'>
                      <img
                        src='./assets/images/about/layer.svg'
                        alt='Icon Images'
                      />
                      <div className='text'>2</div>
                    </div>
                    <div className='content'>
                      <h4 className='title'>
                        <a href>Company / Manufacture Advantages & Benefits</a>
                      </h4>
                      <ul
                        className=''
                        style={{ listStyle: 'disc', paddingLeft: '10px' }}>
                        <li style={{ listStyle: 'disc' }}>
                          Search for the distributors in the same Category of
                          Products for The desired market territory now became
                          easy.
                        </li>
                        <li style={{ listStyle: 'disc' }}>
                          Looking for market expansion, area expansion, city
                          expansion, and state expansion for your brand, now
                          it’s work of just a click.
                        </li>
                        <li style={{ listStyle: 'disc' }}>
                          Distributor search in different trade of market is
                          possible now with the listing on distributor Hub
                        </li>
                        <li style={{ listStyle: 'disc' }}>
                          Companies can access distributor working profiles &
                          interests easily
                        </li>
                        <li style={{ listStyle: 'disc' }}>
                          New companies/manufacturers get a platform for
                          searching distributors
                        </li>
                        <li style={{ listStyle: 'disc' }}>
                          Company/manufacturer can get no’s of distributor
                          Profile for their final call of distribution
                          appointment
                        </li>
                        <li style={{ listStyle: 'disc' }}>
                          An organization can take its perfect decision while
                          approaching & appointing a distributor
                        </li>

                        <li style={{ listStyle: 'disc' }}>
                          Company brand visibility and reach to a broad audience
                          is possible with the listing at the distributor hub.
                        </li>
                        <li style={{ listStyle: 'disc' }}>
                          Presence on the digital platform gives more
                          credibility and uniqueness of beliefs in the
                          Companies.
                        </li>
                        <li style={{ listStyle: 'disc' }}>
                          View all the distributors' information through one
                          profile
                        </li>
                        <li style={{ listStyle: 'disc' }}>
                          Get notified when any of the interested distributors
                          send a request for conversation or you can instantly
                          connect through calls or E-mail.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='container pt-4'>
            To know more about distributor hub<a href='/about'> "click here</a>{' '}
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
