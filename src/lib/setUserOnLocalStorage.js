export const setUserOnLocalStorage = (bodyObject) => {
  localStorage.setItem("gamestop_user", JSON.stringify(bodyObject));
};
