import React from 'react';
import RakaminIcons from 'assets/img/icons/rakamin-icon.svg';
import HamburgerIcons from 'assets/img/icons/hamburger.svg';

function header() {
    return (
        <>
            <section className="header">
                <div className="container-custom">
                    <div className="box-flex">
                        <div className="">
                            <img src={RakaminIcons} alt="" srcSet="" height="36" width="36" />
                        </div>
                        <div className="">
                            <img src={HamburgerIcons} alt="" srcSet="" height="22" width="32" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default header;
