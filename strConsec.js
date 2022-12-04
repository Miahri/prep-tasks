function moveZeros(arr) {
    let removed;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            let removed = arr.splice(i, 1);
            arr.push(0);
            console.log(arr);
        }
    }
    return arr;
}

moveZeros([1,2,0,1,0,1,0,3,0,1]);