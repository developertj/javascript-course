getLastValue([1, 20, 22, 24, 5]);
getLastValue(['hi', 'hello', 'good']);

function getLastValue(array){
  const lastValue = array[array.length - 1]
  console.log(lastValue);
}