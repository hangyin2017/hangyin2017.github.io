const fetchData = (fileName) => {
  return fetch(`./assets/json/${fileName}.json`).then(res => res.json());
}

export { fetchData };