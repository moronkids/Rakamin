import React from 'react';
import RakaminIcons from 'assets/img/icons/rakamin-icon.svg';
import HamburgerIcons from 'assets/img/icons/hamburger.svg';
import { Link } from 'react-router-dom';

function header() {
    return (
        <>
            <section className="header position-fixed" style={{ zIndex: '100' }}>
                <div className="container-custom">
                    <div className="box-flex">
                        <div className="" style={{ cursor: 'pointer' }}>
                            <Link to="/">
                                <img src={RakaminIcons} alt="" srcSet="" height="36" width="36" />
                            </Link>
                        </div>
                        <div className="">
                            <img
                                style={{ cursor: 'pointer' }}
                                src={HamburgerIcons}
                                alt=""
                                srcSet=""
                                height="22"
                                width="32"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default header;
