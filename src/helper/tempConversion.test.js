/* eslint-disable import/named */
/* eslint-disable no-undef */

import Calculator from 'helper/tempConversion';

const calc = new Calculator();

// celcius
test('Celcius to Fahrenhit', () => {
    expect(() => calc.CtF('ctf', 10)).not.toThrow();
    expect(calc.CtF(10)).toBe(50);
});

test('Celcius to Kelvin', () => {
    expect(() => calc.CtK('ctk', 10)).not.toThrow();
    expect(calc.CtK(10)).toBe(283.15);
});

test('Celcius to Celcius', () => {
    expect(() => calc.CtC('FtK', 10)).not.toThrow();
    expect(calc.CtC(10)).toBe(10);
});

test('Celcius to Reamur', () => {
    expect(() => calc.CtR('FtR', 10)).not.toThrow();
    expect(calc.CtR(10)).toBe(8);
});

// Fahrenhit
test('Fahrenhit to Fahrenhit', () => {
    expect(() => calc.FtF('ftf', 10)).not.toThrow();
    expect(calc.FtF(10)).toBe(10);
});

test('Fahrenhit to Celcius', () => {
    expect(() => calc.FtC('ftk', 10)).not.toThrow();
    expect(calc.FtC(10)).toBe(-12.222222222222221);
});

test('Fahrenhit to Kelvin', () => {
    expect(() => calc.FtK('ftk', 10)).not.toThrow();
    expect(calc.FtK(10)).toBe(260.92777777777775);
});

test('Fahrehnit to Reamur', () => {
    expect(() => calc.FtR('ftr', 10)).not.toThrow();
    expect(calc.FtR(10)).toBe(-9.777777777777777);
});

// Kelvin
test('Kelvin to Fahrenhit', () => {
    expect(() => calc.KtF('ktf', 10)).not.toThrow();
    expect(calc.KtF(10)).toBe(-441.66999999999996);
});

test('Kelvin to Celcius', () => {
    expect(() => calc.KtC('ktc', 10)).not.toThrow();
    expect(calc.KtC(10)).toBe(-263.15);
});

test('Kelvin to Kelvin', () => {
    expect(() => calc.KtK('ktk', 10)).not.toThrow();
    expect(calc.KtK(10)).toBe(10);
});

test('Kelvin to Reamur', () => {
    expect(() => calc.KtR('ktr', 10)).not.toThrow();
    expect(calc.KtR(10)).toBe(-210.4);
});

// Reamur
test('Reamur to Fahrenhit', () => {
    expect(() => calc.RtF('rtf', 10)).not.toThrow();
    expect(calc.RtF(10)).toBe(54.5);
});

test('Reamur to Celcius', () => {
    expect(() => calc.RtC('rtc', 10)).not.toThrow();
    expect(calc.RtC(10)).toBe(12.5);
});

test('Reamur to Kelvin', () => {
    expect(() => calc.RtK('rtk', 10)).not.toThrow();
    expect(calc.RtK(10)).toBe(285.65);
});

test('Reamur to Reamur', () => {
    expect(() => calc.RtR('rtr', 10)).not.toThrow();
    expect(calc.RtR(10)).toBe(10);
});
