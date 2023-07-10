// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
    let result = Array.from( // Array without repeated directors
        new Set( // Set without repeated directors
            array.map(v => v.director) // Array with repeated directors
        )
    );
    console.log("EXERCICE 1 ->", result);

    return result
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
     let result = array.filter(v => v.director == director);
    console.log("EXERCICE 2 ->", result);

    return result
}

// Exercise 3: Calculate the average of the films of a given director.
const moviesAverage = array => {
    const SUM = array.reduce((av, v) => av + v.score, 0);
    const COUNT = array.reduce((cnt, v) => cnt + !(v.score == ''), 0); // true == 1, false == 0
    const RES = SUM / COUNT;
    const ROUNDED = Math.round(RES * 100) / 100;
    console.log("EXERCICE 3 AVERAGE ->", ROUNDED);

    return ROUNDED
}

function moviesAverageOfDirector(array, director) {
    const ARR = getMoviesFromDirector(array, director);
    console.log("EXERCICE 3 ARRAY->", ARR);
    const AVERAGE = moviesAverage(ARR);

    return AVERAGE
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
    const compareFn = (a, b) => {
        if (a.title < b.title)
            return -1;
        
        if (a.title > b.title)
            return 1;
        
        // a must be equal to b
        return 0;
    }
    const RES = array.concat().sort(compareFn).slice(0, 20).map(v => v.title);
    console.log("EXERCICE 4 ->", RES);

    return RES    
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
    const compareFn = (a, b) => {
        if (a.year < b.year)
            return -1;

        if (a.year > b.year)
            return 1;

        // The year of a is equal than the year of b

        if (a.title < b.title)
            return -1;
        
        if (a.title > b.title)
            return 1;
        
        // a must be equal to b
        return 0;
    }
    const RES = array.concat().sort(compareFn);
    console.log("EXERCICE 5 ->", RES);

    return RES    
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {
    const ARR = array.filter(v => v.genre.includes(genre));
    const RES = moviesAverage(ARR);
    console.log("EXERCICE 6 ->", RES);

    return RES 
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
    const REGEXP = /(?:(\d*)*h)?(?:\s*(\d*)*min)?/;
    const ARRAY = array.map(v => {
        const RES = {...v};
        const MATCH = v.duration.match(REGEXP);
        const HOURS = isNaN(MATCH[1]) ? 0 : +MATCH[1];
        const MINUTES = HOURS * 60 + (isNaN(MATCH[2]) ? 0 : +MATCH[2]);

        RES.duration = MINUTES;

        return RES
    });
    console.log("EXERCICE 7 ->", ARRAY);

    return ARRAY
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {
    const ARRAY = array.filter(v => v.year == year);
    const MAXSCORE = ARRAY.reduce(
        (max, v) => v.score > max ? v.score : max, 0
    );
    const RES = ARRAY.filter(v => v.score == MAXSCORE);
    console.log("EXERCICE 8 ->", RES);

    return RES
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
