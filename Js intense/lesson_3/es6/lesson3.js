// let path = require('path');

import * as badApi from "./lesson3/api-callback";

badApi.userReg((res) => {
    console.log(res);
    badApi.userAuth(res.id, (resAuth) => {
        console.log(resAuth);
        badApi.userData(resAuth.token, (resData) => {
            console.log(resData);
        }, (e) => {
            console.log(e);
        })
    }, (e) => {
        console.log(e.msg);
    });
}, (e) => {
    console.log(e.msg)
});

import {
    mathOp
} from './lesson3/math';

function mathRun() {
    try {
        let a = mathOp(1, 2, '+') + mathOp(1, 2, '/');
        console.log(a);
        return a;
    } catch (e) {
        console.error(e);
    } finally {
        console.log('math finaly');
    }
    console.log('math done')
}

mathRun();