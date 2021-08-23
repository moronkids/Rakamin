/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useCallback, useRef } from 'react';
import Reverse from 'assets/img/icons/reverse.svg';
import tempArr from 'helper/tempData';
import Calculator from 'helper/tempConversion';
// import { debounce } from 'lodash';

const debounce = (fn, delay) => {
    let timeoutId;
    return function (...args) {
        clearInterval(timeoutId);
        timeoutId = setTimeout(() => fn.apply(this, args), delay);
    };
};

function section3() {
    // eslint-disable-next-line no-unused-vars
    const [fromTemp, setFromTemp] = useState(null);
    // eslint-disable-next-line no-unused-vars
    const [toTemp, setToTemp] = useState(null);
    // eslint-disable-next-line no-unused-vars
    const [reverse, setReverse] = useState(false);
    const [result, setResult] = useState(null);
    const [timer, setTimer] = useState(null);
    const ReverseTemp = () => {
        const from = fromTemp;
        const to = toTemp;
        setFromTemp(to);
        setToTemp(from);
        setReverse(!reverse);
    };
    const ConversionTemp = new Calculator();
    const calculateNext = (x, fromTemp_, toTemp_) => {
        console.log(toTemp_, fromTemp_, 'der');
        ConversionTemp.getResult(
            `${fromTemp_?.[0].toLowerCase() || 'c'}t${toTemp_?.[0].toLowerCase() || 'c'}`,
            x
        )
            .then((val) => {
                setResult(val);
            })
            .catch((err) => setResult(''));
    };
    const debounceCallback = useCallback(
        debounce((value, fromTemp_, toTemp_) => {
            calculateNext(value, fromTemp_, toTemp_);
        }, 1000),
        []
    );
    const [input, setInput] = useState(0);
    const calculate = (value) => {
        setResult('calculate....');
        setInput(value);
        console.log(toTemp, fromTemp, 'taik');
        debounceCallback(value, fromTemp, toTemp);
    };

    useEffect(() => {
        // setResult('calculate....');
        setResult('calculate....');
        debounceCallback(input, fromTemp, toTemp);
    }, [toTemp, fromTemp]);
    return (
        <section className="section3" id="section3">
            <div className="container-custom">
                <div className="boxForm mt-4 mb-4">
                    <div className="convertTemp">
                        <div className="select-wrapper">
                            <select
                                name=""
                                id=""
                                className="a"
                                onChange={(e) => setFromTemp(e.target.value)}
                            >
                                {tempArr.map((val) => (
                                    <option value={val} selected={fromTemp === val}>
                                        {val}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div
                            className="reverse"
                            onClick={() => {
                                ReverseTemp();
                            }}
                        >
                            <img src={Reverse} alt="" srcSet="" />
                        </div>
                        <div className="select-wrapper">
                            <select
                                name=""
                                id=""
                                className="b"
                                onChange={(e) => setToTemp(e.target.value)}
                            >
                                {tempArr.map((val) => (
                                    <option value={val} selected={toTemp === val}>
                                        {val}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="wrap-input select-mobile">
                        <label htmlFor="">From</label>
                        <select type="number" className="input-user" placeholder="133000">
                            {tempArr.map((val) => (
                                <option value={val} selected={fromTemp === val}>
                                    {val}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="wrap-input select-mobile">
                        <label htmlFor="">To</label>
                        <select type="number" className="input-user" placeholder="133000">
                            {tempArr.map((val) => (
                                <option value={val} selected={toTemp === val}>
                                    {val}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="wrap-input d-block">
                        <label htmlFor="">Input</label>
                        <input
                            type="number"
                            className="input-user"
                            placeholder="133000"
                            onChange={(e) => calculate(e.target.value)}
                        />
                    </div>
                    <div className="wrap-input d-block">
                        <label htmlFor="">Output</label>
                        <div>{console.log(result, 'hasilbro')}</div>
                        <input
                            value={result}
                            disabled
                            defaultValue={0}
                            type="text"
                            className="input-user disabled"
                            // placeholder="1.33"
                            onClick={() => {
                                navigator.clipboard.writeText(this.state.textToCopy);
                            }}
                        />
                    </div>
                    <div className="wrap-input d-block">
                        <label htmlFor="">Input Color</label>
                        <input type="number" className="input-user" placeholder="ex: Blue" />
                    </div>
                    <div className="btn-submit m-auto">Change Color</div>
                </div>
            </div>
        </section>
    );
}

export default section3;
