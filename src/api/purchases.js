export async function createPurchase(bodyObject) {
  return fetch(`http://localhost:3033/api/v1/purchases`, {
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

export async function getConfirmedPurchases(id) {
  return fetch(`http://localhost:3033/api/v1/purchases/confirmed/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
  }).then((data) => {
    return data.json();
  });
}

export async function getNotConfirmedPurchases() {
  return fetch(`http://localhost:3033/api/v1/purchases/not-confirmed`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
  }).then((data) => {
    return data.json();
  });
}

export async function confirmPurchase(bodyObject) {
  return fetch(`http://localhost:3033/api/v1/purchases/confirm-purchase`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify(bodyObject),
  }).then((data) => {
    return data.json();
  });
}
