import React, { useRef } from 'react';
import 'react-notifications/lib/notifications.css';
import { NotificationContainer, NotificationManager } from 'react-notifications';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Team from '../components/sections/Team';
import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';

const createNotification = (type, title, message) => {
  switch (type) {
    case 'info':
      NotificationManager.info(message, title, 2000);
      break;
    case 'success':
      NotificationManager.success(message, title, 2000);
      break;
    case 'warning':
      NotificationManager.warning(message, title, 2000);
      break;
    case 'error':
      NotificationManager.error(message, title, 2000, () => {

      });
      break;
  }
}

const Home = (
  FeaturesTilesRef,
  FeaturesSplitRef,
  TeamRef,
  TestimonialRef,
  CtaRef,
  ...rest
) => {

  return (
    <>
      <Hero className="illustration-section-01" />
      <FeaturesTiles ref={FeaturesTilesRef} />
      <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" ref={FeaturesSplitRef} />
      <Team topDivider ref={TeamRef} />
      <Testimonial topDivider ref={TestimonialRef} />
      <Cta split createNotification={createNotification} ref={CtaRef} />
      <NotificationContainer />
    </>
  );
}

export default Home;