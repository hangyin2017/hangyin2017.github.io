const fetchData = (fileName) => {
  return fetch(`./assets/json/${fileName}.json`).then(res => res.json());
}

const toCapitalWord = word => (
  word[0].toUpperCase() + word.slice(1)
)

export { fetchData, toCapitalWord };