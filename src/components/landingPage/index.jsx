import React from 'react';
import Section1 from 'components/landingPage/parts/section1';
<<<<<<< HEAD
import Section2 from 'components/landingPage/parts/section2';
import Section3 from 'components/landingPage/parts/section3';
import Footer from 'components/landingPage/parts/footer';

function index() {
    return (
        <div className="landing">
            <div className="landing__container">
                <Section1 />
            </div>
            <Section2 />
            <div className="landing__container">
                <Section3 />
            </div>
            <div className="landing__container">
                <Footer />
            </div>
        </div>
    );
=======

function index() {
  return (
    <div className="landing">
      <div className="landing__container">
        <Section1 />
      </div>
    </div>
  );
>>>>>>> 84a14fc (feat: section1)
}

export default index;
