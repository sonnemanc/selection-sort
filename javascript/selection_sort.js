function selectionSort(arr) {
  // type your code here
  arr.sort( (a, b) => {
    if (a < b) {
      return -1
    }
    if (a > b) {
      return 1
    }
    return 0;
  })
  return arr
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSort([3, -1, 5, 2]));

  console.log("");

  // BENCHMARK HERE, and print the average runtime
  const longInput = [];

  for (let i = 0; i < 100; ++i) {
    longInput.push(Math.random());
  }
}

module.exports = selectionSort;

// Please add your pseudocode to this file

  //first iterate through the array and find the element with the lowest value

  //then place that element back in the same array behind the closest value before it

  //




// And a written explanation of your solution

//first I set up a sort function that will iterate through the array and compare each element

//using two if statements I check if the value is either larger or smaller than the second value.

//if the first value is greater then the second value I shift it to the next slot and recompare with the next value.