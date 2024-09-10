// P: getting js keys in camelCase to display on site in Title Case
// 1. Check if first char is upper
//    - if yes level 1 branch 1
//    - if no level 1 branch 2

// level 1 branch 1
// 1. find the next upper char
//    - if no next upper char return the full name (it's not camelCase and only one word)
//    - if there is:
// 2. substring from the first upper char to one index before the next upper char and save to result
// 3. repeat process until no more next upper char
// 4. concate result and return


// level 1 branch 2
// 1. find the next upper char
//    - if no next upper char
//        - toUpper first char and return the name (it's camelCase and only one word)
//    - if there is:
// 2. toUpper the first char
// 3. substring from the first upper char to one index before the next upper char and save to result
// 4. repeat process until no more next upper char
// 5. concate result and return


const camelCaseToTitleCase = (word) => {
  let result = "";
  let firstUpperIdx;
  let stopCharIdx;
  let firstLowerCharOfWordIdx;
  let nextUpperIdx;
  let charZeroIdx = 0;


// ===========================if first letter is upper============================================
  // check if first letter is already upper
  if (word[charZeroIdx] === word[charZeroIdx].toUpperCase()) {

    firstUpperIdx = charZeroIdx;

    for(let i = 1; i < word.length; i++) {

      // check if the next char is - or _
      if (word[i] === "-" || word[i] === "_") {
        stopCharIdx = i;
        result += word.slice(firstUpperIdx, stopCharIdx);
        // console.log("result line 38", result, "i line 38", i, "word[i]", word[i]);

        if(word[i + 1] === word[i + 1].toUpperCase()) {
          firstUpperIdx = i + 1;
          i++;
        } else if(word[i] === "-" || word[i] === "_") {
          stopCharIdx = i;
          i++;
        } else {
          firstLowerCharOfWordIdx = i;
          i++;
        }
        continue
      }

      // check if next char is upper
      if (word[i] === word[i].toUpperCase()) {
        // console.log("line 57");
        nextUpperIdx = i;
        result += word.slice(firstUpperIdx, nextUpperIdx) + " ";
        firstUpperIdx = i;
        // console.log("result line 58: ", result, "i line 58: ", i, "word[i]: ", word[i], "firstUpperIdx: ", firstUpperIdx);
      }

      // check if next char is the last char
      if (i === word.length - 1) {
        result += word.slice(firstUpperIdx);
        // console.log("result line 84: ", result, "i line 84: ", i, "word[i]: ", word[i]);
      }
      // console.log("end of loop i: ", i);
    }
  } else {

// ===========================if first letter is not upper============================================

    firstLowerCharOfWordIdx = 0;

    for(let i = 1; i < word.length; i++) {

      // check if the next char is - or _
      if (word[i] === "-" || word[i] === "_") {
        stopCharIdx = i;

        if (word[i - 1] === word[i - 1].toUpperCase()) {
          result += word.slice(firstUpperIdx, stopCharIdx);
          // console.log("result line 90", result, "i line 90", i, "word[i]", word[i]);
        } else {

          let nuWord = word.slice(firstLowerCharOfWordIdx, stopCharIdx);
          let nuWordToTitleCase = nuWord[0].toUpperCase() + nuWord.slice(1);
          result += nuWordToTitleCase;

          // console.log("result line 90", result, "i line 90", i, "word[i]", word[i]);
        }


        if(word[i + 1] === word[i + 1].toUpperCase()) {
          firstUpperIdx = i + 1;
          i++;
        } else if(word[i] === "-" || word[i] === "_") {
          stopCharIdx = i;
          i++;
        } else {
          firstLowerCharOfWordIdx = i;
          i++;
        }
        continue
      }

      // check if next char is upper
      if (word[i] === word[i].toUpperCase()) {
        // console.log("line 115 i: ", i, "firstLower: ", firstLowerCharOfWordIdx, "firstUpper: ", firstUpperIdx);

        nextUpperIdx = i;

        if (word[i - 1] === word[i - 1].toUpperCase()) {
          result += word.slice(firstUpperIdx, nextUpperIdx) + " ";
          // console.log("result line 124", result, "i line 124", i, "word[i]", word[i]);

        } else if (firstLowerCharOfWordIdx === 0) {

          let nuWord = word.slice(firstLowerCharOfWordIdx, nextUpperIdx);
          let nuWordToTitleCase = nuWord[0].toUpperCase() + nuWord.slice(1);
          result += nuWordToTitleCase + " ";

          firstLowerCharOfWordIdx = Infinity;

          // console.log("result line 131", result, "i line 131", i, "word[i]", word[i]);

        } else {

          let nuWord = word.slice(firstUpperIdx, nextUpperIdx);
          let nuWordToTitleCase = nuWord[0].toUpperCase() + nuWord.slice(1);
          result += nuWordToTitleCase + " ";

        }



        firstUpperIdx = i;
        // console.log("result line 119: ", result, "i line 119: ", i, "word[i]: ", word[i], "firstUpperIdx: ", firstUpperIdx);
      }

      // check if next char is the last char
      if (i === word.length - 1) {
        result += word.slice(firstUpperIdx);
        // console.log("result line 125: ", result, "i line 125: ", i, "word[i]: ", word[i]);
      }
      // console.log("end of loop i: ", i);
    }

  }

// =======================================================================

  if (result[result.length - 1] === "D") {
    console.log("163");
    if (result[result.length - 2] === " ") {
      console.log("165");
      if (result[result.length - 3] === "I") {
        console.log("167");
        result = result.slice(0, result.length-3) + result[result.length - 3] + result[result.length - 1]
      }
    }
  }

  return result;
}

// console.log("test FirstName: ", camelCaseToTitleCase("FirstName")); // passed
// console.log("test firstName: ", camelCaseToTitleCase("firstName")); // passed
// console.log("test firstName1: ", camelCaseToTitleCase("firstName1")); // passed
// console.log("test firstNameID: ", camelCaseToTitleCase("firstNameID")); // passed
// console.log("test FirstNameID: ", camelCaseToTitleCase("FirstNameID")); // passed

console.log("test firstName_Id: ", camelCaseToTitleCase("firstName_Id"));
// console.log("test firstName-Id: ", camelCaseToTitleCase("firstName-Id"));
// console.log("test firstName_ID: ", camelCaseToTitleCase("firstName_ID"));


export default camelCaseToTitleCase();
