/* global  */
function userReg(onSuccess, onError) {
    window.setTimeout(() => {
        if (Math.random() > 0.2) {
            onSuccess({
                msg: "+ registration",
                id: 1
            });
        } else {
            onError({
                msg: "error reg"
            });
        }
    }, 500);
}

function userAuth(id, onSuccess, onError) {
    window.setTimeout(() => {
        if (Math.random() > 0.2) {
            onSuccess({
                msg: "+ auth" + id,
                token: "fsfasasfdgdvdfvdsggewgw223423432"
            });
        } else {
            onError({
                msg: "error auth"
            });
        }
    }, 500);
}

function userData(token, onSuccess, onError) {
    window.setTimeout(() => {
        if (Math.random() > 0.2) {
            onSuccess({
                msg: "+ data by token" + token,
                data: {
                    id: 1,
                    name: "Some"
                }
            });
        } else {
            onError({
                msg: "error data"
            });
        }
    }, 500);
}

export {
    userReg,
    userAuth,
    userData
};