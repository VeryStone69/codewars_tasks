// You'll be given a list of two strings, and each will contain exactly one colon (":") in the middle (but not at beginning or end). The length of the strings, before and after the colon, are random.
//
// Your job is to return a list of two strings (in the same order as the original list), but with the characters after each colon swapped.
//
//     Examples
//     ["abc:123", "cde:456"]  -->  ["abc:456", "cde:123"]
//     ["a:12345", "777:xyz"]  -->  ["a:xyz", "777:12345"]

function tailSwap(arr) {
    const part_1 = arr[0].split(':')
    const part_2 = arr[1].split(':')
    return [part_1[0]+':'+part_2[1],part_2[0]+':'+part_1[1]]
}

console.log(tailSwap(["abc:123", "cde:456"]))