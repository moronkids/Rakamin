/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import Reverse from 'assets/img/icons/reverse.svg';

function section3() {
    return (
        <section className="section3" id="section3">
            <div className="container-custom">
                <div className="boxForm mt-4 mb-4">
                    <div className="convertTemp">
                        <div className="select-wrapper">
                            <select name="" id="" className="a">
                                <option value="A">Celcius</option>
                                <option value="A">Kelvin</option>
                                <option value="A">Fahrenhit</option>
                                <option value="A">Reamur</option>
                            </select>
                        </div>
                        <div className="reverse">
                            <img src={Reverse} alt="" srcSet="" />
                        </div>
                        <div className="select-wrapper">
                            <select name="" id="" className="b">
                                <option value="A">Celcius</option>
                                <option value="A">Kelvin</option>
                                <option value="A">Fahrenhit</option>
                                <option value="A">Reamur</option>
                            </select>
                        </div>
                    </div>

                    <div className="wrap-input select-mobile">
                        <label htmlFor="">From</label>
                        <select type="text" className="input-user" placeholder="133000">
                            <option value="">sdsd</option>
                        </select>
                    </div>
                    <div className="wrap-input select-mobile">
                        <label htmlFor="">To</label>
                        <select type="text" className="input-user" placeholder="133000">
                            <option value="">sdsd</option>
                        </select>
                    </div>
                    <div className="wrap-input d-block">
                        <label htmlFor="">Input</label>
                        <input type="text" className="input-user" placeholder="133000" />
                    </div>
                    <div className="wrap-input d-block">
                        <label htmlFor="">Output</label>
                        <input
                            disabled
                            type="text"
                            className="input-user disabled"
                            placeholder="1.33"
                        />
                    </div>
                    <div className="wrap-input d-block">
                        <label htmlFor="">Input Color</label>
                        <input type="text" className="input-user" placeholder="ex: Blue" />
                    </div>
                    <div className="btn-submit m-auto">Change Color</div>
                </div>
            </div>
        </section>
    );
}

export default section3;
