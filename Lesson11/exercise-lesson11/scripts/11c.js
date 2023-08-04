// getLastValue([1, 20, 22, 24, 5]);
// getLastValue(['hi', 'hello', 'good']);

arraySwap([1, 20, 22, 24, 5]);
arraySwap(['hi', 'hello', 'good']);

// function getLastValue(array){
//   const lastValue = array[array.length - 1]
//   console.log(lastValue);
// }

function arraySwap(array){
  let firstValue = array[0];
  let lastValue = array[array.length - 1];
  let swap = firstValue;
  array[0] = lastValue;
  array[array.length - 1] = swap;
  console.log(array);
}