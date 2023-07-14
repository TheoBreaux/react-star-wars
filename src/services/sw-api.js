async function getAllStarships() {
  try {
    const response = await fetch("https://swapi.dev/api/starships/");
    const data = await response.json();
    const results = data.results;
    return results;
  } catch (error) {
    console.error(error);
  }
}

export default getAllStarships;
