const { log } = console;

const arr = [9, 3, 0, 7, 1, 5, 2, 4, 8, 6];

const arr1 = [0, 3, 6, 7, 8, 9];
const arr2 = [1, 2, 4, 5];

function baseMerge(left, right) {
  let temp = new Array(left.length + right.length);

  //let elementsLeft = left.length
  //let elementsRight = right.length

  let i = 0; // smallest unpicked in left
  let j = 0; // smallest unpicked in right
  let key = 0; // position to be filled in temp

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      temp[key] = left[i];
      i++;
    } else {
      temp[key] = right[j];
      j++;
    }
    key++;
  }
  while (i < left.length) {
    temp[key] = left[i];
    i++;
    key++;
  }
  while (j < right.length) {
    temp[key] = right[j];
    j++;
    key++;
  }
  return temp;
}

log('baseMerge function test: ',baseMerge(arr1, arr2));

function merge(left, right) {
  const temp = [];

  while (left.length > 0 && right.length > 0) {
    // if left[0] < right[0] get left
    const resultArr = left[0] <= right[0] ? left : right;
    // remove left[0] from left array
    const mergeElement = resultArr.shift();
    // push it to result array
    temp.push(mergeElement);
  }
  let arr = [...temp, ...left, ...right];
  log('Inner merging: ',arr)
  return arr
   
}
log('merge function test: ',merge(arr1, arr2))

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  else {
    const middle = Math.floor(arr.length / 2);
    const [left, right] = [arr.slice(0, middle), arr.slice(middle)];
    //log('Inner splitting', left, right);
    return merge(mergeSort(left), mergeSort(right));
  }
}

log('Merge sort completed:')
log(mergeSort(arr));

// Inner splitting
// [9, 3, 0, 7, 1, 5, 2, 4, 8, 6]
// [ 9, 3, 0, 7, 1 ] [ 5, 2, 4, 8, 6 ]
// [ 9, 3 ] [ 0, 7, 1 ] [ 5, 2 ] [ 4, 8, 6 ]
// [ 9 ] [ 3 ] [ 0 ] [ 7, 1 ] [ 5 ] [ 2 ] [ 4 ] [ 8, 6 ]
// [ 9 ] [ 3 ] [ 0 ] [ 7 ] [ 1 ] [ 5 ] [ 2 ] [ 4 ] [ 8 ] [ 6 ]
// Inner merging
// [ 3, 9 ] [0] [ 1, 7 ] [ 2, 5 ] [ 4 ] [ 8, 6 ]
// [ 3, 9 ] [ 0, 1, 7 ] [ 2, 5 ] [ 4, 6, 8 ]
// [ 0, 1, 3, 7, 9 ] [ 2, 4, 5, 6, 8 ]
// [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
