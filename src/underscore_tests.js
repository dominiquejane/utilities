/*jshint eqnull:true, expr:true*/

var _ = { };

(function() {

  /**
   * COLLECTIONS
   * ===========
   *
   * In this section, we'll have a look at functions that operate on collections
   * of values; in JavaScript, a 'collection' is something that can contain a
   * number of values--either an array or an object.
   */

  // Return an array of the first n elements of an array. If n is undefined,
  // return just the first element.
  _.first = function(array, n) {
    var narr = [];
    if (n === undefined) { //if n is undefined, return first element.
      return array[0];
    }
    else {
      if (n > array.length) { //if n is greater than array length, change n to equal array length
      n = array.length;
    }
      for (var i = 0; i < n; i++ ) { //push each object up to n objects into an empty array and then return the array
        narr.push(array[i]);
      }
    return narr;

    }
  };

  // Like first, but for the last elements. If n is undefined, return just the
  // last element.
  _.last = function(array, n) {
    var narr = [];
    if (n === undefined) { //if n is undefined return the last element
      return array[array.length-1];
    }
    else if( n === 0 ) { //if n equals zero return an empty array, narr (curently empty at this point in the function)
      return narr;
    }
    else {
      if (n > array.length) { //if n is greater than or equal to the array length change it to equal the array length so that it doesn't grab undefined values in the below code
      n = array.length;
    }
      for (var i = array.length-1; i >(array.length - 1 -n); i-- ) { //start the loop from the end of the array. Limit i so that it only goes n elements down the array.
        narr.unshift(array[i]);//insert elements into the beginning of the array so that the order of elements is in the same order that they were in the original array
      }
    return narr;

    }
  };

  // Call iterator(value, key, collection) for each element of collection.
  // Accepts both arrays and objects.
  _.each = function(collection, iterator) {
    for (var key in collection) {
      iterator(collection[key], key, collection);
    }
  };

  // Returns the index at which value can be found in the array, or -1 if value
  // is not present in the array.
  _.indexOf = function(array, target){
    var isThere = false;
    var x;
    for (var i = 0; i < array.length; i++) {
      if (array[i] === target) {
        isThere = true;
        x = i;
        break;
      }
    }
    if (isThere) {
      return x;
    }
    else {
      return -1;
    }
  };

  // Return all elements of an array that pass a truth test.
  _.filter = function(collection, iterator) {
    var pass = [];
    var it;
    for (var i = 0; i < collection.length; i++) {
      it = iterator(collection[i]);
      if (it === true) {
        pass.push(collection[i]);
      }
    }
    return pass;
  };


  // Return all elements of an array that don't pass a truth test.
  _.reject = function(collection, iterator) {
    var rej = [];
    var it;
    for (var i = 0; i < collection.length; i++) {
      it = iterator(collection[i]);
      if (it === false) {
        rej.push(collection[i]);
      }
    }
    return rej;
  };

  // Produce a duplicate-free version of the array.
  _.uniq = function(array) {
  };


  // Return the results of applying an iterator to each element.
  _.map = function(array, iterator) {
  };

  // Takes an array of objects and returns and array of the values of
  // a certain property in it. E.g. take an array of people and return
  // an array of just their ages
  _.pluck = function(array, propertyName) {
  };

  // Calls the method named by methodName on each value in the list.
  _.invoke = function(list, methodName, args) {
  };

  // Reduces an array or object to a single value by repetitively calling
  // iterator(previousValue, item) for each item. previousValue should be
  // the return value of the previous iterator call.
  _.reduce = function(collection, iterator, initialValue) {
  };

  // Determine if the array or object contains a given value (using `===`).
  _.contains = function(collection, target) {
  };


  // Determine whether all of the elements match a truth test.
  _.every = function(collection, iterator) {
  };

  // Determine whether any of the elements pass a truth test. If no iterator is
  // provided, provide a default one
  _.some = function(collection, iterator) {
  };


  /**
   * OBJECTS
   * =======
   *
   * In this section, we'll look at a couple of helpers for merging objects.
   */

  // Extend a given object with all the properties of the passed in
  // object(s).
  _.extend = function(obj) {
  };

  // Like extend, but doesn't ever overwrite a key that already
  // exists in obj
  _.defaults = function(obj) {
  };


  /**
   * FUNCTIONS
   * =========
   */

  // Return a function that can be called at most one time. Subsequent calls
  // should return the previously returned value.
  _.once = function(func) {
  };

  // Memoize an expensive function by storing its results. You may assume
  // that the function takes only one argument and that it is a primitive.
  //
  // Memoize should return a function that when called, will check if it has
  // already computed the result for the given argument and return that value
  // instead if possible.
  _.memoize = function(func) {
  };

  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  //
  // The arguments for the original function are passed after the wait
  // parameter. For example _.delay(someFunction, 500, 'a', 'b') will
  // call someFunction('a', 'b') after 500ms
  _.delay = function(func, wait) {
  };



  // Shuffle an array.
  _.shuffle = function(array) {
  };

  // Sort the object's values by a criterion produced by an iterator.
  // If iterator is a string, sort objects by that property with the name
  // of that string. For example, _.sortBy(people, 'name') should sort
  // an array of people by their name.
  _.sortBy = function(collection, iterator) {
  };

  // Zip together two or more arrays with elements of the same index
  // going together.
  //
  // Example:
  // _.zip(['a','b','c','d'], [1,2,3]) returns [['a',1], ['b',2], ['c',3], ['d',undefined]]
  _.zip = function() {
  };

  // Takes a multidimensional array and converts it to a one-dimensional array.
  // The new array should contain all elements of the multidimensional array.
  _.flatten = function(nestedArray, result) {
  };

  // Takes an arbitrary number of arrays and produces an array that contains
  // every item shared between all the passed-in arrays.
  _.intersection = function() {
  };

  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  _.difference = function(array) {
  };

}).call(this);
