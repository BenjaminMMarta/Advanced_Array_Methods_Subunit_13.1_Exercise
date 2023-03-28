//--------------------forEach--------------------//

//doubleValues//
function doubleValues(array) {
    let newArray = [];
    array.forEach(function(value) {
        newArray.push(value * 2);
    });
    return newArray;
}

//onlyEvenValues//
function onlyEvenValues(array) {
    let newArray = [];
    array.forEach(function(value) {
        if (value % 2 === true) {
            newArray.push(value)
        } 
    });
    return newArray;
}

//showFirstAndLast//
function showFirstAndLast(array) {
    let newArray = [];
    array.forEach(function(value) {
        newArray.push(value[0] + value.length - 1);
    });
    return newArray;
}

//addKeyAndValue//

function addKeyAndValue(array, key, value) {
    array.forEach(function(newValue) {
        newValue[key] = value;
    });
    return array; 
}

//vowelCount//

function vowelCount(string) {
    let splitArray = string.split("");
    let object = {};
    const vowels = "aeiou";

    splitArray.forEach(function(letter) {
        let lowerCasedLetter = letter.toLowerCase();
        if (vowels.indexOf(lowerCasedLetter) !== -1) {
            if (object[lowerCasedLetter]) {
                object[lowerCasedLetter]++;
            } else {
                object[lowerCasedLetter] = 1;
            }
        }
    })
    return object;
}

//--------------------map--------------------//


//doubleValuesWithMap//
function doubleValuesWithMap(array){
    return array.map(function(value){
        return value * 2;
    });
};

//valTimesIndex//
function valTimesIndex(array){
    return array.map(function(value, index){
        return value * index;
    });
}

//extractKey//
function extractKey(array){
    return array.map(function(value){
        return value[key];
    });
}

//extractFullName//
function extractFullName(array){
    return array.map(function(value){
        return value.first + " " + value.last;
    });
}

//--------------------filter--------------------//

//filterByValue//
function filterByValue(array, key){
    return array.filter(function(value){
        return value[key] !== undefined;
    });
}

//find//
function find(array, value){
    return array.filter(function(number){
        return number === value;
    })[0];
}

//findInObj//
function findInObj(array, key, searchValue){
    return array.filter(function(value){
        return value[key] === searchValue;
    })[0];
}

//removeVowels//
function removeVowels(string){
    const vowels = "aeiou";
    return string
        .toLowerCase()
        .split("")
        .filter(function(value){
            return vowels.indexOf(value) === -1;
        })
        .join("");
}

//doubleOddNumbers//
function doubleOddNumbers(array){
    return array.filter(function(value){
        return value % 2 !==0;
    })
    .map(function(value){
        return value * 2;
    });
}

//--------------------END--------------------//