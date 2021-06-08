async function getApi(number) {
  const url = `https://rickandmortyapi.com/api/character/?page=${number}`;
  const result = await fetch(url)
  return await result.json();
}

export default getApi;