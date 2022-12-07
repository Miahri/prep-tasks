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
