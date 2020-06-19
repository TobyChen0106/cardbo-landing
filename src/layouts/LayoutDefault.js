import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const LayoutDefault = ({
  FeaturesTilesRef,
  FeaturesSplitRef,
  TeamRef,
  TestimonialRef,
  CtaRef,
  children }) => {
  return (
    <>
      <Header navPosition="right" className="reveal-from-bottom"
        FeaturesTilesRef={FeaturesTilesRef}
        FeaturesSplitRef={FeaturesSplitRef}
        TeamRef={TeamRef}
        TestimonialRef={TestimonialRef}
        CtaRef={CtaRef} />
        
      <main className="site-content">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default LayoutDefault;  