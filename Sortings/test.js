const basicSorts = require('./sortings');
const bTree = require('./binaryTree');
const timSort = require('./timSort');

var arr =[];
var n = 10000;

for (var i = 0; i < n; i++){
  arr.push(Math.floor(Math.random() *900 + 100));
}

console.time('bubbleSort') ;
basicSorts.bubbleSort(arr);
console.timeEnd('bubbleSort');

arr =[];

for (var i = 0; i < n; i++){
  arr.push(Math.floor(Math.random() *900 + 100));
}

console.time('cocktailSort') ;
basicSorts.cocktailSort(arr);
console.timeEnd('cocktailSort');

arr =[];

for (var i = 0; i < n; i++){
  arr.push(Math.floor(Math.random() *900 + 100));
}

console.time('insertionSort');
basicSorts.insertionSort(arr);
console.timeEnd('insertionSort');

arr =[];

for (var i = 0; i < n; i++){
  arr.push(Math.floor(Math.random() *900 + 100));
}

console.time('gnomeSort');
basicSorts.gnomeSort(arr);
console.timeEnd('gnomeSort');

arr =[];

for (var i = 0; i < n; i++){
  arr.push(Math.floor(Math.random() *900 + 100));
}

console.time('mergeSort');
basicSorts.mergeSort(arr);
console.timeEnd('mergeSort');

arr =[];

for (var i = 0; i < n; i++){
  arr.push(Math.floor(Math.random() *900 + 100));
}

console.time('bTreeSort');
bTree.bTreeSort(arr);
console.timeEnd('bTreeSort');

arr =[];

for (var i = 0; i < n; i++){
  arr.push(Math.floor(Math.random() *900 + 100));
}

console.time('timSort');
timSort.timSort(arr);
console.timeEnd('timSort');
