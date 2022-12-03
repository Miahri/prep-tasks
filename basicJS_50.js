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

const myData = myArrayIndex[2][1];


/*Manipulate Arrays With push()*/
const myArrayPush = [["John", 23], ["cat", 2]];
myArrayPush.push(["dog", 3])