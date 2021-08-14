import React from 'react';
import Telp from 'assets/img/icons/telephone.svg';
import Calc from 'assets/img/icons/calc.svg';
import Loc from 'assets/img/icons/location.svg';
import Email from 'assets/img/icons/email.svg';

const section2 = () => (
  <div className="section-2">
    <div className="section-2__container">
      <div className="landing__container d-flex text-left wrapping-pad">
        <div className="col-md-6">
          <div className="title">
            CONTACT
          </div>
          <ul>
            <li>
              <img src={Telp} alt="" />
              <span>84 - 969877097</span>
            </li>
            <li>
              <img src={Email} alt="" />
              <span>toannd.figmateam@gmail.com</span>
            </li>
            <li>
              <img src={Calc} alt="" />
              <span>Lita Co, Ltd.999 Conway Blvd. </span>
            </li>
            <li>
              <img src={Loc} alt="" />
              <span>California 90999, United States</span>
            </li>
          </ul>
        </div>
        <div className="col-md-6">
          <div className="title">
            EDUCATION
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default section2;
