
// The `movies` array from the file `src/data.js`.
git console.log('movies: ', movies);


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesParam) {
  let director = moviesParam.map((eachMovies) => {
    return eachMovies.director;
  })
  return director;
}
console.log(getAllDirectors(movies))

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesDrama) {
  let dramaSP = moviesDrama.filter ((eachMovies) => {
  return (eachMovies.director === 'Steven Spielberg' && eachMovies.genre.includes("Drama"))
  })
  return dramaSP.length;
  }
  console.log (howManyMovies(movies));


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesScore) {
  if (moviesScore.length === 0) {
    return 0};

let scoreAcc = moviesScore.reduce ((acc, elem) => {
  if (elem.score === undefined) {
    return acc
  } else {
  return acc + elem.score
  }
}, 0) 

let avg = scoreAcc / moviesScore.length 
let twoDigit = avg.toFixed(2)
let twoDigitNum = parseFloat(twoDigit)

return twoDigitNum
}

console.log(scoresAverage(movies))

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesDramaLove) {
   
let scoreDrama = moviesDramaLove.filter ((eachMovies) => {
  return eachMovies.genre.includes("Drama")
});

  let scoreDramaAcc = scoreDrama.reduce((acc, elem) => {
    if (elem.score === undefined) {
      return acc;
    } else {
    return acc + elem.score
  }
  }, 0)  
  
  let avg = scoreDramaAcc / scoreDrama.length;
  let twoDigit = avg.toFixed(2);
  let twoDigitNum = parseFloat(twoDigit)
  
  return twoDigitNum;
  }
  
console.log(dramaMoviesScore(movies));

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesYear) {
let moviesCopy = JSON.parse(JSON.stringify(movies));

moviesCopy.sort((elem1, elem2) => {
if (elem1.year > elem2.year){
  return 1; 
} else if (elem1.year < elem2.year){
  return -1;
} else {
if (elem1.title[0] > elem2.title[0]) {
  return 1;
} else if (elem1.title[0] < elem2.title[0]) {
  return 0;
}
}
})
return moviesCopy
}
console.log(orderByYear(movies))

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesOrder) {
  let moviestitleOrder = moviesOrder.slice(0, 20);

if (moviesOrder.length < 20){
  return moviesOrder;
} else {
  
  moviestitleOrder.sort ((elem1, elem2) => {
  if (elem1.title[0] > elem2.title[0]) {
    return 1;
  } else if (elem1.title[0] < elem2.title[0]){
    return - 1;
  }
});
}

let titleOrder = moviestitleOrder.map((eachMovies) => {
  return eachMovies.title;
})
return titleOrder;
}

console.log(orderAlphabetically(movies))

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
