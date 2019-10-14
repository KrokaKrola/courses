import * as serverApiAsync from './db-async';
/* global Promise */
async function all() {
    return new Promise((resolve, reject) => {
        serverApiAsync.all((response) => {
            let info = JSON.parse(response);

            if (info.code === 200) {
                // console.log(info);
                resolve(info.data)
            } else {
                reject({
                    msg: `${info.status}`
                })
            }
        });
    })

}

function one(id) {
    return new Promise((resolve, reject) => {
        serverApiAsync.get(id, (response) => {
            let info = JSON.parse(response);

            if (info.code === 200) {
                resolve(info.data);
            } else {
                reject(info.status);
            }
        });
    })
}

function remove(id) {
    return new Promise((resolve, reject) => {
        serverApiAsync.remove(id, (response) => {
            let info = JSON.parse(response);

            if (info.code === 200) {
                resolve(info.data);
            } else {
                reject(info.status);
            }
        });
    });
}

export {
    all,
    one,
    remove
};