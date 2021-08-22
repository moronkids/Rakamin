import React from 'react';
import Section1 from 'components/landingPage/parts/section1';
<<<<<<< HEAD
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
=======
import Section2 from 'components/landingPage/parts/section2';
>>>>>>> d669850 (feat: section 2)

function index() {
  return (
    <div className="landing">
      <div className="landing__container">
        <Section1 />
      </div>
      <Section2 />
    </div>
  );
>>>>>>> 84a14fc (feat: section1)
}

export default index;
