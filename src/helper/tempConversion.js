/* eslint-disable no-restricted-globals */
/* eslint-disable class-methods-use-this */
export default class Calculator {
    // =================== celcius ======================
    // C = celcius, K = kelvin, F = fahrenhit
    CtF(a) {
        return (a * 9) / 5 + 32;
    }

    CtK(a) {
        return a + 273.15;
    }

    CtC(a) {
        return a;
    }

    CtR(a) {
        return (4 / 5) * a;
    }

    // =================== fahrenhit ======================

    FtF(a) {
        return a;
    }

    FtC(a) {
        return ((a - 32) * 5) / 9;
    }

    FtK(a) {
        return ((a - 32) * 5) / 9 + 273.15;
    }

    FtR(a) {
        return (4 / 9) * (a - 32);
    }
    // =================== kelvin ======================

    KtC(a) {
        return a - 273.15;
    }

    KtF(a) {
        return ((a - 273.15) * 9) / 5 + 32;
    }

    KtK(a) {
        return a;
    }

    KtR(a) {
        return (4 / 5) * (a - 273);
    }
    // =================== reamur ======================

    RtC(a) {
        return (5 / 4) * a;
    }

    RtF(a) {
        return (9 / 4) * a + 32;
    }

    RtK(a) {
        return (a * 5) / 4 + 273.15;
    }

    RtR(a) {
        return a;
    }

    operate(operator, a) {
        console.log(operator, a, 'yg masuk');
        switch (operator) {
            // celcius
            case 'ctk':
                return this.CtK(a);
            case 'ctr':
                return this.CtR(a);
            case 'ctf':
                return this.CtF(a);
            case 'ctc':
                return this.CtC(a);
            // fahrenhit
            case 'ftk':
                return this.FtK(a);
            case 'ftr':
                return this.FtR(a);
            case 'ftf':
                return this.FtF(a);
            case 'ftc':
                return this.FtC(a);
            // kelvin
            case 'ktk':
                return this.KtK(a);
            case 'ktr':
                return this.KtR(a);
            case 'ktf':
                return this.KtF(a);
            case 'ktc':
                return this.KtC(a);
            // reamur
            case 'rtk':
                return this.RtK(a);
            case 'rtr':
                return this.RtR(a);
            case 'rtf':
                return this.RtF(a);
            case 'rtc':
                return this.RtC(a);

            default:
                throw new Error('Invalid operator');
        }
    }

    getResult(operator, a) {
        const obj = this;
        return new Promise((resolve, reject) => {
            let result;
            try {
                result = obj.operate(operator, parseInt(a, 10));
                console.log(result, 'hasil - ');
            } catch (err) {
                // console.log(err, 'sds');
                result = err;
            } finally {
                setTimeout(() => {
                    if (result instanceof Error) {
                        reject(result);
                        return;
                    }

                    if (isNaN(result)) {
                        reject(new Error('Invalid operation'));
                        // alert('cannot null');
                        return;
                    }

                    resolve(result);
                }, Math.random() * 2500);
            }
        });
    }
}
