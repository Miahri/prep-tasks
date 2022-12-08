/*Global vs. Local Scope in Functions*/
const outerWear = "T-Shirt";

function myOutfit() {
    let outerWear = "sweater"
    return outerWear;
}

myOutfit();


//Returned Value
let processed = 0;

function processArg(num) {
    return (num + 3) / 5;
}

processed = processArg(7);


/*Access Multi-Dimensional Arrays With Indexes*/
const myArrayIndex = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
];

let myData = myArrayIndex[2][1];


/*Manipulate Arrays With push()*/
const myArrayPush = [["John", 23], ["cat", 2]];
myArrayPush.push(["dog", 3])

//Manipulate Arrays With pop()
const myArrayPop = [["John", 23], ["cat", 2]];
let removedFromMyArrayPop = myArrayPop.pop();

//Manipulate Arrays With shift()
const myArrayShift = [["John", 23], ["dog", 3]];
removedFromMyArrayShift = myArrayShift.shift()

//Manipulate Arrays With unshift()
const myArrayUnshift = [["John", 23], ["dog", 3]];
myArrayUnshift.shift();
myArrayUnshift.unshift(["Paul", 35]);

/*Next 50% of the test*/
function nextInLine(arr, item) {
    arr.push(item);
    let removedFromArray = arr.shift(item);
    return removedFromArray;
}

let testArr = [1, 2, 3, 4, 5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

//Boolean type
function trueOrFalse(wasThatTrue) {
    if(wasThatTrue) {
        return "Yes, that was true"
    }
    return "No, that was false"
}

//Comparison with the logical AND operator
function testLogicalAnd(val) {
    if (val <= 50 && val >= 25) {
        return "Yes"
    }
    return "No";
}
testLogicalAnd(10);

//Comparison with the logical OR operator
function testLogicalOr(val) {
    if (val < 10 || val > 20) {
        return "Outside";
    }
    return "Inside";
}
testLogicalOr(15);

//Chaining IF ELSE statements
function testSize(num) {
    if (num < 5) {
        return "Tiny";
    } else if (num < 10) {
        return "Small";
    } else if (num < 15) {
        return "Medium"
    } else if (num < 20) {
        return "Large"
    } else if (num >= 20) {
        return "Huge";
    } else {
        return "Change Me";
    }
}
testSize(7);

//switch statements
function caseInSwitch(val) {
    let answer = "";
    // Only change code below this line
    switch (val) {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
    }
    return answer;
}
caseInSwitch(1);

//Switch statement with multiple identical options
function sequentialSizes(val) {
    let answer = "";
    switch (val) {
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "High";
            break;
    }
    return answer;
}
sequentialSizes(1);


//Counting cards
let count = 0;

function cc(card) {
    // Only change code below this line
    if (card > 1 && card < 7) {
        count++;
    } else if (card > 6 && card < 10) {
        count;
    } else if (card === 10 || card == 'J' || card == 'Q' || card == 'K' || card == 'A'){
        count--;
    } else {
        return "Change Me";
    }

    if (count > 0){
        return count + ' Bet';
    } else {
        return count + ' Hold'
    }
    // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');


//Using Objects for lookup
function phoneticLookup(val) {
    let result = "";

    const lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank"
    }
    result = lookup[val];
    return result;
}

phoneticLookup("charlie");


//Accessing nested objects
const myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];

const secondTree = myPlants[1].list[2];


//record collection
// Setup
const recordCollection = {
    2548: {
        albumTitle: 'Slippery When Wet',
        artist: 'Bon Jovi',
        tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
        albumTitle: '1999',
        artist: 'Prince',
        tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
        artist: 'Robert Palmer',
        tracks: []
    },
    5439: {
        albumTitle: 'ABBA Gold'
    }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
    if (prop !== "tracks" && value !== "") {
        records[id][prop] = value;
    } else if (prop === "tracks" && records[id].hasOwnProperty("tracks") == false) {
        records[id][prop] = [value];
    } else if (prop === "tracks" && value !== "") {
        records[id][prop].push(value);
    } else if (value === "") {
        delete records[id][prop];
    }

    return records;

}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');


//Recursive
function sum(arr, n) {
    if (n > 0) {
        return sum(arr, n - 1) + arr[n - 1];
    } else {
        return 0;
    }
}

//Profile lookup
// Setup
const contacts = [
    {
        firstName: "Akira",
        lastName: "Laine",
        number: "0543236543",
        likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
        firstName: "Harry",
        lastName: "Potter",
        number: "0994372684",
        likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
        firstName: "Sherlock",
        lastName: "Holmes",
        number: "0487345643",
        likes: ["Intriguing Cases", "Violin"],
    },
    {
        firstName: "Kristian",
        lastName: "Vos",
        number: "unknown",
        likes: ["JavaScript", "Gaming", "Foxes"],
    },
];

function lookUpProfile(name, prop) {
    for (let i = 0; i < contacts.length; i++) {
        if (contacts[i].firstName == name) {
            if (contacts[i].hasOwnProperty(prop)) {
                return contacts[i][prop];
            } else {
                return "No such property";
            }
        }
    }
    return "No such contact";
}

lookUpProfile("Akira", "likes");

//Random whole numbers
function randomWholeNum() {
    return Math.floor(Math.random() * 10);
}

//parse int with a radix
function convertToInteger(str) {
    return parseInt(str, 2);
}

convertToInteger("10011");