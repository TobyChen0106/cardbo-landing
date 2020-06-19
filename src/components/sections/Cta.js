import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import IconButton from '@material-ui/core/IconButton';
import Input from '../elements/Input';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import SendIcon from '@material-ui/icons/Send';
import * as rdd from 'react-device-detect';

var request = require("request");
var url = "https://cors-anywhere.herokuapp.com/https://geolocation-db.com/json";

const propTypes = {
  ...SectionProps.types,
  split: PropTypes.bool
}

const defaultProps = {
  ...SectionProps.defaults,
  split: false
}

const Cta = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  split,
  // createNotification,
  ...props
}) => {

  const outerClasses = classNames(
    'cta section center-content-mobile reveal-from-bottom',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'cta-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider',
    split && 'cta-split'
  );

  const checkEmail = (e) => {
    const emailInput = e.target.value;
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const result = re.test(String(emailInput).toLowerCase());
    if (result) {
      document.getElementById("user-info-holder").style.maxHeight = "500px";
    }
  }

  const sendMail = () => {
    var userEmail = document.getElementById('user-email').value;
    var userInfo = document.getElementById('user-info').value;
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const result = re.test(String(userEmail).toLowerCase());


    if (result) {
      const newData = {
        userEmail: userEmail,
        userInfo: userInfo,
        os: rdd.osName + ' ' + rdd.osVersion,
        browser: rdd.browserName + ' ' + rdd.fullBrowserVersion,
        mobile: rdd.mobileVendor + ' ' + rdd.mobileModel,
        engineVersion: rdd.engineVersion,
        getUA: rdd.getUA,
        deviceType: rdd.deviceType,
        geoData: ""
      }
      request({
        url: url,
        json: true
      }, function (error, response, body) {
        if (!error && response.statusCode === 200) {
          console.log(body);
          newData.geoData = body;
        }
        fetch('/api/save-user-contact', {
          method: 'POST',
          body: JSON.stringify(newData),
          headers: new Headers({
            'Content-Type': 'application/json'
          })
        }).then(
          res => res.json()
        ).then((data) => {
          if (data === "ERR") {
            props.createNotification('warning', 'Connection Error', '');
          } else {
            props.createNotification('success', 'Received', userEmail);
          }
        }).catch(function (error) {
          window.alert("[Error] " + error);
        });
      });

      document.getElementById('user-email').value = "";
      document.getElementById('user-info').value = "";

    } else {
      props.createNotification('error', 'Email Format Error', userEmail);
    }
  }

  const copyMail = () => {
    const el = document.createElement('textarea');
    el.value = "hello@cardbo.info";
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');

    /* Alert the copied text */
    // alert("Copied the text: " + el.value);
    document.body.removeChild(el);
    props.createNotification('success', 'Copyed', "hello@cardbo.info");
  }

  return (
    <section
      {...props}
      className={outerClasses}

    >
      <div className="container" id="scroll-ref-cta">
        <div
          className={innerClasses}
        >
          <div className="cta-slogan">
            <h3 className="m-0">
              對我們有興趣嗎?
              </h3>
          </div>
          <div className="cta-action">
            <span style={{ display: "flex" }}>
              <div>
                <Input id="user-email" type="email" label="Subscribe" labelHidden placeholder="留下您的 email" onChange={(e) => checkEmail(e)} />
                <div className="user-info-holder" id="user-info-holder">
                  <Input id="user-info" type="email" label="Subscribe" labelHidden placeholder="有想說的話嗎?" />
                </div>
              </div>
              <div className="center-content">
                <IconButton aria-label="copy email" onClick={sendMail}>
                  <SendIcon style={{ color: "#ffffff" }} />
                </IconButton>
              </div>
            </span>
            <div className="center-content" style={{ paddingTop: "20px", color: "#fff" }} >或是</div>
            <span style={{ display: "flex" }}>
              <div className="center-content" style={{ margin: "10px", color: "#fff", warp: 'nowarp', overFolw: 'hidden' }}>
                聯絡我們: hello@cardbo.info
              </div>
              <IconButton aria-label="copy email" component="span" onClick={copyMail}>
                <FileCopyIcon style={{ color: "#ffffff" }} />
              </IconButton>
            </span>

          </div>
        </div>
      </div>
    </section>
  );
}

Cta.propTypes = propTypes;
Cta.defaultProps = defaultProps;

export default Cta;