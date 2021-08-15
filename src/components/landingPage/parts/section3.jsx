import React from 'react';
import Asset1 from 'assets/img/dummy-1.svg';
import Asset2 from 'assets/img/dummy-2.svg';
import Asset3 from 'assets/img/dummy-3.svg';

function section3() {
  return (
    <div className="section-3">
      <div className="section-3__container">
        <div className="title text-left">
          PROJECT/EXPERIENCE
        </div>
        <div className="grid-exp">
          <div className="img-exp d-md-block d-sm-block d-none">
            <img src={Asset1} alt="" />
          </div>
          <div className="desc-exp text-left">
            <div className="title-exp">
              Designing Dashboards
            </div>
            <div className="wrap-year">
              <div className="year">
                2020
              </div>
              <div className="type">Dashboard</div>
            </div>
            <div className="img-exp d-md-none d-sm-none d-block text-center pb-3">
              <img src={Asset1} alt="" />
            </div>
            <div className="desc">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            </div>
          </div>
        </div>
        <div className="grid-exp">
          <div className="img-exp d-md-block d-sm-block d-none">
            <img src={Asset2} alt="" />
          </div>
          <div className="desc-exp text-left">
            <div className="title-exp">
              Vibrant Portraits of 2020
            </div>
            <div className="wrap-year">
              <div className="year">
                2018
              </div>
              <div className="type">Illustration</div>
            </div>
            <div className="img-exp d-md-none d-sm-none d-block text-center pb-3">
              <img src={Asset2} alt="" />
            </div>
            <div className="desc">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            </div>
          </div>
        </div>
        <div className="grid-exp">
          <div className="img-exp d-md-block d-sm-block d-none">
            <img src={Asset3} alt="" />
          </div>
          <div className="desc-exp text-left">
            <div className="title-exp">
              36 Days of Malayalam type
            </div>
            <div className="wrap-year">
              <div className="year">
                2018
              </div>
              <div className="type">Typography</div>
            </div>
            <div className="img-exp d-md-none d-sm-none d-block text-center pb-3">
              <img src={Asset3} alt="" />
            </div>
            <div className="desc">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            </div>
          </div>
                </div>
      </div>
    </div>
  );
}

export default section3;
