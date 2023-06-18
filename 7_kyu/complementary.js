// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

// Example: (input --> output)

function DNAStrand(str) {
  const pattern = /[ACTG]/g;

  const replacedStr = str.replace(pattern, function (match) {
    if (match === "A") {
      return "T";
    } else if (match === "C") {
      return "G";
    } else if (match === "T") {
      return "A";
    } else if (match === "G") {
      return "C";
    }
  });

  return replacedStr;
}

console.log(DNAStrand("ATTGC"));
