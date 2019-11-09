export async function all() {
  let articles = await makeRequest('/api/', {
    headers: {
      Autorization: 'test'
    }
  });
  return articles;
}

export async function one(id) {
  let article = await makeRequest(`/api/?id=${id}`, {
    headers: {
      Autorization: 'test'
    }
  });

  return article;
}

export async function add(data) {
  let formData = new FormData();
  for (let key in data) {
    formData.append(key, data[key]);
  }
  let article = await makeRequest(`/api/`, {
    method: 'POST',
    headers: {
      Autorization: 'test'
    },
    body: formData
  });

  return article;
}

async function makeRequest(url, settings) {
  const response = await fetch(url, settings);
  if (response.status !== 200) {
    return response.text().then(text => {
      throw new Error(text);
    });
  }
  return response.json();
}
