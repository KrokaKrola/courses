import * as serverApi from './db';

async function all() {
  let result = await serverApi.all();
  return parseResult(result);
}

async function one(id) {
  let result = await serverApi.get(id);
  return parseResult(result);
}

async function remove(id) {
  let result = await serverApi.remove(id);
  return parseResult(result);
}

export { all, one, remove };

function parseResult(response) {
  try {
    let info = JSON.parse(response);
    return info.data;
  } catch (e) {
    throw new Error(`Server response error`);
  }
}
