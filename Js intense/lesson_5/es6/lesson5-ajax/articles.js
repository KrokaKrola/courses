export async function all() {
  let articles = await makeRequest('/api/', {
    headers: {
      'Autorization': 'test'
    }
  });
  return articles;
}


export async function one(id) {
  let article = await makeRequest(`/api/?id=${id}`, {
    headers: {
      'Autorization': 'test'
    }
  });

  return article;
}

export async function add(data) {
  let formData = new FormData();
  for(let key in data) {
    console.log(data[key]);
    formData.append(key, data[key]);
  }
  console.log(formData);
  let article = await makeRequest(`/api/`, {
    method: 'POST',
    headers: {
      'Autorization': 'test'
    },
    body: formData
  });

  return article;
}


function makeRequest(url, settings) {
  return fetch(url, settings).then((response) => {
    if(response.status !== 200) {
      return response.text().then((text) => {
        throw new Error(text);
      })
    }

    return response.json();
  })
}