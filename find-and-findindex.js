const scores = [30,75,90,95];

// returns 90 since it is the first thing that is greater than 75
scores.find(function(score) {
    return score > 75;
});

// finds the first score that is even
scores.find(function(score) {
    return score !== 0 && score % 2 === 0;
});

// filter is a find all while find just gives the first of that thing
const evenScores = scores.filter(function(score) {
    return score % 2 === 0;
});


// findIndex returns the index while find gives the value

// finds first odd number and gives the index number
const odd = scores.findIndex(function(score) {
    return score % 2 !== 0;
});


function partition(arr, pivot) {
    const pivotPoint = arr.findIndex(function(el) {
        return el > pivot
    });
    const left = arr.slice(0, pivotPoint);
    const right = arr.slice(pivotPoint);

    return [left, right];
};



// find and findindex write

function myFind(arr, func) {
    for(let i = 0; i < arr.length; i++) {
        if (func(arr[i], i, arr) === true) return arr[i];
    };
};


function myFindIndex(arr, func) {
    for(let i = 0; i < arr.length; i++) {
        if (func(arr[i], i, arr) === true) return i;
    }
    return -1;
};

myFindIndex(scores, function(score) {
    return score % 2 === 0;
})