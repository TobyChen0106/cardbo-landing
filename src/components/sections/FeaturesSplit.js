import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: '功能介紹',
    paragraph: ''
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container" id="scroll-ref-feature-split">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>
            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  個人客製，專屬優惠!
                </div>
                <h3 className="mt-0 mb-12">
                  主要功能－個人化設定
                </h3>
                <p className="m-0">
                  <h5 className="mt-12 mb-0">個人設定</h5>
                  加入卡伯為 LINE 好友後，卡伯將引導您進行信用卡設定，請您填入手上持有的信用卡、常用支付方式和有興趣的消費項目。記錄下這些資訊後，卡伯聊天機器人會根據這些資料，提供您個人化的優惠資訊。
                  <br />
                  <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                    ＊卡伯記錄的資料僅為信用卡卡種，不包含卡號等敏感個資。
                  </div>
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/features-split-image-01.png')}
                  alt="Features split 01"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  簡單、直覺、快速!
                  </div>
                <h3 className="mt-0 mb-12">
                  主要功能－直覺式搜尋
                </h3>
                <p className="m-0">
                  <h5 className="mt-12 mb-0">依店家搜尋</h5>
                  輸入您所在的店家，即可查詢您使用的信用卡於該店家的相關優惠。
                  <h5 className="mt-12 mb-0">依類別搜尋</h5>
                  根據您輸入的信用卡，依照主要優惠類別搜尋。目前卡伯將類別區分為七大種，分別為國內一般消費、國外一般消費、交通、食宿、保險、娛樂，和其他。

                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/features-split-image-02.png')}
                  alt="Features split 01"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  一鍵呼叫，隨 Call 隨到!
                </div>
                <h3 className="mt-0 mb-12">
                  主要功能－呼叫卡伯
                </h3>
                <p className="m-0">
                  呼叫卡伯根據您設定的信用卡， 推薦您個人化、 不限使用通路，有現金回饋的信用卡優惠資訊。
                  點開詳細優惠資訊，能看到該優惠的規定細項，包含使用限制、期間等。
                  該頁面底下有回報機制，若您對該優惠有任何回饋或心得，都能進行評論。

                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/features-split-image-03.png')}
                  alt="Features split 02"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  多元討論更精采!
                  </div>
                <h3 className="mt-0 mb-12">
                  主要功能－優惠更新交流
                  </h3>
                <p className="m-0">
                  <h5 className="mt-12 mb-0">優惠討論區</h5>
                    在詳細優惠資訊欄位內，設有討論串，提供您分享優惠更新、使用心得的空間。跟其他卡友們交流優惠使用秘訣吧！
                  <h5 className="mt-12 mb-0">點讚收藏功能</h5>
                    於詳細優惠資訊內，點下喜歡／評分／收藏按鈕，告訴卡伯你喜愛的卡片，讓我們優化專屬你的推薦功能！
                  <h5 className="mt-12 mb-0">社群平台</h5>
                    想即時掌握卡伯的功能更新？充實理財相關知識？一窺創業究竟？你可以關注卡伯的FB和IG！在這裡，我們會定期分享信用卡、理財、創業相關內容，來看看吧！
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/features-split-image-04.png')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;