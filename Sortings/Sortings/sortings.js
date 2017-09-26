function bubbleSort(arr){
  var changePlace = arr.length-1;
  for (var i = 0; i < arr.length-1; i++){
    var change = false;
    var to = changePlace;
    for (var j = 0; j < to; j++){
        if(arr[j] > arr[j+1]){
          arr[j] = arr.splice(j+1, 1, arr[j])[0];
          changePlace = j;
          change = true;
        }
    }
    if(!change) break;
  }
}

function coctailSort(arr){
  var left = 0;
  var right = arr.length-1;
  var lastPosition = 0;
  while (right > left){
    for(var i = left; i < right; i++){
      if(arr[i] > arr[i+1]){
        arr[i] = arr.splice(i+1, 1, arr[i])[0];
        lastPosition = i;
      }
    }
    right = lastPosition;
    for(var i = right; i > left; i-=1){
      if(arr[i] < arr[i-1]){
        arr[i] = arr.splice(i-1, 1, arr[i])[0];
        lastPosition = i;
      }
    }
    left = lastPosition;
  }
}

function insertionSort(arr){
  for(var i = 0; i < arr.length-1; i++){
    var j = i;
    while(arr[j] > arr[j+1] & j >= 0){
      arr[j] = arr.splice(j+1, 1, arr[j])[0];
      j-=1;
    }
  }
}

function gnomeSort(arr){
  var i = 0;
  var selection = 0;
  while(i < arr.length){
     if(arr[i]  > arr[i+1]){
       arr[i] = arr.splice(i+1, 1, arr[i])[0];
       if(i > 0) i-=1;
     }
     else{
       selection++;
       i = selection;
     }
  }
}

function mergeSort(arr){
  var left = [];
  var right = [];
  left = arr.slice(0, arr.length/2);
  right = arr.slice(arr.length/2 , arr.length);

  if(left.length != 1)
    mergeSort(left);
  if(right.length != 1)
    mergeSort(right);

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
}
