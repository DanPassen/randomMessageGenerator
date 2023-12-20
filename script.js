const beginning = ['Beginning Joke A', 'Beginning Joke B', 'Beginning C'];
const middle = ['Middle Joke A', 'Middle Joke B', 'Middle Joke C'];
const end = ['End Joke A', 'End Joke B', 'End Joke C'];

function getRandomNum(
    min = 1,
    max = 3
) {
    const random = Math.floor(Math.random() * 10);

    const maxValue = Math.min(random, max);
   

    const minValue = Math.max(maxValue, min);
    console.log('Value', minValue);

    // Return array readable number (user wants 1-3, JS wants 0-2)
    return minValue - 1;
    
  }
// Runs the function above 3 different ways to the 3 different arrays. Quote with space allows space between phrases.
console.log(
    beginning[getRandomNum()] + " " +
    middle[getRandomNum()] + " " +
    end[getRandomNum()]
);