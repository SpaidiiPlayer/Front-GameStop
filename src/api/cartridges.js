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

export async function getCartridgesMari() {
  return fetch(`http://localhost:3033/api/v1/cartridges/filter/mari`, {
    method: "GET",
  }).then((data) => {
    return data.json();
  });
}

export async function getCartridgesFromPrice(from, to) {
  return fetch(
    `http://localhost:3033/api/v1/cartridges/filter/price?from=${from}&to=${to}`,
    {
      method: "GET",
    }
  ).then((data) => {
    return data.json();
  });
}

export async function getCartridgesFromName(name) {
  return fetch(
    `http://localhost:3033/api/v1/cartridges/filter/name?name=${name}`,
    {
      method: "GET",
    }
  ).then((data) => {
    return data.json();
  });
}

export async function getCartridgesLessThan5() {
  return fetch(`http://localhost:3033/api/v1/cartridges/filter/less-than-5`, {
    method: "GET",
  }).then((data) => {
    return data.json();
  });
}

export async function getCartridgesFromConsole(name) {
  return fetch(
    `http://localhost:3033/api/v1/cartridges/filter/console?console=${name}`,
    {
      method: "GET",
    }
  ).then((data) => {
    return data.json();
  });
}
