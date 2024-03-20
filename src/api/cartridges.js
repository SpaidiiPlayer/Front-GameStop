export async function getAllCartridges() {
  return fetch("http://localhost:3033/api/v1/cartridges", {
    method: "GET",
  }).then((data) => {
    return data.json();
  });
}

export async function getOneCartridge(id) {
  return fetch(`http://localhost:3033/api/v1/cartridges/${id}`, {
    method: "GET",
  }).then((data) => {
    return data.json();
  });
}

export async function createCartridge(bodyObject) {
  return fetch(`http://localhost:3033/api/v1/cartridges`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bodyObject),
  }).then((data) => {
    return data.json();
  });
}

export async function updateCartridge(id, bodyObject) {
  return fetch(`http://localhost:3033/api/v1/cartridges/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bodyObject),
  }).then((data) => {
    return data.json();
  });
}

export async function deleteCartridge(id) {
  return fetch(`http://localhost:3033/api/v1/cartridges/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((data) => {
    return data.json();
  });
}
