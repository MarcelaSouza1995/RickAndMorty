async function getApi(number) {
  const url = `https://rickandmortyapi.com/api/character/?page=${number}`;
  const result = await fetch(url);
  const resultJson = result.json()
  return resultJson;
}

export default getApi;