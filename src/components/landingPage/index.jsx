import React from 'react';
import Section1 from 'components/landingPage/parts/section1';
import Section2 from 'components/landingPage/parts/section2';

function index() {
  return (
    <div className="landing">
      <div className="landing__container">
        <Section1 />
      </div>
      <Section2 />
    </div>
  );
}

export default index;
