// Write a function that takes two arguments, and returns a new array populated with the elements that only appear once, in either one array or the other, taken only once; display order should follow what appears in arr1 first, then arr2:
//
//     hotSingles([1, 2, 3, 3], [3, 2, 1, 4, 5]) // [4, 5]
// hotSingles(["tartar", "blanket", "cinnamon"], ["cinnamon", "blanket", "domino"]) // ["tartar", "domino"]
// hotSingles([77, "ciao"], [78, 42, "ciao"]) // [77, 78, 42]
// hotSingles([1, 2, 3, 3], [3, 2, 1, 4, 5, 4]) // [4,5]

// function hotSingles(arr1, arr2) {
//     let out = [];
//     for(let i = 0; i < arr1.length; i++) {
//         if(!arr2.includes(arr1[i]) && !out.includes(arr1[i])) out.push(arr1[i])
//     }
//
//     for(let k = 0; k < arr2.length; k++) {
//         if(!arr1.includes(arr2[k]) && !out.includes(arr2[k])) out.push(arr2[k])
//     }
// return out;
// }

function hotSingles(arr1, arr2) {
    return  [...new Set([...arr1,...arr2])].filter(el => !arr1.includes(el) || !arr2.includes(el))

}

console.log(hotSingles([1, 2, 3, 3], [3, 2, 1, 4, 5, 4]) )
console.log(hotSingles(["tartar", "blanket", "domino"], ["blanket"]) )