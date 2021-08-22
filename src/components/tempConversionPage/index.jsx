import React from 'react';
import Header from 'components/tempConversionPage/parts/header';
import Section1 from 'components/tempConversionPage/parts/section1';
import Section2 from 'components/tempConversionPage/parts/section2';
import Section3 from 'components/tempConversionPage/parts/section3';

function index() {
    return (
        <div className="tempConversion">
            <Header />
            <Section1 />
            <Section2 />
            <Section3 />
        </div>
    );
}

export default index;
