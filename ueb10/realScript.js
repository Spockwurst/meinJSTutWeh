const sc = require('./script.js');
// a)
let data = sc.readFile('./data.json');
let data2 = sc.readFile('./data2.json');

function objByID(id, list) {
    return list !== undefined ? list.filter(e => e.id === id) : undefined;
}

function extractProfiles(accs) {
    let profiles = [];
    for (let i = 0; i < accs.length; i++) {
        profiles.push(accs[i].profiles);
    }
    return profiles;
}

function makeGenreList(movies) {
    let genres = [];
    for (let i = 0; i < movies.length; i++) {
        if (!genres.includes(movies[i].genres[0])) {
            genres.push(movies[i].genres[0]);
        }
    }
    return genres;
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

function getLikes(staticstics, id) {
    for (let i = 0; i < staticstics.likes.length; i++) {
        if (staticstics.likes[i].film_id === id) {
            return staticstics.likes[i].likes;
        }
    }
}

// c)
//console.log(objByID(1, data.movies));
// d)
//console.log(objByID(0, data2.accounts));
// e)
//let prr = { profiles: extractProfiles(data2.accounts)[0] };
//console.log(prr.profiles);
//console.log(objByID('1', prr.profiles));
// f)
//console.log(data2.statistics);
// g)
//console.log(data2.info);

// 2.
// a)
//console.log(makeGenreList(data.movies));
// b)
//console.log(sc.phraseSearch(data.movies, 'sin'));
// c)
//console.log(groupByGenre("Drama", data.movies));
// d)
//console.log(getLikes(data2.statistics, "Hans und der Otto"));

// 3.
// a)
