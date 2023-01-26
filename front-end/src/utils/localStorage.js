export const createLocalStorage = (key) => {
  if (!localStorage.getItem(key)) { localStorage.setItem(key, {}); }
};

export const getLocalStorage = (key) => {
  const stringfiedData = localStorage.getItem(key);
  if (!stringfiedData) { return null; }
  const data = JSON.parse(stringfiedData);
  return data;
};

export const setLocalStorage = (key, data) => {
  createLocalStorage();
  const stringfiedData = JSON.stringify(key, data);
  localStorage.setItem(key, stringfiedData);
};
