const tools = require('./sortings');

exports.timSort = function timSort(arr){
  var minrun = arr.length;
  var b = 0;
  
  while(minrun >= 64 ){
    b |= minrun & 1;
    minrun >>= 1;
  }
  minrun = minrun + b;
  var j = 0;
  var arrayMap = [[]];
  var arrSizes = [];
  for (var i = 0; i< arr.length; i ++){
    if(arr[i] > arr[i+1]){
      arrayMap[j].push(arr[i+1]);
      arrayMap[j].push(arr[i]);
      i+=2;
      arrayMap[j] = arrayMap[j].concat(arr.slice(i , minrun+i));
      i+= minrun;
      tools.insertionSort(arrayMap[j]);
      arrSizes.push(parseInt([arrayMap[j].length]));

      if( i < arr.length){
        arrayMap.push([]);
        j++;
      }
    }
    else {
      arrayMap[j].push(arr[i]);
    }
  }
  while(arrSizes.length > 1){
  for (var j = 0; j < arrSizes.length-2;){
    if(arrSizes[j] <= arrSizes[j+1] + arrSizes[j+2]) {
      if(arrSizes[j] > arrSizes[j+2]) {
        arrayMap[j+1] = merge(arrayMap[j+2], arrayMap[j+1]);
        arrSizes[j+1] += arrSizes[j+2];
        arrayMap.splice(j+2, 1);
        arrSizes.splice(j+2, 1);
      }
      else{
        arrayMap[j+1] = merge(arrayMap[j], arrayMap[j+1]);
        arrSizes[j+1] += arrSizes[j];
        arrayMap.splice(j, 1);
        arrSizes.splice(j, 1);
      }
    }
    else j++;
  }
  if(arrSizes.length == 2){
    arr = merge(arrayMap[0],arrayMap[1]);
    return;
  }
}
  function merge(left, right){
    var arr = [];
    var i = 0;
    var j = 0;
    while (i < left.length || j < right.length){
      if( i < left.length && j < right.length){
        if(left[i] < right[j]) {
          arr[i+j] = left[i];
          i++;
        }
        else {
          arr[i+j] = right[j];
          j++;
        }
      }
      else{
        if( i < left.length){
          arr[i+j] = left[i];
          i++;
        }
        else {
          arr[i+j] = right[j];
          j++;
        }
      }
    }
    return arr;
  }
}
