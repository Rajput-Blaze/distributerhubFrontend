import React from 'react';
import { Helmet } from 'react-helmet';
export default function HelmetComponent() {
  return (
    <Helmet>
      <meta charSet='utf-8' />
      <title>
        About-distributorhub.in / Distributorship and Business Opportunities
      </title>
      <meta
        name='description'
        content=' Distributor Hub is a B2B platform that connects the distributors with relevant companies vice versa. Who looking for distributorship and business opportunities in India click here'
      />
      <script type='application/ld+json'>
        {JSON.stringify({
          '@context': 'https://schema.org/',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: 'https://distributorhub.in/',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'About us',
              item: 'https://distributorhub.in/about-us',
            },
          ],
        })}
      </script>
      <meta
        name='keywords'
        content='distributorship opportunities, best business opportunities in India, channel partner, distributor, company, Manufacturer, Organization, manufacturing companies'></meta>
      <link rel='canonical' href='https://distributorhub.in/about-us' />
    </Helmet>
  );
}
