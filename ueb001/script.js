const fs = require('fs');

function readFile(path) {
    return fs.readFileSync(path, {encoding: 'utf-8'});
}
function writeFile(path, obj) {
    fs.writeFileSync(path, JSON.stringify(obj), {encoding: 'utf-8'});
}
function avgRuntime(movies) {
    let total = 0;
    for(let i = 0; i < movies.length; i++) {
        total += Number.parseInt(movies[i].runtime);
    }
    return total / movies.length;
}
function phraseSearch(movies, phrase) {
    let filteredMovies = [];
    for(let i = 0; i < movies.length; i++) {
        if(movies[i].title.includes(phrase)) {
            filteredMovies.push(movies[i]);
        }
    }
    return filteredMovies;
    //return movies.filter(m => m.title.includes(phrase));
}
function groupByGenre(genres, movies) {
    // geht besser
    let filteredMovies = [];
    for (let i = 0; i < genres.length; i++) {
        for (let j = 0; j < movies.length; j++) {
            if (movies[j].genres[0] === genres[i]) {
                filteredMovies.push(movies[j]);
            }
        }
    }
    return filteredMovies;
}

const data = JSON.parse(readFile('./data.json'));
const movies = data.movies;
const genres = data.genres;
//genres.push("Indie");
//writeFile('./data2.json', genres);
//console.log(phraseSearch(movies, "Shrek"));
//console.log(avgRuntime(movies));
//console.log(groupByGenre("Action", movies));
console.log(groupByGenre(genres, movies));