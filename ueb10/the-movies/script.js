const fs = require('fs');

function readFile(pathToFile) {
  return JSON.parse(
    fs.readFileSync(pathToFile, { encoding: 'utf8' })
  );
}

function writeFile(pathToFile, obj) {
  const jsonStr = JSON.stringify(obj);
  fs.writeFileSync(pathToFile, jsonStr, { encoding: 'utf8' });
}

function avgRuntime(movies) {
  let total = 0;
  for (let n = 0; n < movies.length; n++) {
    total += Number.parseInt(movies[n].runtime);
  }
  return total / movies.length;
}

function phraseSearch(movies, phrase) {
  phrase = phrase.toUpperCase();
  let filteredMovies = [];
  for (let n = 0; n < movies.length; n++) {
    if (movies[n].title.toUpperCase().includes(phrase)) {
      filteredMovies.push(movies[n]);
    }
  }
  return filteredMovies;
}

function groupByGenre(genres, movies) {
  let moviesByGenres = {};
  for (let n = 0; n < genres.length; n++) {
    moviesByGenres[genres[n]] = [];
  }
  for (let n = 0; n < movies.length; n++) {
    moviesByGenres[movies[n].genres[0]].push(movies[n]);
  }
  return moviesByGenres;
}

const data = readFile('./data.json');
const genres = data.genres;
const movies = data.movies;

console.log(avgRuntime(movies));
console.log(phraseSearch(movies, 'sin'));

writeFile('./moviesByGenres.json', groupByGenre(genres, movies));