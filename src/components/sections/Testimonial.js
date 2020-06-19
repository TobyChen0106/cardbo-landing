import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const Testimonial = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: '相關報導及文章分享',
    paragraph: ''
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container" id="scroll-ref-testimonial">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-right" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    卡伯希望透過統整公開透明的信用卡回饋及優惠資訊，讓使用者能夠更聰明的消費，學習理財。市場上流動的信用卡數已達四千萬張，但許多持卡這並不清楚自己的信用卡附帶那些條件、限制以及優惠。
                      </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">專案報導</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="https://cep.ntu.edu.tw/2019/12/30/cep12th-carbo/" target="_blank">臺大創意創業學程</a>
                  </span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    卡伯想解決的問題是，人們在各式支付管道和優惠中逐漸喪失主導權的無力感。我們看見人們被行銷手段操控、被優惠規定追著跑，而不是有意識地做出對自己最好的選擇。
                  </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">影片專訪</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="https://www.facebook.com/NTUCEP/posts/3025713757496388?__xts__[0]=68.ARCVx2k_mTx_0lQPXo6i3QrHxbwGJQWsra1DMNZM4RFnCHRHv3yW5OX8zgWpSL4tKZo1XaQ4_4Zz6S6D3kH6RZIwFREwlzgWKOrT_bubvsMI71z976PNiAlU2qJVZ2kWPS6b3vti1j1rF9n_80Ntxd-AQq9hm7RjjLYvWSB3kclYkZ61ZWXVQZvQl0c7YiEl_TW8paej-A2q47FXYxJbF_hN4glQpjYTpelMh4zRzvH6KMXKc0wmedp-uYvCG1kzw7ffeN_TF27SBF5y5ICSO7neXKGoU9m406XaH_i3k4IUUn7c19NALqkooQ3ExtO8N_yaNgfxCdprSgsBWRQjZiaOYA&__tn__=-R" target="_blank">臺大創意創業學程</a>
                  </span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-left" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    三倍券優惠如火如荼推出，每周一鎖定卡伯優惠更新，不漏接任何優惠。
                    #卡伯三倍券專區將於6/30上線
                      </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">卡伯文章分享</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="https://www.facebook.com/permalink.php?story_fbid=138906114452978&id=104328244577432&__tn__=-R" target="_blank">卡伯 Mr. Cardbo</a>
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;