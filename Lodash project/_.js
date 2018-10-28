const _ = {
  
  // This method clamps number within the inclusive lower and upper bounds.
  clamp(number, lower, upper) {
    var lowerClampedValue = Math.max(number, lower);
    var clampedValue = Math.min(lowerClampedValue, upper);
    return clampedValue;
  },
  
  
 // This method checks if n is between start and up to, but not including, end. If end is not specified, it's set to start with start then set to 0. If start is greater than end the params are swapped to support negative ranges.
	inRange(number, start, end) {
    if (end === null || end === undefined) {
       end = start;
       start = 0;
    }
    
    if (start > end) {
      temp = start;
      start = end;
      end = temp; 
    }
    
    var isInRange = false;
    
    if (start <= number && number < end) {
        isInRange = true;
    } 
    
    return isInRange;
  },
  
  
  // This method splits string into an array of its words.
  words(string) {
    let words = string.split(' ');
    return words;
  },
  
  
  // This method pads string on the left and right sides if it's shorter than length. Padding characters are truncated if they can't be evenly divided by length. 
  pad(string, length) {
    if (length <= string.length) {
      return string;
    } else {
      var startPaddingLength = Math.floor((length - string.length) / 2);
      var endPaddingLength = (length - string.length - startPaddingLength);

      var paddedString = (' '.repeat(startPaddingLength) + string + 
                        ' '.repeat(endPaddingLength)); 
    
      return paddedString;
    }
  },
  
  
  // This method checks if path is a direct property of object.
  has(object, key) {
    if (!object.hasOwnProperty(key)) { 
      let hasValue = false;
      return hasValue;
    } else {
      let hasValue = true;
      return hasValue;
    }
  },
  
  
  // This method creates an object composed of the inverted keys and values of object. If object contains duplicate values, subsequent values overwrite property assignments of previous values.
  invert(object) {
    var invertedObject = {};
    for (var key in object) {
      var originalValue = object[key];
     // invertedObject[object[key]] = key; 
      invertedObject[originalValue] = key;
    }  
    return invertedObject;
  },
  
  
  // This method is like _.find except that it returns the key of the first element predicate returns truthy for instead of the element itself. 
  findKey(object, predicate) {
    for (var key in object) {
      var value = object[key];
      var predicateReturnValue = predicate(value);
      if (predicateReturnValue === true) {
          return key;
      } 
    }
    if (predicateReturnValue !== true)
      return undefined;
  },
  
  
  // This method creates a slice of array with n elements dropped from the beginning.
  drop (array, n) {
    if (n === 0 || n === undefined || n === null) {
       n = 1;
    }
    var droppedArray = array.slice(n);
    return droppedArray;   
  },
  

  // This method creates a slice of array excluding elements dropped from the beginning. Elements are dropped until predicate returns falsey. The predicate is invoked with three arguments: (value, index, array).
  dropWhile(array, predicate) {
    for  (let i = 0; i < array.length; i++) {
      let dropNumber = array[i];
      let result = predicate(dropNumber, i);
      if (result === true) {
        array.shift();
      } else {
        let i = array.length + 1;
      }
    }
    return array;
  },


  // This method creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.
  chunk(array, size) {
    if (size === 0 || size === undefined || size === null) {
      size = 1;
    }
    
    let arrayChunks = [];
    let loopControl = 0;
    
    while (loopControl < array.length) {
      let arrayChunk = array.slice(loopControl, loopControl + size);
      arrayChunks.push(arrayChunk);
      loopControl += size;

    }; 
      
    return arrayChunks; 
  }

};  


// Do not write or modify code below this line.
module.exports = _;