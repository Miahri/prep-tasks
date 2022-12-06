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