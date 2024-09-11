const camelCaseToTitleCase = (word) => {
  let result = "";
  let firstUpperIdx;
  let stopCharIdx;
  let firstLowerIdx;
  let nextUpperIdx;



// ===========================if first letter is upper============================================
  // check if first letter is already upper
  // console.log("word[0]: ", word[0], "word[0].toUpperCase()", word[0].toUpperCase())
  if (word[0] === word[0].toUpperCase()) {

    firstUpperIdx = 0;

    for(let i = 1; i < word.length; i++) {

      // check if the next char is - or _
      if (word[i] === "-" || word[i] === "_") {
        stopCharIdx = i;
        result += word.slice(firstUpperIdx, stopCharIdx);
        // console.log("result line 38", result, "i line 38", i, "word[i]", word[i]);


        if (firstUpperIdx === undefined || firstLowerIdx >= firstUpperIdx) {

          let nuWord = word.slice(firstLowerIdx, stopCharIdx);
          let nuWordToTitleCase = nuWord[0].toUpperCase() + nuWord.slice(1);
          result += nuWordToTitleCase + " ";
          stopCharIdx = undefined;


        } else {

          let nuWord = word.slice(firstUpperIdx, stopCharIdx);
          let nuWordToTitleCase = nuWord[0].toUpperCase() + nuWord.slice(1);
          result += nuWordToTitleCase + " ";
          stopCharIdx = undefined;

        }



        if(word[i + 1] === word[i + 1].toUpperCase()) {
          firstUpperIdx = i + 1;
          i++;
        } else if(word[i] === "-" || word[i] === "_") {
          stopCharIdx = i;
          i++;
        } else {
          firstLowerIdx = i;
          i++;
        }
        // continue
      }

      // check if next char is upper
      if (word[i] === word[i].toUpperCase()) {
        // console.log("line 57");
        nextUpperIdx = i;
        result += word.slice(firstUpperIdx, nextUpperIdx) + " ";
        firstUpperIdx = i;
        nextUpperIdx = undefined;
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

    firstLowerIdx = 0;

    for(let i = 1; i < word.length; i++){
      if(word[i] === word[i].toUpperCase){
        break
      } else {
        result = word[0].toUpperCase() + word.slice(1);


        if (result[result.length - 1] === "D" || result[result.length - 1] === "d") {
          if (result[result.length - 2] === "I" || result[result.length - 2] === "i") {
              // console.log("167");
              result = result.slice(0, result.length-2) + result[result.length - 2].toUpperCase() + result[result.length - 1].toUpperCase();
            }
        }


        return result
      }
    }

    for(let i = 1; i < word.length; i++) {

      // check if the next char is - or _
      if (word[i] === "-" || word[i] === "_") {
        stopCharIdx = i;

        if (firstUpperIdx === undefined || firstLowerIdx >= firstUpperIdx) {
          result += word.slice(firstLowerIdx, stopCharIdx) + " ";
          // console.log("result line 90", result, "i line 90", i, "word[i]", word[i],  "result: ", result);
          stopCharIdx = undefined;


        } else {

          let nuWord = word.slice(firstUpperIdx, stopCharIdx);
          // console.log("line 97 nuWord: ", nuWord, "nuWord[0]: ", nuWord[0],  "result: ", result, "nuword{0}.toUper: ", nuWord[0].toUpperCase());


          let nuWordToTitleCase = nuWord[0].toUpperCase() + nuWord.slice(1) + " ";
          result += nuWordToTitleCase;

          // console.log("result line 101", result, "i line 101", i, "word[i]", word[i], "result: ", result);
          stopCharIdx = undefined;

        }


        if(word[i + 1] === word[i + 1].toUpperCase()) {
          firstUpperIdx = i + 1;
          i++;
        } else {
          firstLowerIdx = i + 1;
          i++;
        }
        continue

      }




      // check if next char is upper
      if (word[i] === word[i].toUpperCase()) {
        // console.log("line 147 i: ", i, "firstLower: ", firstLowerIdx, "firstUpper: ", firstUpperIdx);

        nextUpperIdx = i;

        if (firstUpperIdx === undefined || firstLowerIdx >= firstUpperIdx) {


          let nuWord = word.slice(firstLowerIdx, nextUpperIdx);
          let nuWordToTitleCase = nuWord[0].toUpperCase() + nuWord.slice(1);
          result += nuWordToTitleCase + " ";
          // console.log("result line 153", result, "i line 153", i, "word[i]", word[i]);
          firstUpperIdx = i;

        } else {

          let nuWord = word.slice(firstUpperIdx, nextUpperIdx);
          // console.log("162 nuWord: ", nuWord, "firstUpperIdx: ", firstUpperIdx, "nextUpperIdx: ", nextUpperIdx)
          let nuWordToTitleCase = nuWord[0].toUpperCase() + nuWord.slice(1);
          result += nuWordToTitleCase + " ";

          firstLowerIdx = undefined;
          firstUpperIdx = i;

          // console.log("result line 163", result, "i line 163", i, "word[i]", word[i]);

        }



        firstUpperIdx = i;
        // console.log("result line 176: ", result, "i line 176: ", i, "word[i]: ", word[i], "firstUpperIdx: ", firstUpperIdx);
      }




      // check if next char is the last char
      if (i === word.length - 1) {
        result += word.slice(firstUpperIdx);
        // console.log("result line 125: ", result, "i line 125: ", i, "word[i]: ", word[i]);
      }
      // console.log("end of loop i: ", i);
    }

  }

// =============================CHECK RESULT FOR ENDING I D========================================

// console.log("result 197: ", result);
  if (result[result.length - 1] === "D" || result[result.length - 1] === "d") {
    // console.log("163");
    if (result[result.length - 2] === " ") {
      // console.log("165");
      if (result[result.length - 3] === "I" || result[result.length - 3] === "i") {
        // console.log("167");
        result = result.slice(0, result.length-3) + result[result.length - 3].toUpperCase() + result[result.length - 1].toUpperCase()
      }
    }
  }

  if (result[result.length - 1] === "D" || result[result.length - 1] === "d") {
    if (result[result.length - 2] === "I" || result[result.length - 2] === "i") {
        // console.log("167");
        result = result.slice(0, result.length-2) + result[result.length - 2].toUpperCase() + result[result.length - 1].toUpperCase();
      }
  }



// =========================== RETURN ==========================================

  return result;
}





// ==========================  TESTS ===========================================



// console.log("test FirstName: ", camelCaseToTitleCase("FirstName")); // passed
// console.log("test firstName: ", camelCaseToTitleCase("firstName")); // passed
// console.log("test firstName1: ", camelCaseToTitleCase("firstName1")); // passed
// console.log("test firstNameID: ", camelCaseToTitleCase("firstNameID")); // passed
// console.log("test FirstNameID: ", camelCaseToTitleCase("FirstNameID")); // passed
// console.log("test firstName_Id: ", camelCaseToTitleCase("firstName_Id")); // passed
// console.log("test firstName-Id: ", camelCaseToTitleCase("firstName-Id")); // passed
// console.log("test firstName_ID: ", camelCaseToTitleCase("firstName_ID")); // passed


export default camelCaseToTitleCase;
