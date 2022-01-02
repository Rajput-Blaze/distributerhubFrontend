import React, { Component } from 'react';
import * as service from '../services/apiServices';
import showNotification from '../services/notificationService';
import * as constant from '../services/constant';

export default class TermsCondition extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detail: {},
    };
  }

  render() {
    return (
      <div className='page-wrapper  mt-5 pt-3'>
        <div className='section-padding content-based-page'>
          <div className='container'>
            <p
              style={{
                marginTop: '0cm',
                marginRight: '0cm',
                marginBottom: '0cm',
                marginLeft: '0cm',
                lineHeight: 'normal',
                fontSize: 15,
                fontFamily: '"Calibri",sans-serif',
                background: '#F7F7F7',
              }}>
              <span
                style={{
                  fontSize: 16,
                  fontFamily: '"Arial",sans-serif',
                  color: '#333333',
                }}>
                Defined Terms
              </span>
            </p>
            <p
              style={{
                marginTop: '0cm',
                marginRight: '0cm',
                marginBottom: '8.0pt',
                marginLeft: '0cm',
                lineHeight: '16.5pt',
                fontSize: 15,
                fontFamily: '"Calibri",sans-serif',
              }}>
              <span
                style={{
                  fontSize: 14,
                  fontFamily: '"Arial",sans-serif',
                  color: '#333333',
                }}>
                Unless repugnant to the subject or context, the words appearing
                herein below shall have the meanings as set forth below:
              </span>
            </p>
            <ul style={{ listStyleType: 'disc' }}>
              <li>
                <span
                  style={{
                    fontFamily: '"Arial",sans-serif',
                    fontSize: '10.5pt',
                    color: '#333333',
                  }}>
                  "Illegal/Prohibited content" means the content Hosted on the
                  Site which is either illegal or prohibited by law or both and
                  includes content which has been specifically set forth on the
                  Site as such.
                </span>
              </li>
            </ul>
            <ul style={{ listStyleType: 'disc', marginLeft: '0cmundefined' }}>
              <li>
                <span
                  style={{
                    fontFamily: '"Arial",sans-serif',
                    fontSize: '10.5pt',
                    color: '#333333',
                  }}>
                  "Party" or "Party (ies)" means the User and/or the Company in
                  reference to the context.
                </span>
              </li>
              <li>
                <span
                  style={{
                    fontFamily: '"Arial",sans-serif',
                    fontSize: '10.5pt',
                    color: '#333333',
                  }}>
                  "Registration Data" is the database of all the particulars and
                  information supplied by the User on initial application and
                  subscription, including but not limited to the User's name,
                  telephone number, mailing address, account and email address.
                </span>
              </li>
              <li>
                <span
                  style={{
                    fontFamily: '"Arial",sans-serif',
                    fontSize: '10.5pt',
                    color: '#333333',
                  }}>
                  "Sensitive Personal Data/Information" means such personal
                  information of a User which consists of information relating
                  to:- Password(s); financial information such as Bank account
                  or credit card or debit card or other payment instrument
                  details; physical, physiological and mental health condition;
                  sexual orientation; medical records and history; Biometric
                  information; or any detail or information relating to the
                  above clauses provided by User.
                  <br />
                  &nbsp;Provided that, any information that is freely available
                  or accessible in public domain or furnished under the Right to
                  Information Act, 2005 or any other law for the time being in
                  force shall not be regarded as Sensitive Personal Data/
                  Information for the purposes of the Agreement.
                </span>
              </li>
              <li>
                <span
                  style={{
                    fontFamily: '"Arial",sans-serif',
                    fontSize: '10.5pt',
                    color: '#333333',
                  }}>
                  "Services" means the Services provided by the Company to the
                  User of the Site and includes the following facilities:
                </span>
              </li>
              <li>
                <span
                  style={{
                    fontFamily: '"Arial",sans-serif',
                    fontSize: '10.5pt',
                    color: '#333333',
                  }}>
                  Services to connect with listings in order to appoint them or
                  get appointed them self as a Distributor.
                </span>
              </li>
              <li>
                <span
                  style={{
                    fontFamily: '"Arial",sans-serif',
                    fontSize: '10.5pt',
                    color: '#333333',
                  }}>
                  Services to the User who wishes to insert advertisements at
                  the Site:
                </span>
              </li>
              <li>
                <span
                  style={{
                    fontFamily: '"Arial",sans-serif',
                    fontSize: '10.5pt',
                    color: '#333333',
                  }}>
                  Such other or further services that may be provided by the
                  Company and/or distributorhub.in from time to time.
                </span>
              </li>
              <li>
                <span
                  style={{
                    fontFamily: '"Arial",sans-serif',
                    fontSize: '10.5pt',
                    color: '#333333',
                  }}>
                  "Site" means distributorhub.in and includes any link which
                  opens with the Site and unless repugnant to the subject and
                  context thereof includes other websites operated by the
                  Company.
                </span>
              </li>
              <li>
                <span
                  style={{
                    fontFamily: '"Arial",sans-serif',
                    fontSize: '10.5pt',
                    color: '#333333',
                  }}>
                  "User" is defined as a person whether legal or juristic, or
                  anybody corporate who makes use of the Site in any manner and
                  includes all individuals and/or corporate members/subscribers
                  who use the Services provided by the Site, whether or not for
                  any payment. The term 'User' includes the User's successors
                  and authorized officials of the User's business who have
                  permission to use the Services on the Site on behalf of the
                  User; and Users that obtain a trial membership to use the Site
                  and User's that log in as a 'guest' to use the Site. Each
                  registered User is given a unique User ID by the Site.
                </span>
              </li>
            </ul>
            <p
              style={{
                marginTop: '0cm',
                marginRight: '0cm',
                marginBottom: '0cm',
                marginLeft: '0cm',
                lineHeight: 'normal',
                fontSize: 15,
                fontFamily: '"Calibri",sans-serif',
              }}>
              <strong>
                <span
                  style={{
                    fontSize: 14,
                    fontFamily: '"Arial",sans-serif',
                    color: '#333333',
                  }}>
                  I(b). Interpretation Number, Gender and Headings
                </span>
              </strong>
            </p>
            <ul style={{ listStyleType: 'disc', marginLeft: '0cmundefined' }}>
              <li>
                <span
                  style={{
                    fontFamily: '"Arial",sans-serif',
                    fontSize: '10.5pt',
                    color: '#333333',
                  }}>
                  The terms and conditions herein shall apply equally to both
                  the singular and plural form of the terms defined. Whenever
                  the context may require, any pronoun shall include the
                  corresponding masculine, feminine and neuter form. The words
                  "include", "includes" and "including" shall be deemed to be
                  followed by the phrase "without limitation". Unless the
                  context otherwise requires, the terms "herein", "hereof",
                  "hereto", "hereunder" and words of similar import refer to
                  this Agreement as a whole.
                </span>
              </li>
              <li>
                <span
                  style={{
                    fontFamily: '"Arial",sans-serif',
                    fontSize: '10.5pt',
                    color: '#333333',
                  }}>
                  Words referring to masculine include the feminine and the
                  singular include the plural and vice versa as the context
                  admits or requires; and words importing person(s) includes
                  individuals, bodies corporate and unincorporated.
                </span>
              </li>
              <li>
                <span
                  style={{
                    fontFamily: '"Arial",sans-serif',
                    fontSize: '10.5pt',
                    color: '#333333',
                  }}>
                  The headings and subheadings herein are included for
                  convenience and identification only and are not intended to
                  describe, interpret, define or limit the scope, extent or
                  intent of this Agreement, the terms and conditions, notices,
                  or the right of use of the Site by the User or any provision
                  hereof in any manner whatsoever.
                </span>
              </li>
            </ul>
            <p
              style={{
                marginTop: '0cm',
                marginRight: '0cm',
                marginBottom: '0cm',
                marginLeft: '0cm',
                lineHeight: 'normal',
                fontSize: 15,
                fontFamily: '"Calibri",sans-serif',
                background: '#F7F7F7',
              }}>
              <span
                style={{
                  fontSize: 16,
                  fontFamily: '"Arial",sans-serif',
                  color: '#333333',
                }}>
                Prohibited Content &amp; Consents
              </span>
            </p>
            <ol
              start={1}
              style={{
                listStyleType: 'lower-alpha',
                marginLeft: '0cmundefined',
              }}>
              <li>
                <span style={{ fontFamily: '"Arial",sans-serif' }}>
                  The Company DOES NOT permit a User to host, display, upload,
                  modify, publish any information, transmit, update or share OR
                  provide any services or data, information or any
                  Illegal/Prohibited Content. The User hereby represents and
                  warrants that it shall not display, list, upload, modify,
                  publish any information, data or materials and/or transmit or
                  share anything that:
                </span>
              </li>
              <li>
                <span
                  style={{
                    fontFamily: '"Arial",sans-serif',
                    fontSize: '10.5pt',
                    color: '#333333',
                  }}>
                  belongs to another person and to which the User does not have
                  any right to;
                </span>
              </li>
              <li>
                <span
                  style={{
                    fontFamily: '"Arial",sans-serif',
                    fontSize: '10.5pt',
                    color: '#333333',
                  }}>
                  is grossly harmful, harassing, blasphemous, defamatory,
                  obscene, pornographic, paedophilic, libellous, invasive of
                  another's privacy, hateful, or racially, ethnically
                  objectionable, disparaging, relating or encouraging money
                  laundering or gambling, or otherwise unlawful in any manner
                  whatsoever;
                </span>
              </li>
              <li>
                <span
                  style={{
                    fontFamily: '"Arial",sans-serif',
                    fontSize: '10.5pt',
                    color: '#333333',
                  }}>
                  harm minors in any way;
                </span>
              </li>
              <li>
                <span
                  style={{
                    fontFamily: '"Arial",sans-serif',
                    fontSize: '10.5pt',
                    color: '#333333',
                  }}>
                  contain fraudulent information or makes fraudulent offers of
                  items or involve the sale or attempted sale of counterfeit or
                  stolen items or Illegal/Prohibited items or items whose sales
                  and/or marketing is prohibited by applicable law, or otherwise
                  promote other illegal activities;
                </span>
              </li>
              <li>
                <span
                  style={{
                    fontFamily: '"Arial",sans-serif',
                    fontSize: '10.5pt',
                    color: '#333333',
                  }}>
                  infringes any patent, trademark, copyright or other
                  proprietary rights of any party;
                </span>
              </li>
              <li>
                <span
                  style={{
                    fontFamily: '"Arial",sans-serif',
                    fontSize: '10.5pt',
                    color: '#333333',
                  }}>
                  violates any law for the time being in force;
                </span>
              </li>
              <li>
                <span
                  style={{
                    fontFamily: '"Arial",sans-serif',
                    fontSize: '10.5pt',
                    color: '#333333',
                  }}>
                  is a part of a scheme to defraud other User(s) of the Site or
                  for any other unlawful purpose;
                </span>
              </li>
              <li>
                <span
                  style={{
                    fontFamily: '"Arial",sans-serif',
                    fontSize: '10.5pt',
                    color: '#333333',
                  }}>
                  deceives or misleads the addressee about the origin of such
                  messages;
                </span>
              </li>
              <li>
                <span
                  style={{
                    fontFamily: '"Arial",sans-serif',
                    fontSize: '10.5pt',
                    color: '#333333',
                  }}>
                  communicates any information which is grossly offensive or
                  menacing in nature;
                </span>
              </li>
              <li>
                <span
                  style={{
                    fontFamily: '"Arial",sans-serif',
                    fontSize: '10.5pt',
                    color: '#333333',
                  }}>
                  relates to Distribution of products or Services that infringe
                  or otherwise abet or encourage the infringement or violation
                  of any third party's copyright, patent, trademarks, trade
                  secrets or other proprietary right or rights of publicity or
                  privacy, or any other third party rights;
                </span>
              </li>
              <li>
                <span
                  style={{
                    fontFamily: '"Arial",sans-serif',
                    fontSize: '10.5pt',
                    color: '#333333',
                  }}>
                  impersonates another person
                </span>
              </li>
              <li>
                <span
                  style={{
                    fontFamily: '"Arial",sans-serif',
                    fontSize: '10.5pt',
                    color: '#333333',
                  }}>
                  contains software viruses or any other computer code, files or
                  programs designed to interrupt, destroy or limit the
                  functionality of any computer resource; and/or codes that have
                  the effect of damaging, interfering with, intercepting or
                  expropriating any software or hardware system, data or
                  personal information;formation Act, 2005 or any other law for
                  the time being in force shall not be regarded as Sensitive
                  Personal Data/ Information for the purposes of the Agreement.
                </span>
              </li>
              <li>
                <span
                  style={{
                    fontFamily: '"Arial",sans-serif',
                    fontSize: '10.5pt',
                    color: '#333333',
                  }}>
                  contains any material that constitutes unauthorized
                  advertising or harassment (including but not limited to
                  spamming), invades anyone's privacy or encourages conduct that
                  would constitute a criminal offense, give rise to civil
                  liability, or otherwise violate any law or regulation;
                </span>
              </li>
              <li>
                <span
                  style={{
                    fontFamily: '"Arial",sans-serif',
                    fontSize: '10.5pt',
                    color: '#333333',
                  }}>
                  threatens the unity, integrity, defence, security or
                  sovereignty of India, friendly relations with foreign states,
                  or public order or causes incitement to the commission of any
                  cognisable offence or prevents investigation of any offence or
                  is insulting any other nation;
                </span>
              </li>
              <li>
                <span
                  style={{
                    fontFamily: '"Arial",sans-serif',
                    fontSize: '10.5pt',
                    color: '#333333',
                  }}>
                  is in contravention of the Information Technology Act, 2000
                  (and amendments thereof) and any other law for the time being
                  in force;
                </span>
              </li>
              <li>
                <span
                  style={{
                    fontFamily: '"Arial",sans-serif',
                    fontSize: '10.5pt',
                    color: '#333333',
                  }}>
                  opens links directly or indirectly to or include descriptions
                  of goods or Services that are prohibited under the prevailing
                  law; or
                </span>
              </li>
              <li>
                <span
                  style={{
                    fontFamily: '"Arial",sans-serif',
                    fontSize: '10.5pt',
                    color: '#333333',
                  }}>
                  Otherwise creates any liability or adverse publicity/
                  disrepute for the Company.
                </span>
              </li>
              <li>
                <span
                  style={{
                    fontFamily: '"Arial",sans-serif',
                    fontSize: '10.5pt',
                    color: '#333333',
                  }}>
                  As a condition of use of the Service and the Site, the User
                  warrants that it/they will not use the Site for any purpose
                  that is unlawful or illegal under any law for the time being
                  in force within or outside India or prohibited by these terms,
                  conditions, and notices including both specific and implied.
                  In addition the Site shall not be used in any manner, which
                  could damage, disable, overburden, or impair it or interfere
                  with any other party's use and/or enjoyment of the Site. The
                  User shall refrain from obtaining or attempt to obtain any
                  materials or information through any means not intentionally
                  made available or provided for through the Site.
                </span>
              </li>
              <li>
                <span
                  style={{
                    fontFamily: '"Arial",sans-serif',
                    fontSize: '10.5pt',
                    color: '#333333',
                  }}>
                  Listing to appoint Distribution of counterfeits, non-licensed
                  replicas or unauthorized products is strictly prohibited on
                  the site. Further no products can be displayed on the site
                  without the explicit permission from the intellectual property
                  right holder. It is clear inter-alia that all third party
                  intellectual property rights are owned by the third party and
                  not distributorhub.in/its users.
                </span>
              </li>
              <li>
                <span
                  style={{
                    fontFamily: '"Arial",sans-serif',
                    fontSize: '10.5pt',
                    color: '#333333',
                  }}>
                  By acceptance of this Agreement and these terms &amp;
                  conditions, the User hereby agrees that it has obtained all
                  requisite consents, licenses, approvals and permissions from
                  all requisite governmental and statutory authorities for the
                  goods and services it shall Host on the Site.
                </span>
              </li>
            </ol>
            <p
              style={{
                marginTop: '0cm',
                marginRight: '0cm',
                marginBottom: '0cm',
                marginLeft: '0cm',
                lineHeight: 'normal',
                fontSize: 15,
                fontFamily: '"Calibri",sans-serif',
                background: '#F7F7F7',
              }}>
              <span
                style={{
                  fontSize: 16,
                  fontFamily: '"Arial",sans-serif',
                  color: '#333333',
                }}>
                Agreement between User and Company
              </span>
            </p>
            <ol
              start={1}
              style={{
                listStyleType: 'lower-alpha',
                marginLeft: '0cmundefined',
              }}>
              <li>
                <span style={{ fontFamily: '"Arial",sans-serif' }}>
                  The User understands that the Company through the Site
                  provides services to its Users to appoint or take up
                  Distribution. All Content listed on the Site is third party
                  User generated content which is transmitted and/or hosted on
                  the Site. Company neither originates nor initiates the
                  transmission nor selects the sender and receiver of the
                  transmission, nor modifies the information contained in the
                  transmission.
                </span>
              </li>
              <li>
                <span style={{ fontFamily: '"Arial",sans-serif' }}>
                  The Site is operated by DISTRIBUTORHUB.IN .The Services are
                  offered to the User conditioned on the acceptance of the User
                  without modification of the terms, conditions, and notices
                  contained herein. Use of the Site by a User constitutes
                  agreement to all such terms, conditions, and notices. If the
                  User does not agree with any part of the Agreement, these
                  terms, conditions and notices, it/they must not use the
                  Services.
                </span>
              </li>
              <li>
                <span style={{ fontFamily: '"Arial",sans-serif' }}>
                  Content and features on the Site is made available to Users
                  free of charge. However, Company reserves the right to
                  terminate access to areas or features of the Site to Users at
                  any time with or without giving any reason, with or without
                  notice. Company also reserves the universal right to deny
                  access to particular Users to any/all of its Services and/or
                  content without any prior notice/explanation in order to
                  protect the interests of Company and/or other visitors to the
                  Site. Company reserves the right to limit, deny or create
                  different type access to the Site and its content features
                  with respect to different User(s), or to change any of the
                  features or introduce new features without prior notice.
                  Company reserves the right to start charging for accessing the
                  services any time in future which will be applicable to
                  existing and new users alike.
                </span>
              </li>
              <li>
                <span style={{ fontFamily: '"Arial",sans-serif' }}>
                  Users are advised to exercise due caution while connecting
                  with a prospective organisations / individuals on the Site.
                  Users must undertake interaction with organizations and/or
                  individuals located on or through the Site, with reasonable
                  caution and after undertaking thorough diligence on such
                  organizations and/or individuals. Neither the Company nor its
                  director's, employees, officers or agents shall be liable to
                  any User or otherwise, for any illegal or fraudulent
                  interaction with organizations and/or individuals located on
                  or through the Site.
                </span>
              </li>
            </ol>
            <p
              style={{
                marginTop: '0cm',
                marginRight: '0cm',
                marginBottom: '0cm',
                marginLeft: '0cm',
                lineHeight: 'normal',
                fontSize: 15,
                fontFamily: '"Calibri",sans-serif',
                background: '#F7F7F7',
              }}>
              <span
                style={{
                  fontSize: 16,
                  fontFamily: '"Arial",sans-serif',
                  color: '#333333',
                }}>
                Amendments/Modification of Terms of Use
              </span>
            </p>
            <p
              style={{
                marginTop: '0cm',
                marginRight: '0cm',
                marginBottom: '8.0pt',
                marginLeft: '0cm',
                lineHeight: '16.5pt',
                fontSize: 15,
                fontFamily: '"Calibri",sans-serif',
              }}>
              <span
                style={{
                  fontSize: 14,
                  fontFamily: '"Arial",sans-serif',
                  color: '#333333',
                }}>
                The Company reserves the right to change the terms, conditions,
                and notices under which the Services are offered, including but
                not limited to the changes associated with the User of the
                Services and changes on account of legal and/or statutory
                amendments. The User is responsible for regularly reviewing
                these terms and conditions and is advised to regularly check for
                any amendments or updates to the terms and conditions contained
                and/or the Agreement. All amendments shall become effective
                immediately upon our posting to/ on the Site.
              </span>
            </p>
            <p
              style={{
                marginTop: '0cm',
                marginRight: '0cm',
                marginBottom: '0cm',
                marginLeft: '0cm',
                lineHeight: 'normal',
                fontSize: 15,
                fontFamily: '"Calibri",sans-serif',
                background: '#F7F7F7',
              }}>
              <span
                style={{
                  fontSize: 16,
                  fontFamily: '"Arial",sans-serif',
                  color: '#333333',
                }}>
                Warranties and Disclaimer
              </span>
            </p>
            <ol
              start={1}
              style={{
                listStyleType: 'lower-alpha',
                marginLeft: '0cmundefined',
              }}>
              <li>
                <span style={{ fontFamily: '"Arial",sans-serif' }}>
                  Company has endeavored to ensure that all the information on
                  the Site is correct, however Company neither warrants nor
                  makes any representations regarding the accuracy or
                  completeness of any data or information contained on the Site.
                  This Company disclaims any liability, responsibility or any
                  other claim, whatsoever, in respect of any loss, whether
                  direct or consequential, to any User or any other person,
                  arising out of or in connection with the use of the
                  information, data and/or materials contained on the Site.
                </span>
              </li>
              <li>
                <span style={{ fontFamily: '"Arial",sans-serif' }}>
                  Company does not make any representation or warranty as to the
                  attributes such as for quality, worth, marketability, etc. of
                  the items or Services proposed to be sold or purchased by the
                  Users of the Site. Company accepts no liability for any errors
                  or omissions, whether on its behalf or on behalf of third
                  parties, in this regard.
                </span>
              </li>
              <li>
                <span style={{ fontFamily: '"Arial",sans-serif' }}>
                  The Company does not collect any Sensitive Personal
                  Data/Information of a User.
                </span>
              </li>
              <li>
                <span style={{ fontFamily: '"Arial",sans-serif' }}>
                  Company conducts several phone enquiries on its Site to
                  provide the Services, Company however does not have a
                  mechanism to verify the credentials of these enquiries, hence
                  buyers &amp; sellers are advised to exercise due caution in
                  dealing with these enquiries &amp; finalizing business deals.
                </span>
              </li>
              <li>
                <span style={{ fontFamily: '"Arial",sans-serif' }}>
                  The Company provides the Site and Services "as is" and without
                  any warranty or condition, express, implied or statutory and
                  specifically disclaims any implied warranties of title,
                  merchantability, fitness for a particular purpose and
                  non-infringement. The User expressly agrees that use of the
                  Site is at its own risk.
                </span>
              </li>
            </ol>
            <p
              style={{
                marginTop: '0cm',
                marginRight: '0cm',
                marginBottom: '0cm',
                marginLeft: '0cm',
                lineHeight: 'normal',
                fontSize: 15,
                fontFamily: '"Calibri",sans-serif',
                background: '#F7F7F7',
              }}>
              <span
                style={{
                  fontSize: 16,
                  fontFamily: '"Arial",sans-serif',
                  color: '#333333',
                }}>
                Membership Eligibility
              </span>
            </p>
            <p
              style={{
                marginTop: '0cm',
                marginRight: '0cm',
                marginBottom: '8.0pt',
                marginLeft: '0cm',
                lineHeight: '16.5pt',
                fontSize: 15,
                fontFamily: '"Calibri",sans-serif',
              }}>
              <span
                style={{
                  fontSize: 14,
                  fontFamily: '"Arial",sans-serif',
                  color: '#333333',
                }}>
                The use of the Site is available only to persons who can form
                legally binding contracts under applicable law. Persons who are
                "incompetent to contract" within the meaning of the Indian
                Contract Act, 1872 including minors, un-discharged insolvents
                etc. are not eligible to use the Site. A minor i.e. under the
                age of 18 years, cannot register as a member of the Site. The
                Company reserves the right to terminate the User membership and
                may refuse to provide the User with access to the Site if
                Company discovers that the User is under the age of 18 years.
                The Site is not available to persons whose membership has been
                suspended or terminated by Company unless specifically invited
                by the Company. If the User is registering as a business entity,
                the User hereby represents and warrants that the User has the
                authority to bind the entity to this Agreement.
              </span>
            </p>
            <p
              style={{
                marginTop: '0cm',
                marginRight: '0cm',
                marginBottom: '0cm',
                marginLeft: '0cm',
                lineHeight: 'normal',
                fontSize: 15,
                fontFamily: '"Calibri",sans-serif',
                background: '#F7F7F7',
              }}>
              <span
                style={{
                  fontSize: 16,
                  fontFamily: '"Arial",sans-serif',
                  color: '#333333',
                }}>
                Electronic Communications
              </span>
            </p>
            <ol
              start={1}
              style={{
                listStyleType: 'lower-alpha',
                marginLeft: '0cmundefined',
              }}>
              <li>
                <span style={{ fontFamily: '"Arial",sans-serif' }}>
                  The User hereby consents to receive communications from the
                  Company electronically. The Company may communicate with the
                  User by email or by posting notices on the Site. The User
                  hereby agrees that all agreements, notices, demands,
                  disclosures and other communications that the Company sends
                  electronically including by posting on Site, satisfy the legal
                  requirement that such communication is in writing.
                </span>
              </li>
              <li>
                <span style={{ fontFamily: '"Arial",sans-serif' }}>
                  User hereby authorises Company to contact them periodically
                  using mediums like telephone, mailers or any other means,
                  direct or indirect, in regard to their account information,
                  special offers, surveys etc. If a User does not wish to
                  receive calls/other communications from Company or its
                  employees, they must inform Company in writing by sending an
                  email to&nbsp;distributorhub.in@gmail.com
                </span>
              </li>
              <li>
                <span style={{ fontFamily: '"Arial",sans-serif' }}>
                  All calls made to user by the company are periodically
                  recorded for internal training and quality purposes only. All
                  updates done by user to their data, by visiting the site or
                  through verification mailers are recorded for future
                  reference.
                </span>
              </li>
            </ol>
            <p
              style={{
                marginTop: '0cm',
                marginRight: '0cm',
                marginBottom: '0cm',
                marginLeft: '0cm',
                lineHeight: 'normal',
                fontSize: 15,
                fontFamily: '"Calibri",sans-serif',
                background: '#F7F7F7',
              }}>
              <span
                style={{
                  fontSize: 16,
                  fontFamily: '"Arial",sans-serif',
                  color: '#333333',
                }}>
                Platform for Communication
              </span>
            </p>
            <p
              style={{
                marginTop: '0cm',
                marginRight: '0cm',
                marginBottom: '8.0pt',
                marginLeft: '0cm',
                lineHeight: '16.5pt',
                fontSize: 15,
                fontFamily: '"Calibri",sans-serif',
              }}>
              <strong>
                <span
                  style={{
                    fontSize: 14,
                    fontFamily: '"Arial",sans-serif',
                    color: '#333333',
                  }}>
                  The Site is also a venue where Users may interact with one
                  another for their prospective business interest of either
                  appointing or becoming Distributor. Company is not and cannot
                  be a Party to or control in any manner any dealings between
                  two Users of the Site. Consequently:
                </span>
              </strong>
            </p>
            <ul style={{ listStyleType: 'disc', marginLeft: '0cmundefined' }}>
              <li>
                <span
                  style={{
                    fontFamily: '"Arial",sans-serif',
                    fontSize: '10.5pt',
                    color: '#333333',
                  }}>
                  Company is not responsible for any non-performance or breach
                  of any contract entered into between Users. Company cannot and
                  does not guarantee that the concerned Users will perform any
                  transaction concluded on the Site. Company shall not and is
                  not required to mediate or resolve any dispute or disagreement
                  between Users.
                </span>
              </li>
              <li>
                <span
                  style={{
                    fontFamily: '"Arial",sans-serif',
                    fontSize: '10.5pt',
                    color: '#333333',
                  }}>
                  The User independently agrees upon the manner and terms and
                  conditions, payment, other terms etc. with the other
                  registered Users or third parties that it may interact with on
                  the Site.
                </span>
              </li>
              <li>
                <span
                  style={{
                    fontFamily: '"Arial",sans-serif',
                    fontSize: '10.5pt',
                    color: '#333333',
                  }}>
                  The Site is also a channel of communication whereby the Users
                  can reach a large base of persons globally. The Company is
                  only providing a platform for communication and it is agreed
                  that the contract for Distribution for any of the products or
                  services shall be a strictly bipartite contract between two
                  organisations or individuals, respectively. At no time shall
                  the Company have any obligations or liabilities in respect of
                  any such contract. The Company is not responsible for
                  unsatisfactory or delayed performance of any services
                  whatsoever included or not included in the contract.
                </span>
              </li>
              <li>
                <span
                  style={{
                    fontFamily: '"Arial",sans-serif',
                    fontSize: '10.5pt',
                    color: '#333333',
                  }}>
                  Notwithstanding its reasonable efforts in that behalf, Company
                  cannot control the information provided by other Users which
                  is made available on the Site. The User may find other User's
                  information to be offensive, harmful, inaccurate, or
                  deceptive. Please use caution, common sense, and practice safe
                  trading when using the Site. Please note that there are also
                  risks of dealing with foreign nationals, underage persons or
                  people acting under false pretences/ impersonations.
                </span>
              </li>
            </ul>
            <p
              style={{
                marginTop: '0cm',
                marginRight: '0cm',
                marginBottom: '0cm',
                marginLeft: '0cm',
                lineHeight: 'normal',
                fontSize: 15,
                fontFamily: '"Calibri",sans-serif',
                background: '#F7F7F7',
              }}>
              <span
                style={{
                  fontSize: 16,
                  fontFamily: '"Arial",sans-serif',
                  color: '#333333',
                }}>
                Breach
              </span>
            </p>
            <p
              style={{
                marginTop: '0cm',
                marginRight: '0cm',
                marginBottom: '8.0pt',
                marginLeft: '0cm',
                lineHeight: '16.5pt',
                fontSize: 15,
                fontFamily: '"Calibri",sans-serif',
              }}>
              <strong>
                <span
                  style={{
                    fontSize: 14,
                    fontFamily: '"Arial",sans-serif',
                    color: '#333333',
                  }}>
                  Without limiting other remedies, Company shall remove and
                  disable all such content on the Site; may limit the Users'
                  activity, immediately remove or end the Users listing, warn
                  other Users and immediately temporarily/indefinitely suspend
                  or terminate the User's membership, and/or refuse to provide
                  the User with access to the Site if:
                </span>
              </strong>
            </p>
            <ul style={{ listStyleType: 'disc', marginLeft: '0cmundefined' }}>
              <li>
                <span
                  style={{
                    fontFamily: '"Arial",sans-serif',
                    fontSize: '10.5pt',
                    color: '#333333',
                  }}>
                  User displays any information, data which is illegal or
                  prohibited by any law for the time being in force including
                  but not limited to the Illegal/Prohibited Content;
                </span>
              </li>
              <li>
                <span
                  style={{
                    fontFamily: '"Arial",sans-serif',
                    fontSize: '10.5pt',
                    color: '#333333',
                  }}>
                  User is in breach of the User Agreement or the documents it
                  incorporates by reference;
                </span>
              </li>
              <li>
                <span
                  style={{
                    fontFamily: '"Arial",sans-serif',
                    fontSize: '10.5pt',
                    color: '#333333',
                  }}>
                  Company is unable to verify or authenticate any information
                  the User provides;
                </span>
              </li>
              <li>
                <span
                  style={{
                    fontFamily: '"Arial",sans-serif',
                    fontSize: '10.5pt',
                    color: '#333333',
                  }}>
                  It is believed that the User actions may cause legal liability
                  for the User, other Users or the Company;
                </span>
              </li>
              <li>
                <span
                  style={{
                    fontFamily: '"Arial",sans-serif',
                    fontSize: '10.5pt',
                    color: '#333333',
                  }}>
                  A User puts any material into the Site systems which contains
                  any viruses, Trojan horses, worms, time bombs or other
                  computer programming or similar routines that may damage,
                  interfere with, surreptitiously intercept or expropriate any
                  system, data or personal information;
                </span>
              </li>
              <li>
                <span
                  style={{
                    fontFamily: '"Arial",sans-serif',
                    fontSize: '10.5pt',
                    color: '#333333',
                  }}>
                  A User is unable to produce, when asked for by the Company, a
                  certified copy of a consent, licence, approval, permission or
                  similar certification requisite for goods and/or services a
                  User proposes to appoint or become Distributor for.
                </span>
              </li>
              <li>
                <span
                  style={{
                    fontFamily: '"Arial",sans-serif',
                    fontSize: '10.5pt',
                    color: '#333333',
                  }}>
                  Any monies payable by the User to the Company are not paid on
                  the due date; or
                </span>
              </li>
              <li>
                <span
                  style={{
                    fontFamily: '"Arial",sans-serif',
                    fontSize: '10.5pt',
                    color: '#333333',
                  }}>
                  A complaint is received by the Company from another User or a
                  third party and necessary action to resolve the complaint is
                  not taken within 10 (ten) days by such User.
                  <br />
                  &nbsp;Company may at any time at its sole discretion reinstate
                  suspended Users. User(s) that has been indefinitely suspended
                  may not register or attempt to register with Company or use
                  the Site in any manner whatsoever until such time that such
                  User is reinstated by Company. Notwithstanding the foregoing,
                  if the User breaches the Agreement or the documents it
                  incorporates by reference, Company reserves the right to
                  recover any amounts due and owing by the User to Company and
                  to take strict legal action including but not limited to
                  initiating criminal proceedings against the User in this
                  regard.
                </span>
              </li>
            </ul>
            <p
              style={{
                marginTop: '0cm',
                marginRight: '0cm',
                marginBottom: '0cm',
                marginLeft: '0cm',
                lineHeight: 'normal',
                fontSize: 15,
                fontFamily: '"Calibri",sans-serif',
                background: '#F7F7F7',
              }}>
              <span
                style={{
                  fontSize: 16,
                  fontFamily: '"Arial",sans-serif',
                  color: '#333333',
                }}>
                Privacy
              </span>
            </p>
            <p
              style={{
                marginTop: '0cm',
                marginRight: '0cm',
                marginBottom: '8.0pt',
                marginLeft: '0cm',
                lineHeight: '16.5pt',
                fontSize: 15,
                fontFamily: '"Calibri",sans-serif',
              }}>
              <span
                style={{
                  fontSize: 14,
                  fontFamily: '"Arial",sans-serif',
                  color: '#333333',
                }}>
                The Company stores temporarily or as an intermediary, User
                information on computers that are protected by physical as well
                as technological security devices. Company records the IP
                address(es) of each User of the Site and tracks its Users by the
                use of 'Click stream cookies', inter-alia in compliance with
                statutory laws and regulations and for security reasons. If the
                User objects to any of this please do not use the Site.
              </span>
            </p>
            <p
              style={{
                marginTop: '0cm',
                marginRight: '0cm',
                marginBottom: '0cm',
                marginLeft: '0cm',
                lineHeight: 'normal',
                fontSize: 15,
                fontFamily: '"Calibri",sans-serif',
                background: '#F7F7F7',
              }}>
              <span
                style={{
                  fontSize: 16,
                  fontFamily: '"Arial",sans-serif',
                  color: '#333333',
                }}>
                Use of User Information for promotions by Company
              </span>
            </p>
            <ol
              start={1}
              style={{
                listStyleType: 'lower-alpha',
                marginLeft: '0cmundefined',
              }}>
              <li>
                <span style={{ fontFamily: '"Arial",sans-serif' }}>
                  Company may use the User Information, Data or materials
                  ("Collected Information") to execute marketing campaigns,
                  promotion or advertising messages on behalf of third parties.
                  The Collected Information does not qualify as Sensitive
                  Personal Data/Information. The Collected Information does
                  not/will not be disclosed to third party (ies) unless you
                  respond to the marketing, promotion or advertising message
                  sent by such third party (ies). The Collected Information may
                  be transferred, stored, used and processed at any place
                  worldwide by the Company.
                </span>
              </li>
              <li>
                <span style={{ fontFamily: '"Arial",sans-serif' }}>
                  In case of a merger, amalgamation or a 'buy-in' or 'buy-out'
                  or a financial or strategic tie-up or similar alliance of/by
                  the Company, the Collected Information may be transferred or
                  assigned to the entity with whom the Company is entering into
                  a merger, amalgamation, 'buy-in' or 'buy-out', financial,
                  strategic or similar alliance with, as the case may be. If a
                  User objects to this collection and/or transfer/assignment,
                  please do not use the Site.
                </span>
              </li>
            </ol>
            <p
              style={{
                marginTop: '0cm',
                marginRight: '0cm',
                marginBottom: '0cm',
                marginLeft: '0cm',
                lineHeight: 'normal',
                fontSize: 15,
                fontFamily: '"Calibri",sans-serif',
                background: '#F7F7F7',
              }}>
              <span
                style={{
                  fontSize: 16,
                  fontFamily: '"Arial",sans-serif',
                  color: '#333333',
                }}>
                Confidentiality
              </span>
            </p>
            <ol
              start={1}
              style={{
                listStyleType: 'lower-alpha',
                marginLeft: '0cmundefined',
              }}>
              <li>
                <span style={{ fontFamily: '"Arial",sans-serif' }}>
                  All information and data submitted and/or Hosted by the User
                  shall become the property of the Company. Except for
                  disclosures of the nature set forth herein including in Clause
                  13, Company shall not release any such data and information
                  without the prior consent of the User.
                </span>
              </li>
              <li>
                <span style={{ fontFamily: '"Arial",sans-serif' }}>
                  The User has access to only his own data and information
                  stored in the database at the Company (subject to prior
                  confirmation of identity) and nothing more. The User may edit
                  or amend such data and information from time to time provided
                  the terms and conditions and this Agreement are complied with.
                </span>
              </li>
              <li>
                <span style={{ fontFamily: '"Arial",sans-serif' }}>
                  All confidential information (including name, e-mail address
                  etc.) voluntarily revealed by the User in Member areas, is
                  done at the sole discretion and risk of the User. If such
                  information is collected by a third party using the Site and
                  misused or results in unsolicited messages from such third
                  parties, then such actions are beyond the control of Company
                  and the Company accepts no responsibility or liability
                  whatsoever for such actions.
                </span>
              </li>
              <li>
                <span style={{ fontFamily: '"Arial",sans-serif' }}>
                  The Company does not require a User to disclose to its
                  employees and/or other User's any Sensitive
                  Personal/Confidential Information on the Site.
                </span>
              </li>
              <li>
                <span style={{ fontFamily: '"Arial",sans-serif' }}>
                  The User is cautioned not to reveal any Sensitive
                  Personal/Confidential Information to third parties on the
                  Site.
                </span>
              </li>
            </ol>
            <p
              style={{
                marginTop: '0cm',
                marginRight: '0cm',
                marginBottom: '0cm',
                marginLeft: '0cm',
                lineHeight: 'normal',
                fontSize: 15,
                fontFamily: '"Calibri",sans-serif',
                background: '#F7F7F7',
              }}>
              <span
                style={{
                  fontSize: 16,
                  fontFamily: '"Arial",sans-serif',
                  color: '#333333',
                }}>
                Ownership of Intellectual Property
              </span>
            </p>
            <p
              style={{
                marginTop: '0cm',
                marginRight: '0cm',
                marginBottom: '8.0pt',
                marginLeft: '0cm',
                lineHeight: '16.5pt',
                fontSize: 15,
                fontFamily: '"Calibri",sans-serif',
              }}>
              <span
                style={{
                  fontSize: 14,
                  fontFamily: '"Arial",sans-serif',
                  color: '#333333',
                }}>
                All copyright and/or know-how and/or any other intellectual
                property rights in relation to any of the Services of the
                Company shall become and remain the sole and exclusive property
                of the Company and the User shall have no claim to the same. In
                the event the User has contributed to any content in any manner
                whatsoever on the Site, all intellectual property rights to the
                same shall become the absolute property of the Company,
                including all intellectual property rights therein and the User
                shall have no right or claim over the same. In the event that
                the User during the term of this Agreement or any time
                thereafter, uses such intellectual property in any other website
                or related activity, the same shall be considered as an
                infringement of the intellectual property rights of the Company
                and the Company shall have the right to take recourse to such
                legal remedial action as it is best advised at the risk and
                costs of the User.
              </span>
            </p>
            <p
              style={{
                marginTop: '0cm',
                marginRight: '0cm',
                marginBottom: '0cm',
                marginLeft: '0cm',
                lineHeight: 'normal',
                fontSize: 15,
                fontFamily: '"Calibri",sans-serif',
                background: '#F7F7F7',
              }}>
              <span
                style={{
                  fontSize: 16,
                  fontFamily: '"Arial",sans-serif',
                  color: '#333333',
                }}>
                Waiver and Severability
              </span>
            </p>
            <p
              style={{
                marginTop: '0cm',
                marginRight: '0cm',
                marginBottom: '8.0pt',
                marginLeft: '0cm',
                lineHeight: '16.5pt',
                fontSize: 15,
                fontFamily: '"Calibri",sans-serif',
              }}>
              <span
                style={{
                  fontSize: 14,
                  fontFamily: '"Arial",sans-serif',
                  color: '#333333',
                }}>
                The failure of the Company to exercise or enforce any right or
                provision of this Agreement shall not constitute a waiver of
                such right or provision. If any provision of this Agreement is
                found to be invalid and/or determined to be invalid or
                unenforceable in (whole or in part) by a court of competent
                jurisdiction, the Parties agree that the Court shall endeavour
                to give effect to the Parties' intentions as reflected in the
                provision, and all the other provisions of this Agreement shall
                remain in full force and effect.
              </span>
            </p>
            <p
              style={{
                marginTop: '0cm',
                marginRight: '0cm',
                marginBottom: '0cm',
                marginLeft: '0cm',
                lineHeight: 'normal',
                fontSize: 15,
                fontFamily: '"Calibri",sans-serif',
                background: '#F7F7F7',
              }}>
              <span
                style={{
                  fontSize: 16,
                  fontFamily: '"Arial",sans-serif',
                  color: '#333333',
                }}>
                Limitation of Liability
              </span>
            </p>
            <ul style={{ listStyleType: 'disc', marginLeft: '0cmundefined' }}>
              <li>
                <span
                  style={{
                    fontFamily: '"Arial",sans-serif',
                    fontSize: '10.5pt',
                    color: '#333333',
                  }}>
                  In no event shall the Company be liable for:
                </span>
              </li>
              <li>
                <span
                  style={{
                    fontFamily: '"Arial",sans-serif',
                    fontSize: '10.5pt',
                    color: '#333333',
                  }}>
                  any indirect, incidental, special, consequential or exemplary
                  damages, including but not limited to, damages for loss of
                  profits, goodwill, use, data or other intangible losses (even
                  if the Company has been advised of the possibility of such
                  damages) arising out of or in connection with the Site, its
                  Services or this Agreement (however arising, including
                  negligence); and/or
                </span>
              </li>
              <li>
                <span
                  style={{
                    fontFamily: '"Arial",sans-serif',
                    fontSize: '10.5pt',
                    color: '#333333',
                  }}>
                  any delay or failure or disruption of the content or services
                  delivered through the Site resulting directly or indirectly
                  from acts of nature, forces or causes beyond our reasonable
                  control, including without limitation, internet failures,
                  computer telecommunications or any other equipment failures,
                  electrical power failures, strike, labour disputes, riots,
                  insurrections, civil disturbances, shortage of labour or
                  materials, fires, flood, storms, explosions, acts of God, war,
                  governmental actions, order of domestic or foreign courts or
                  tribunals or non-performance of third parties or other force
                  majeure condition(s).
                </span>
              </li>
              <li>
                <span
                  style={{
                    fontFamily: '"Arial",sans-serif',
                    fontSize: '10.5pt',
                    color: '#333333',
                  }}>
                  The Company, its associates and technology partners make no
                  representations or warranties about the accuracy, reliability,
                  completeness, and/or timeliness of any content, information,
                  software, text, graphics, links or communications provided on
                  or through the use of the Site or that the operation of the
                  Site will be error free and/or uninterrupted. All such
                  warranties, representations, conditions and undertakings are
                  hereby excluded.
                </span>
              </li>
              <li>
                <span
                  style={{
                    fontFamily: '"Arial",sans-serif',
                    fontSize: '10.5pt',
                    color: '#333333',
                  }}>
                  User(s) acknowledge that inability to use the website wholly
                  or partially for whatever reasons may have an adverse effect
                  on its business. The Company assumes no liability whatsoever
                  for any monetary or other damage suffered by the User
                  including on account of any one or more of the following:
                </span>
              </li>
              <li>
                <span
                  style={{
                    fontFamily: '"Arial",sans-serif',
                    fontSize: '10.5pt',
                    color: '#333333',
                  }}>
                  The delay, failure, interruption, or corruption of any data or
                  other information transmitted in connection with use of the
                  Site or the Services;
                </span>
              </li>
              <li>
                <span
                  style={{
                    fontFamily: '"Arial",sans-serif',
                    fontSize: '10.5pt',
                    color: '#333333',
                  }}>
                  The use or inability to use the Site or the Services;
                </span>
              </li>
              <li>
                <span
                  style={{
                    fontFamily: '"Arial",sans-serif',
                    fontSize: '10.5pt',
                    color: '#333333',
                  }}>
                  Any interruption or errors in the operation of the Site or the
                  Services;
                </span>
              </li>
              <li>
                <span
                  style={{
                    fontFamily: '"Arial",sans-serif',
                    fontSize: '10.5pt',
                    color: '#333333',
                  }}>
                  Any false, misleading or incorrect data or information Hosted
                  on Site by a User or false misleading or incorrect statements
                  or conduct of a User;
                </span>
              </li>
              <li>
                <span
                  style={{
                    fontFamily: '"Arial",sans-serif',
                    fontSize: '10.5pt',
                    color: '#333333',
                  }}>
                  Any violation of third party rights or claims or demands
                  whatsoever in relation to the products or Services Hosted on
                  the Site;
                </span>
              </li>
              <li>
                <span
                  style={{
                    fontFamily: '"Arial",sans-serif',
                    fontSize: '10.5pt',
                    color: '#333333',
                  }}>
                  Any matters relating to Services and/or the Site however
                  arising, including negligence.
                </span>
              </li>
              <li>
                <strong>
                  <span style={{ fontSize: '10.5pt', color: '#333333' }}>
                    Applicable Laws -
                  </span>
                </strong>
                <span style={{ fontFamily: '"Arial",sans-serif' }}>
                  &nbsp;We control and operate the Sites from our offices in
                  Karnataka in accordance with the laws applicable to the state
                  (NCT) of karnataka, India. We do not represent that materials
                  on the Sites are appropriate or available for use in other
                  locations. Persons who choose to access the Sites from other
                  locations do so on their own initiative, and are responsible
                  for compliance with local laws and all other applicable laws
                  &amp; if and to the extent local laws are applicable.
                </span>
              </li>
            </ul>
            <p
              style={{
                marginTop: '0cm',
                marginRight: '0cm',
                marginBottom: '0cm',
                marginLeft: '0cm',
                lineHeight: 'normal',
                fontSize: 15,
                fontFamily: '"Calibri",sans-serif',
                background: '#F7F7F7',
              }}>
              <span
                style={{
                  fontSize: 16,
                  fontFamily: '"Arial",sans-serif',
                  color: '#333333',
                }}>
                Indemnity
              </span>
            </p>
            <p
              style={{
                marginTop: '0cm',
                marginRight: '0cm',
                marginBottom: '8.0pt',
                marginLeft: '0cm',
                lineHeight: '16.5pt',
                fontSize: 15,
                fontFamily: '"Calibri",sans-serif',
              }}>
              <span
                style={{
                  fontSize: 14,
                  fontFamily: '"Arial",sans-serif',
                  color: '#333333',
                }}>
                The User hereby agrees to indemnify and hold the Company its
                subsidiaries, affiliates, officers, directors, agents, and
                employees, harmless from any action, claim or demand, including
                reasonable attorney's fees, made by any third party or penalty
                imposed on the Company due to or arising out of the User's
                breach or violation of this Agreement or the documents it
                incorporates by reference, or any representations and warranties
                made by a User, or on account of any illegal/prohibited activity
                conducted by a User, or violation of any law or of the rights of
                a third party by a User or a breach of the representations or
                warranties made by User(s) and/or any dispute(s), claim(s),
                litigation or other civil or criminal proceeding between a User
                and another User/third party transacting on this Site and/or
                using the Services.
              </span>
            </p>
            <p
              style={{
                marginTop: '0cm',
                marginRight: '0cm',
                marginBottom: '0cm',
                marginLeft: '0cm',
                lineHeight: 'normal',
                fontSize: 15,
                fontFamily: '"Calibri",sans-serif',
                background: '#F7F7F7',
              }}>
              <span
                style={{
                  fontSize: 16,
                  fontFamily: '"Arial",sans-serif',
                  color: '#333333',
                }}>
                Notices
              </span>
            </p>
            <p
              style={{
                marginTop: '0cm',
                marginRight: '0cm',
                marginBottom: '8.0pt',
                marginLeft: '0cm',
                lineHeight: '107%',
                fontSize: 15,
                fontFamily: '"Calibri",sans-serif',
              }}>
              Except as explicitly stated otherwise, all notices to the Company
              shall be given by the User by postal mail to Legal Department ,
              Block D-6, Flat no. 207, Provident Sunworth, Kegeri, Mysore Road,
              Bangalore, Karnataka - 560060 or e-mail to:
              -&nbsp;distributorhub.in@gmail.com&nbsp;(in the case of the
              Company) or to the email address the User provide during the
              registration process (in case of the User). Notice shall be deemed
              given 24 hours after email is sent, unless the sending Party is
              notified that the email address is invalid. Alternatively, the
              Company may give the User notice by certified mail, postage
              prepaid and return receipt requested, to the address provided to
              us during the registration process. In such case, notice shall be
              deemed given 3 (three) days after the date of mailing.
            </p>
            <p
              style={{
                marginTop: '0cm',
                marginRight: '0cm',
                marginBottom: '0cm',
                marginLeft: '0cm',
                lineHeight: 'normal',
                fontSize: 15,
                fontFamily: '"Calibri",sans-serif',
                background: '#F7F7F7',
              }}>
              <span
                style={{
                  fontSize: 16,
                  fontFamily: '"Arial",sans-serif',
                  color: '#333333',
                }}>
                Third Party Content, Sites and Services
              </span>
            </p>
            <ol
              start={1}
              style={{
                listStyleType: 'lower-alpha',
                marginLeft: '0cmundefined',
              }}>
              <li>
                <span style={{ fontFamily: '"Arial",sans-serif' }}>
                  The Site and content available through the Service may contain
                  features and functionalities that may link or provide the User
                  with access to third party content which is completely
                  independent of the Site, including web sites, directories,
                  servers, networks, systems, information and databases,
                  applications, software, programs, products or services, and
                  the Internet as a whole.
                </span>
              </li>
              <li>
                <span style={{ fontFamily: '"Arial",sans-serif' }}>
                  User's interactions with organizations and/or individuals
                  found on or through the Service, including payment and
                  delivery of goods or services, and any other terms,
                  conditions, warranties or representations associated with such
                  dealings, are solely between the User and such organizations
                  and/or individuals. The User should make whatever
                  investigation necessary or appropriate before proceeding with
                  any of these third parties.
                </span>
              </li>
              <li>
                <span style={{ fontFamily: '"Arial",sans-serif' }}>
                  The User agrees that the Company shall not be responsible or
                  liable for any loss or damage of any sort incurred as the
                  result of any such dealings. If there is a dispute between
                  participants on this Site, or between Users and any third
                  party, the User understands and agrees that the Company is
                  under no obligation to become involved. In the event that the
                  User has a dispute with one or more other Users, the User
                  hereby releases the Company, its Directors, officers,
                  employees, agents and successors in rights from claims,
                  demands and damages (actual and consequential) of every kind
                  or nature, known or unknown, suspected and unsuspected,
                  disclosed and undisclosed, arising out of or in any way
                  related to such disputes and/or the Service(s).
                </span>
              </li>
            </ol>
            <p
              style={{
                marginTop: '0cm',
                marginRight: '0cm',
                marginBottom: '0cm',
                marginLeft: '0cm',
                lineHeight: 'normal',
                fontSize: 15,
                fontFamily: '"Calibri",sans-serif',
                background: '#F7F7F7',
              }}>
              <span
                style={{
                  fontSize: 16,
                  fontFamily: '"Arial",sans-serif',
                  color: '#333333',
                }}>
                Relationship of the Parties
              </span>
            </p>
            <p
              style={{
                marginTop: '0cm',
                marginRight: '0cm',
                marginBottom: '8.0pt',
                marginLeft: '0cm',
                lineHeight: '16.5pt',
                fontSize: 15,
                fontFamily: '"Calibri",sans-serif',
              }}>
              <span
                style={{
                  fontSize: 14,
                  fontFamily: '"Arial",sans-serif',
                  color: '#333333',
                }}>
                It is clarified that there is no agency or/and partnership
                or/and joint venture or/and employee-employer or/and
                franchiser-franchisee relationship between the Company and any
                User.
              </span>
            </p>
            <p
              style={{
                marginTop: '0cm',
                marginRight: '0cm',
                marginBottom: '0cm',
                marginLeft: '0cm',
                lineHeight: 'normal',
                fontSize: 15,
                fontFamily: '"Calibri",sans-serif',
                background: '#F7F7F7',
              }}>
              <span
                style={{
                  fontSize: 16,
                  fontFamily: '"Arial",sans-serif',
                  color: '#333333',
                }}>
                Suspension, Reinstatement and Refunds
              </span>
            </p>
            <ol
              start={1}
              style={{
                listStyleType: 'lower-alpha',
                marginLeft: '0cmundefined',
              }}>
              <li>
                <span style={{ fontFamily: '"Arial",sans-serif' }}>
                  Without prejudice to any other rights or remedies that may be
                  available to it, the Company may suspend all services
                  provided, remove and/or disable any and all User Hosted data
                  and content and/or limit access rights of a User for a breach
                  or violation as is set forth herein.
                </span>
              </li>
              <li>
                <span style={{ fontFamily: '"Arial",sans-serif' }}>
                  User hereby authorises Company to remove and/or disable User
                  hosted data and/or content or to limit Services to a User
                  against whom a complaint is received, which remain unresolved
                  or is not amicably settled with thirty (30) days of the date
                  of the complaint by the aggrieved User.
                </span>
              </li>
            </ol>
            <p
              style={{
                marginTop: '0cm',
                marginRight: '0cm',
                marginBottom: '0cm',
                marginLeft: '0cm',
                lineHeight: 'normal',
                fontSize: 15,
                fontFamily: '"Calibri",sans-serif',
                background: '#F7F7F7',
              }}>
              <span
                style={{
                  fontSize: 16,
                  fontFamily: '"Arial",sans-serif',
                  color: '#333333',
                }}>
                Termination of Agreement
              </span>
            </p>
            <ol
              start={1}
              style={{
                listStyleType: 'lower-alpha',
                marginLeft: '0cmundefined',
              }}>
              <li>
                <span style={{ fontFamily: '"Arial",sans-serif' }}>
                  The User hereby agrees that Company, in its sole discretion,
                  has the right (but not the obligation) to delete or deactivate
                  a User account, block its email or IP address from the Site,
                  or otherwise terminate its access to or use of the Service (or
                  any part thereof) and/or the Site immediately and without
                  notice, and remove any content Hosted within the Service/Site,
                  for any reason, including, without limitation, if Company
                  believes that the User has acted inconsistently with this
                  Agreement. Further, the User agrees that Company shall not be
                  liable whether for refunds or otherwise, to the User or any
                  third-party for any termination of the Users access to the
                  Service. The User agrees that it shall not attempt to use the
                  Service after the Date of Termination.
                </span>
              </li>
              <li>
                <span style={{ fontFamily: '"Arial",sans-serif' }}>
                  If the Company terminates User(s) membership, User(s) will not
                  have the right to re-enroll or join Site under a new account
                  or name or an alias unless formally invited to do so by the
                  Company. Notwithstanding any contained herein, no membership
                  charges will be refunded to a User in case of termination.
                </span>
              </li>
            </ol>
            <p
              style={{
                marginTop: '0cm',
                marginRight: '0cm',
                marginBottom: '0cm',
                marginLeft: '0cm',
                lineHeight: 'normal',
                fontSize: 15,
                fontFamily: '"Calibri",sans-serif',
                background: '#F7F7F7',
              }}>
              <span
                style={{
                  fontSize: 16,
                  fontFamily: '"Arial",sans-serif',
                  color: '#333333',
                }}>
                Grievance Redressal
              </span>
            </p>
            <ul style={{ listStyleType: 'disc', marginLeft: '0cmundefined' }}>
              <li>
                <span
                  style={{
                    fontFamily: '"Arial",sans-serif',
                    fontSize: '10.5pt',
                    color: '#333333',
                  }}>
                  For any complaints and grievances, User may contact on the
                  email:&nbsp;distributorhub.in@gmail.com All complaints to the
                  Grievance Officer shall be made in writing giving a detailed
                  description of the complaint/grievance of the User.
                </span>
              </li>
              <li>
                <span
                  style={{
                    fontFamily: '"Arial",sans-serif',
                    fontSize: '10.5pt',
                    color: '#333333',
                  }}>
                  The Grievance Officer shall redress all complaints within one
                  (1) month from the date of receipt of complaint.
                </span>
              </li>
            </ul>
            <p
              style={{
                marginTop: '0cm',
                marginRight: '0cm',
                marginBottom: '0cm',
                marginLeft: '0cm',
                lineHeight: 'normal',
                fontSize: 15,
                fontFamily: '"Calibri",sans-serif',
                background: '#F7F7F7',
              }}>
              <span
                style={{
                  fontSize: 16,
                  fontFamily: '"Arial",sans-serif',
                  color: '#333333',
                }}>
                Arbitration
              </span>
            </p>
            <ul style={{ listStyleType: 'disc', marginLeft: '0cmundefined' }}>
              <li>
                <span
                  style={{
                    fontFamily: '"Arial",sans-serif',
                    fontSize: '10.5pt',
                    color: '#333333',
                  }}>
                  Any dispute arising out of or in connection with or relating
                  to the meaning, interpretation this Agreement, including a
                  dispute regarding the existence, validity or termination of
                  the Agreement (between a User(s) and the Company) or the
                  documents it incorporates by reference or the consequences of
                  its nullity, which cannot be amicably settled or resolved by
                  the Grievance Officer within thirty (30) days of the date of
                  such dispute arising, shall be referred to any finally
                  resolved by arbitration under the Arbitration and Conciliation
                  Act, 1996 (or any statutory amendment or modification
                  thereto). The arbitration shall be conducted in accordance
                  with the Rules of Delhi High Court Arbitration Centre.
                </span>
              </li>
              <li>
                <span
                  style={{
                    fontFamily: '"Arial",sans-serif',
                    fontSize: '10.5pt',
                    color: '#333333',
                  }}>
                  The arbitration shall be conducted by a Sole Arbitrator. All
                  proceedings in any such arbitration shall be conducted in
                  English. The venue of the arbitration proceedings shall be New
                  Delhi.
                </span>
              </li>
              <li>
                <span
                  style={{
                    fontFamily: '"Arial",sans-serif',
                    fontSize: '10.5pt',
                    color: '#333333',
                  }}>
                  The arbitral tribunal shall give a reasoned award and the same
                  shall be final and binding on the Parties and the Parties
                  agree to be bound thereby and to act accordingly. The
                  arbitrator shall be free to award appropriate costs. The
                  arbitration award shall be enforceable in a competent court.
                </span>
              </li>
              <li>
                <span
                  style={{
                    fontFamily: '"Arial",sans-serif',
                    fontSize: '10.5pt',
                    color: '#333333',
                  }}>
                  It is clarified that disputes between User(s) inter-se or
                  between User(s) and third parties are not covered by this
                  clause.
                </span>
              </li>
            </ul>
            <p
              style={{
                marginTop: '0cm',
                marginRight: '0cm',
                marginBottom: '0cm',
                marginLeft: '0cm',
                lineHeight: 'normal',
                fontSize: 15,
                fontFamily: '"Calibri",sans-serif',
                background: '#F7F7F7',
              }}>
              <span
                style={{
                  fontSize: 16,
                  fontFamily: '"Arial",sans-serif',
                  color: '#333333',
                }}>
                Governing Law and Jurisdiction
              </span>
            </p>
            <ul style={{ listStyleType: 'disc', marginLeft: '0cmundefined' }}>
              <li>
                <span
                  style={{
                    fontFamily: '"Arial",sans-serif',
                    fontSize: '10.5pt',
                    color: '#333333',
                  }}>
                  This Agreement and any dispute or matter arising out of or in
                  connection with and/or incidental to the use of the Site
                  and/or the Services shall be governed by the laws of India
                  without regard to its conflict of laws provisions.
                </span>
              </li>
              <li>
                <span
                  style={{
                    fontFamily: '"Arial",sans-serif',
                    fontSize: '10.5pt',
                    color: '#333333',
                  }}>
                  The User and the Company hereby irrevocably submit to the sole
                  and exclusive jurisdiction of the courts at Delhi, India.
                  <br />{' '}
                  <em>
                    This document is an electronic record in terms of the
                    Information Technology Act, 2000 and the provisions
                    pertaining to electronic records in various statues amended
                    by the Information Technology Act, 2000.
                  </em>
                </span>
              </li>
            </ul>
            <p
              style={{
                marginTop: '0cm',
                marginRight: '0cm',
                marginBottom: '8.0pt',
                marginLeft: '0cm',
                lineHeight: '16.5pt',
                fontSize: 15,
                fontFamily: '"Calibri",sans-serif',
              }}>
              <em>
                <span
                  style={{
                    fontSize: 14,
                    fontFamily: '"Arial",sans-serif',
                    color: '#333333',
                  }}>
                  Disclaimer <strong>distributorhub.in</strong>
                  <br />
                  &nbsp;Company as well as its management have created these
                  pages and the Services as a specific feature and as a service
                  to the global exim community.
                  <br />
                  &nbsp;No warranty or condition expressed or implied or
                  statutory is being provided to the User. Company hereby
                  specifically disclaims any quality, durability, accuracy,
                  reliability and all express or implied warranties including
                  but not limited to warranties of title, merchantability,
                  fitness for a particular purpose or performance. Company does
                  not make any representation or warranties of any kind about
                  any product or Services offered, or displayed or hosted on the
                  Site. All such warranties, representations, conditions and
                  undertakings are hereby excluded.
                  <br />
                  &nbsp;Under no circumstances shall Company be held liable for
                  any delay or failure or disruption of the content or services
                  delivered through the Site resulting directly or indirectly
                  from acts of nature, forces or causes beyond our reasonable
                  control, including without limitation, internet failures,
                  computer, telecommunications or any other equipment failures,
                  electrical power failures, strike, labor disputes, riots,
                  insurrections, civil disturbances, shortage of labor or
                  materials, fires, flood, storms, explosions, acts of God, war,
                  governmental actions, order of domestic or foreign courts or
                  tribunals or non-performance of third parties or other force
                  majeure condition.
                  <br />
                  &nbsp;Listing of counterfeits, non-licensed replicas or
                  unauthorized products is strictly prohibited on the site.
                  Further no products can be displayed on the site without the
                  explicit permission from the intellectual property right
                  holder. It is clear inter-alia that all third party
                  intellectual property rights are owned by the third party and
                  not distributorhub.in/its users.
                  <br />
                  &nbsp;Under no circumstances will Company be liable, direct,
                  indirect, incidental, special, consequential or exemplary
                  damages including but not limited to, damages for loss of
                  profit, goodwill, use, data or other intangible losses arising
                  out of or in connection with the use of the Services provided
                  by Company ("Damages") whether arising out of or in connection
                  with or otherwise in relation to any business or other
                  transaction conducted in relation to the Service(s).
                  <br />
                  &nbsp;The User hereby indemnifies and holds Company harmless
                  against any and all losses, claims, injuries and Damages that
                  may arise out of the User's breach of this Disclaimer and/or
                  the Agreement, Illegal/Prohibited Content, Warning against
                  Fraud and or any breach of the terms and conditions or the
                  representations or warranties made by the User herein or in
                  the Agreement/usage terms.
                  <br />
                  &nbsp;Company reserves the right to change the nature of the
                  paid Services offered here or discontinue its Services to a
                  member without any prior notice.
                  <br />
                  &nbsp;This document is an electronic record in terms of the
                  Information Technology Act, 2000 and the provisions pertaining
                  to electronic records in various statues amended by the
                  Information Technology Act, 2000.
                </span>
              </em>
            </p>
            <p
              style={{
                marginTop: '0cm',
                marginRight: '0cm',
                marginBottom: '0cm',
                marginLeft: '0cm',
                lineHeight: 'normal',
                fontSize: 15,
                fontFamily: '"Calibri",sans-serif',
                background: '#E62E04',
              }}>
              <em>
                <span
                  style={{
                    fontSize: 14,
                    fontFamily: '"Arial",sans-serif',
                    color: 'white',
                  }}>
                  Warning against Fraud
                </span>
              </em>
            </p>
            <p
              style={{
                marginTop: '0cm',
                marginRight: '0cm',
                marginBottom: '0cm',
                marginLeft: '0cm',
                lineHeight: 'normal',
                fontSize: 15,
                fontFamily: '"Calibri",sans-serif',
                background: '#E62E04',
              }}>
              <span
                style={{
                  fontSize: 14,
                  fontFamily: '"Arial",sans-serif',
                  color: 'white',
                }}>
                FRAUD WARNING
              </span>
            </p>
            <ul style={{ listStyleType: 'disc', marginLeft: '0cmundefined' }}>
              <li>
                <span style={{ fontFamily: '"Arial",sans-serif' }}>
                  All Users are advised to be very careful while doing business
                  with individuals, body corporates or companies from any part
                  of the world.
                </span>
              </li>
              <li>
                <span style={{ fontFamily: '"Arial",sans-serif' }}>
                  Users are advised to exercise due caution while discussing
                  with a prospective organisations/individuals on the Site to
                  appoint them or become their Distributors. Users must
                  undertake interactions or transactions with organizations
                  and/or individuals located on or through the Site, with
                  reasonable caution and after undertaking thorough diligence on
                  such organization and/or individual. Neither the Company nor
                  its director's, employees, officers or agents shall be liable
                  to any User or otherwise for any illegal or fraudulent
                  interaction or transaction with organizations and/or
                  individuals located on or through the Site.
                </span>
              </li>
              <li>
                <span style={{ fontFamily: '"Arial",sans-serif' }}>
                  Users are advised to not get into exchange of cash or monies
                  without doing due diligence and before finalising a
                  legal/binding contract.
                </span>
              </li>
            </ul>
            <p
              style={{
                marginTop: '0cm',
                marginRight: '0cm',
                marginBottom: '8.0pt',
                marginLeft: '0cm',
                lineHeight: 'normal',
                fontSize: 15,
                fontFamily: '"Calibri",sans-serif',
              }}>
              <span
                style={{
                  fontSize: 18,
                  fontFamily: '"Arial",sans-serif',
                  color: '#333333',
                }}>
                Acceptance of the terms and conditions of use
              </span>
            </p>
            <p
              style={{
                marginTop: '0cm',
                marginRight: '0cm',
                marginBottom: '8.0pt',
                marginLeft: '0cm',
                lineHeight: '16.5pt',
                fontSize: 15,
                fontFamily: '"Calibri",sans-serif',
              }}>
              <span
                style={{
                  fontSize: 14,
                  fontFamily: '"Arial",sans-serif',
                  color: '#333333',
                }}>
                DISTRIBUTORHUB.IN (https://distributorhub.in) provides the User
                with the Website subject to the proviso that the User accepts
                these Terms and Conditions of Use, the Data Protection
                Declaration and the Cookie Policy subject to no reservations.
                Consent is deemed issued when the Website is accessed and used.
                In relation to the use of individual services, DISTRIBUTORHUB.IN
                (https://distributorhub.in) may ask Users to issue their consent
                again by clicking on a corresponding confirmation field and/or
                to consent to additional General Contractual Terms and
                Conditions.
              </span>
            </p>
            <p
              style={{
                marginTop: '0cm',
                marginRight: '0cm',
                marginBottom: '8.0pt',
                marginLeft: '0cm',
                lineHeight: '107%',
                fontSize: 15,
                fontFamily: '"Calibri",sans-serif',
              }}>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            </p>
          </div>
        </div>
      </div>
    );
  }
}
