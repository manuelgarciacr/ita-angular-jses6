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
function moviesAverageOfDirector(array, director) {
    const ARR = getMoviesFromDirector(array, director);
    const SUM = ARR.reduce((av, v) => av + v.score, 0);
    const RES = SUM / ARR.length;
    const ROUNDED = Math.round(RES * 100) / 100;
    console.log("EXERCICE 3 ->", ROUNDED);

    return ROUNDED
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
function orderByYear() {

}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
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
