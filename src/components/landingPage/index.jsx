import React from 'react';
import Section1 from 'components/landingPage/parts/section1';
import Section2 from 'components/landingPage/parts/section2';
import Section3 from 'components/landingPage/parts/section3';

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
        </div>
    );
}

export default index;
