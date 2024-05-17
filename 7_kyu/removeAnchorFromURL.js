// Complete the function/method so that it returns the url with anything after the anchor (#) removed.
//
//     Examples
//      "www.codewars.com#about" --> "www.codewars.com"
//      "www.codewars.com?page=1" -->"www.codewars.com?page=1"

function removeUrlAnchor(url){
    return url.replace(/#.+/g, '');
}

function testRemoveUrlAnchor() {
    // Test 1: URL with anchor
    let input1 = "https://www.example.com/page#section";
    let expected1 = "https://www.example.com/page";
    let result1 = removeUrlAnchor(input1);
    console.log(result1 === expected1 ? "Test 1 Passed" : "Test 1 Failed");

    // Test 2: URL without anchor
    let input2 = "https://www.example.com/page";
    let expected2 = "https://www.example.com/page";
    let result2 = removeUrlAnchor(input2);
    console.log(result2 === expected2 ? "Test 2 Passed" : "Test 2 Failed");

    // Test 3: URL with multiple anchors
    let input3 = "https://www.example.com/page#section1#section2";
    let expected3 = "https://www.example.com/page";
    let result3 = removeUrlAnchor(input3);
    console.log(result3 === expected3 ? "Test 3 Passed" : "Test 3 Failed");

    // Test 4: URL with anchor containing special characters
    let input4 = "https://www.example.com/page#section-1";
    let expected4 = "https://www.example.com/page";
    let result4 = removeUrlAnchor(input4);
    console.log(result4 === expected4 ? "Test 4 Passed" : "Test 4 Failed");

    // Test 5: Empty URL
    let input5 = "";
    let expected5 = "";
    let result5 = removeUrlAnchor(input5);
    console.log(result5 === expected5 ? "Test 5 Passed" : "Test 5 Failed");
}

testRemoveUrlAnchor();