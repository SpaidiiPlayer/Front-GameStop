export async function createUser(bodyObject) {
  return fetch(`http://localhost:3033/api/v1/user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bodyObject),
  }).then((data) => {
    return data.json();
  });
}

export async function loginUser(bodyObject) {
  return fetch(`http://localhost:3033/api/v1/user/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify(bodyObject),
  }).then((data) => {
    return data.json();
  });
}

export async function getPurchasesFromUser(id) {
  return fetch(`http://localhost:3033/api/v1/user/purchases/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
  }).then((data) => {
    return data.json();
  });
}
