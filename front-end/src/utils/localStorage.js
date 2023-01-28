export const createLocalStorage = (key) => {
  if (!localStorage.getItem(key)) { localStorage.setItem(key, '{}'); }
};

export const getLocalStorage = (key) => {
  console.log('teste');
  const stringfiedData = localStorage.getItem(key);
  if (!stringfiedData) { return null; }
  const data = JSON.parse(stringfiedData);
  return data;
};

export const setLocalStorage = (key, data) => {
  createLocalStorage(key);
  const stringfiedData = JSON.stringify(data);
  localStorage.setItem(key, stringfiedData);
};
