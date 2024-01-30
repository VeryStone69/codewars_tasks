// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.
//
//     Example:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]
//
// None of the arrays will be empty, so you don't have to worry about that!

function removeEveryOther(arr){
    return arr.filter((el,index) => index % 2 === 0 && index !== 1)
}

removeEveryOther(["Keep0", "Remove", "Keep1", "Remove", "Keep2","Remove","Keep3"])