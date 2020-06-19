import React, { useRef } from 'react';
import { Route } from 'react-router-dom';

const AppRoute = ({
  component: Component,
  layout: Layout,
  ...rest
}) => {

  Layout = (Layout === undefined) ? props => (<>{props.children}</>) : Layout;

  const FeaturesTilesRef = useRef(null);
  const FeaturesSplitRef = useRef(null);
  const TeamRef = useRef(null);
  const TestimonialRef = useRef(null);
  const CtaRef = useRef(null);

  return (
    <Route
      {...rest}
      render={props => (
        <Layout
          FeaturesTilesRef={FeaturesTilesRef}
          FeaturesSplitRef={FeaturesSplitRef}
          TeamRef={TeamRef}
          TestimonialRef={TestimonialRef}
          CtaRef={CtaRef}
          >

          <Component 
            FeaturesTilesRef={FeaturesTilesRef}
            FeaturesSplitRef={FeaturesSplitRef}
            TeamRef={TeamRef}
            TestimonialRef={TestimonialRef}
            CtaRef={CtaRef}
            {...props}
          />
        </Layout>
      )} />
  );
}

export default AppRoute;