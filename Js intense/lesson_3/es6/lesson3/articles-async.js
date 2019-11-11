import * as serverApiAsync from "./db-async";
/* global Promise */
async function all() {
  return await serverApiAsync.all().then(
    response => {
      let info = JSON.parse(response);
      return info.data;
    },
    err => {
      err = parseJson(err);
      throw new Error(err.status);
    }
  );
}

async function one(id) {
  return await serverApiAsync.get(id).then(
    response => {
      let info = JSON.parse(response);
      return info.data;
    },
    err => {
      err = parseJson(err);
      throw new Error(err.status);
    }
  );
}

async function remove(id) {
  return await serverApiAsync.remove(id).then(
    response => {
      let info = JSON.parse(response);
      return info.data;
    },
    err => {
      err = parseJson(err);
      throw new Error(err.status);
    }
  );
}

function parseJson(json) {
  return JSON.parse(json);
}

export { all, one, remove };
