import * as serverApi from './db';

async function all() {
  let response = await serverApi.all();

  return parseResponse(response);
}

async function one(id) {
  let response = await serverApi.get(id);
  return parseResponse(response);
}

async function remove(id) {
  let response = await serverApi.remove(id);
  return parseResponse(response);
}

export { all, one, remove };

function parseResponse(textJson) {
  try {
    let response = JSON.parse(textJson);
    console.log(response.code);
    if (response.code !== 200) {
      throw new Error('Server code error');
    }
    return response.data;
  } catch (e) {
    throw new Error('Server error');
  }
}
