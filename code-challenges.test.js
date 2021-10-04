// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

var colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
var colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

describe ("shuffleArray", () => {
  test("given an array, remove the first item and shuffle the remaining", () => {
    expect(shuffleArray(colors1)).toContain("yellow", "blue", "pink", "green")
    expect(shuffleArray(colors2)).toContain("saffron", "aquamarine", "periwinkle", "indigo", "ochre")
  })
})

// Ran test. Test failed. Error: shuffleArray is not defined.

// b) Create the function that makes the test pass.

// Create a function shuffleArray that takes in an array
  // use .shift to remove first element in the array
  // create new variable randomArray and use .random to shuffle the array in random order
  // return the shuffled array

const shuffleArray = (array)=>{
    array === array.shift()
   for (var i = array.length - 1; i > 0; i--) {
       var randomArray = Math.floor(Math.random() * (i + 1));
       [array[i], array[randomArray]] = [array[randomArray], array[i]]
   }
    return array
}

// console.log(shuffleArray(colors2))
// console.log(shuffleArray(colors1))

// Ran test. Test passed!

// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.

var nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
var nums2 = [109, 5, 9, 67, 8, 24]
// Expected output: [5, 109]

describe ("getMinMax", () => {
  test("given an array, return an array of the min and max numbers in that order", () => {
    expect(getMinMax(nums1)).toEqual([-8, 90])
    expect(getMinMax(nums2)).toEqual([5, 109])
  })
})

// Ran test. Test failed. Error: getMinMax is not defined

// b) Create the function that makes the test pass.

// Create a function getMinMax that take in an array
// Use the Math object and its .min and .max functions to return the min and max of the array. Use the spread operator to convert the array into a list of individual values and then min and max can work on those values

const getMinMax = (array) => {
  return [Math.min(...array), Math.max(...array)]
}

// Ran test. Test passed!

// console.log([Math.min(...nums1), Math.max(...nums1)])

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

var testArray1 = [3, 7, 10, 5, 4, 3, 3]
var testArray2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]

describe ("arrayNew", () => {
  test("take in two arrays and return one array with no duplicate values", () => {
    expect(arrayNew(testArray1,testArray2)).toEqual([3, 7, 10, 5, 4, 8, 2, 1])
  })
})

// Ran test. Test failed. Error message: array3 is not defined

// b) Create the function that makes the test pass.

// Create a function arrayNew that takes in 2 arrays as parameters
// Merge arrays together using .concat
// Use .filter to iterate through the combined array and find whether that value is present in the combined array
  // Use .indexOf to filter any values that occur multiple times and return non-duplicates

const arrayNew = (array1, array2) => {
  let combineArray = array1.concat(array2)
  return combineArray.filter((value, index, array) => {
    return array.indexOf(value) === index
  })
}

// console.log(arrayNew(testArray1, testArray2))

// Ran test. Test passed!
