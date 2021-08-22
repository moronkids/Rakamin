import React from 'react';
import * as Scroll from 'react-scroll';
// import {
//     Link,
//     // Button,
//     // Element,
//     // Events,
//     // animateScroll as scroll,
//     // scrollSpy,
//     // scroller,
// } from 'react-scroll';

function section1() {
    const { Link } = Scroll;
    return (
        <section className="section1">
            <div className="container-custom">
                <div className="box-content">
                    <div className="leftSide">
                        <h1>Tools that make you easier to convert temperature</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus odio
                            egestas velit velit velit. Vestibulum diam tristique in eu diam a vitae
                            ridiculus. Mauris tortor mauris sit quis facilisis aliquam odio et. Ut
                            semper sapien tellus sem pellentesque a.
                        </p>
                        <Link
                            activeClass="active"
                            to="section3"
                            spy
                            smooth
                            offset={50}
                            duration={500}
                            // onSetActive={this.handleSetActive}
                        >
                            <div className="btn-started mt-5">Get Started</div>
                        </Link>
                    </div>
                    <div className="rightSide">
                        <div className="imgLand" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default section1;
