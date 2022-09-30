var lyq216211 = function () {


  function checkPredicate(predicate) {
    if (typeof (predicate) === 'function') {
      return predicate
    } else if (typeof (predicate) === 'object') {
      if (Array.isArray(predicate)) {
        return function (person) {
          let [key, val] = predicate
          return person[key] === val
        }
      } else {
        return function (person) {
          for (let key in predicate) {
            if (person[key] !== predicate[key]) {
              return false
            }
          }
          return true
        }
      }
    } else if (typeof (predicate) === 'string') {
      return function (person) {
        let key = predicate
        return person[key]
      }
    }
  }


  function chunk(array, number = 1) {
    let result = []
    let start = 0
    let end = start + number

    while (start < array.length) {
      if (end < array.length) {
        result.push(array.slice(start, end))
      } else {
        result.push(array.slice(start))
      }
      start += number
      end += number
    }

    return result
  }

  function compact(arr) {
    let result = []
    for (let item of arr) {
      if (item) {
        result.push(item)
      }
    }
    return result
  }

  function difference(arr, ...values) {
    let result = []
    values = values.flat()
    for (let i = 0; i < arr.length; i++) {
      if (!(values.includes(arr[i]))) {
        result.push(arr[i])
      }
    }
    return result
  }

  function drop(arr, number = 1) {
    return arr.slice(number)
  }

  function fill(array, value, start = 0, end = array.length) {
    for (let i = start; i < end; i++) {
      array[i] = value
    }
    return array
  }

  function findIndex(array, predicate, fromIndex = 0) {
    for (let i = fromIndex; i < array.length; i++) {
      let item = array[i]
      if (checkPredicate(predicate)(item)) {
        return i
      }
    }
    return -1
  }

  function findLastIndex(array, predicate, fromIndex = array.length - 1) {
    for (let i = fromIndex; i >= 0; i--) {
      let item = array[i]
      if (checkPredicate(predicate)(item)) {
        return i
      }
    }
    return -1
  }
  function flatten(array) {
    let result = []
    for (let i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        for (let j = 0; j < array[i].length; j++) {
          result.push(array[i][j])
        }
      } else {
        result.push(array[i])
      }
    }

    return result
  }

  function flattenDeep(array) {
    return array.reduce((result, item) => {
      return Array.isArray(item)
        ? result.concat(f(item))
        : result.concat(item);
    }, []);
  }

  function flattenDepth(array, depth = 1) {
    function flattenDep(array, depth = 1) {
      if (depth === 0) {
        return array
      }
      let result = []
      for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
          let flat = flattenDep(array[i], depth - 1)
          for (let j = 0; j < flat.length; j++) {
            result.push(flat[j])
          }
        } else {
          result.push(array[i])
        }
      }

      return result
    }
    return flattenDep(array, depth)
  }

  function fromPairs(array) {
    let map = {}
    for (let i = 0; i < array.length; i++) {
      let [key, val] = array[i]
      map[key] = val
    }

    return map
  }

  function head(array) {
    return array[0]
  }

  function indexOf(array, value, fromIndex = 0) {
    let start
    if (fromIndex >= 0) {
      start = fromIndex
    } else {
      start = array.length + fromIndex
    }

    for (let i = start; i < array.length; i++) {
      if (array[i] === value) {
        return i
      }
    }
  }

  function lastIndexOf(array, value, fromIndex = array.length - 1) {
    let start
    if (fromIndex >= 0) {
      start = fromIndex
    } else {
      start = array.length + fromIndex
    }

    for (let i = start; i >= 0; i--) {
      if (array[i] === value) {
        return i
      }
    }
    return -1
  }

  function initial(array) {
    let n = array.length
    return array.slice(0, n - 1)
  }

  function join(arr, separator) {
    let str = ''
    for (let i = 0; i < arr.length; i++) {
      str += arr[i]
      if (i < arr.length - 1) {
        str += separator
      }
    }
    return str
  }

  function last(arr) {
    arr[arr.length - 1]
  }

  function pull(arr, ...value) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
      let item = arr[i]
      if (!value.includes(item)) {
        result.push(item)
      }
    }
    return arr = [...result]
  }

  function reverse(arr) {
    let i = 0
    let j = arr.length - 1
    while (i < j) {
      let temp = arr[j]
      arr[j] = arr[i]
      arr[i] = temp
      i++
      j--
    }
    return arr
  }


  function every(users, predicate) {
    for (let i = 0; i < users.length; i++) {
      let item = users[i]
      if (!(checkPredicate(predicate)(item))) {
        return false
      }
    }
    return true
  }

  function some(users, predicate) {
    for (let i = 0; i < users.length; i++) {
      let item = users[i]
      if (checkPredicate(predicate)(item)) {
        return true
      }
    }
    return false
  }

  function countBy(collection, iteratee) {
    let map = {}

    if (typeof (iteratee) === 'string') {
      var f = (item) => item[iteratee]
    } else if (typeof (iteratee) === 'function') {
      var f = iteratee
    }

    for (let i = 0; i < collection.length; i++) {
      let key = f(collection[i])
      if (!(key in map)) {
        map[key] = 0
      }
      map[key]++
    }

    return map
  }

  function groupBy(collection, iteratee) {
    let map = {}

    if (typeof (iteratee) === 'string') {
      var f = (item) => item[iteratee]
    } else if (typeof (iteratee) === 'function') {
      var f = iteratee
    }

    for (let i = 0; i < collection.length; i++) {
      let item = collection[i]
      let key = f(item)
      if (key in map) {
        map[key].push(item)
      } else {
        map[key] = [item]
      }
    }

    return map
  }

  function keyBy(collection, iteratee) {
    let map = {}

    if (typeof (iteratee) === 'string') {
      var f = (item) => item[iteratee]
    } else if (typeof (iteratee) === 'function') {
      var f = iteratee
    }

    for (let i = 0; i < collection.length; i++) {
      let item = collection[i]
      let key = f(item)
      map[key] = item
    }

    return map
  }

  function forEach(collection, iteratee) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        let item = collection[i]
        iteratee(item, i, collection)
      }
    } else {
      for (let key in collection) {
        let value = collection[key]
        iteratee(value, key)
      }
    }

    return collection
  }

  function map(collection, iteratee) {
    let result = []

    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        let item = collection[i]

        if (typeof (iteratee) === 'string') {
          let arr = iteratee.split('.')
          for (let i = 0; i < arr.length; i++) {
            item = item[arr[i]]
          }
          result.push(item)
        } else if (typeof (iteratee) === 'function') {
          result.push(iteratee(item, i, collection))
        }
      }
    } else {
      for (let key in collection) {
        let value = collection[key]
        if (typeof (iteratee) === 'string') {
          result.push(value[iteratee])
        } else if (typeof (iteratee) === 'function') {
          result.push(iteratee(value, key))
        }
      }
    }

    return result
  }

  function filter(arr, iteratee) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
      let item = arr[i]
      if (checkPredicate(iteratee)(item)) {
        result.push(item)
      }
    }

    return result
  }

  function reduce(collection, iteratee, accumulator) {
    let start = 0
    if (accumulator == undefined) {
      accumulator = collection[0]
      start = 1
    }

    if (Array.isArray(collection)) {
      for (let i = start; i < collection.length; i++) {
        accumulator = iteratee(accumulator, collection[i], i, collection)
      }
    } else {
      for (let key in collection) {
        accumulator = iteratee(accumulator, collection[key], key)
      }
    }
    return accumulator
  }

  function reduceRight(collection, iteratee, accumulator) {
    let n = collection.length
    for (let i = n - 1; i >= 0; i--) {
      accumulator = iteratee(accumulator, collection[i], i, collection)
    }

    return accumulator
  }

  function size(collection) {
    if (typeof (collection) === 'string') {
      return collection.length
    } else if (typeof (collection) === 'object') {
      if (Array.isArray(collection)) {
        return collection.length
      } else {
        return Object.getOwnPropertyNames(collection).length
      }
    }
  }

  function sortBy(arr, iteratee) {
    if (typeof (iteratee[0]) === 'function') {
      return arr.sort((a, b) => iteratee[0](a) - iteratee[0](b))
    }
    if (typeof (iteratee[0] === 'string')) {
      return arr.sort((a, b) => {
        for (let i = 0; i < iteratee.length; i++) {
          let item = iteratee[i]
          if (a[item] !== b[item]) {
            return a[item] - b[item]
          }
        }
      })
    }
  }

  function sample(collection) {
    let n = collection.length
    let index = Math.trunc(Math.random() * n)
    return collection[index]
  }

  function isUndefined(value) {
    return value === undefined
  }

  function isNull(value) {
    return value === null
  }

  function isNil(value) {
    return value == null
  }

  function max(arr) {
    if (arr.length === 0) return
    return arr.reduce((maxItem, item) => item > maxItem ? item : maxItem, -Infinity)
  }

  function min(arr) {
    if (arr.length === 0) return
    return arr.reduce((minItem, item) => item < minItem ? item : minItem, Infinity)
  }

  function maxBy(arr, iteratee) {
    if (typeof (iteratee) === 'string') {
      var f = (item) => item[iteratee]
    } else if (typeof (iteratee) === 'function') {
      var f = iteratee
    }
    let maxItem = -Infinity
    let maxIndex = 0
    for (let i = 0; i < arr.length; i++) {
      if (f(arr[i]) > maxItem) {
        maxItem = f(arr[i])
        maxIndex = i
      }
    }

    return arr[maxIndex]
  }

  function minBy(arr, iteratee) {
    if (typeof (iteratee) === 'string') {
      var f = (item) => item[iteratee]
    } else if (typeof (iteratee) === 'function') {
      var f = iteratee
    }
    let minItem = Infinity
    let minIndex = 0
    for (let i = 0; i < arr.length; i++) {
      if (f(arr[i]) < minItem) {
        minItem = f(arr[i])
        minIndex = i
      }
    }

    return arr[minIndex]
  }

  function round(number, precision) {

  }

  function sumBy(arr, iteratee) {
    if (typeof (iteratee) === 'string') {
      var f = (item) => item[iteratee]
    } else if (typeof (iteratee) === 'function') {
      var f = iteratee
    }

    return arr.map(f).reduce((a, b) => a + b, 0)
  }

  function sum(arr) {
    return arr.reduce((a, b) => a + b, 0)
  }

  function flatMap(collection, iteratee) {
    let result = collection.map(iteratee)
    return flatten(result)
  }

  function flatMapDepth(collection, iteratee, depth = 1) {
    let result = collection.map(iteratee)
    return flattenDepth(result, depth)
  }

  function get(obj, path, defaultValue) {
    let result = obj

    if (typeof (path) === 'string') {
      path = path.split('').filter(item => item !== '[' && item !== ']' && item !== '.')
    }

    for (let item of path) {
      if (result[item]) {
        result = result[item]
      } else {
        return defaultValue
      }
    }

    return result
  }

  function has(obj, path) {
    if (Object.keys(obj).length === 0) return false
    let result = obj

    if (typeof (path) === 'string') {
      path = path.split('').filter(item => item !== '[' && item !== ']' && item !== '.')
    }

    for (let item of path) {
      if (result[item]) {
        result = result[item]
      } else {
        return false
      }
    }

    return true
  }

  function mapKeys(obj, iteratee) {
    let map = {}
    for (let key in obj) {
      let value = obj[key]
      let resultKey = iteratee(value, key, obj)
      map[resultKey] = value
    }

    return map
  }

  function mapValues(obj, iteratee) {
    let map = {}
    for (let key in obj) {
      let value = obj[key]
      if (typeof (iteratee) === 'function') {
        resultValue = iteratee(value)
      } else if (typeof (iteratee) === 'string') {
        resultValue = value[iteratee]
      }
      map[key] = resultValue
    }

    return map
  }

  function range(start = 0, end, step = 1) {
    if (start === end) {
      return []
    }
    if (end == undefined) {
      end = start
      start = 0
    }
    if (end < 0) {
      step = -1
    }
    let result = []
    for (let i = start; Math.abs(i) < Math.abs(end); i += step) {
      result.push(i)
      if (step === 0) {
        if (result.length === Math.abs(end - start)) {
          return result
        }
      }
    }

    return result
  }

  function concat(array, ...values) {
    let result = array
    for (let i = 0; i < values.length; i++) {
      if (Array.isArray(values[i])) {
        for (let j = 0; j < values[i].length; j++) {
          result.push(values[i][j])
        }
      } else {
        result.push(values[i])
      }
    }
    return result
  }

  function isEqual(value, other) {
    if (typeof (value) === 'object' && !Array.isArray(value)) {
      if (Object.keys(value).length === Object.keys(other).length) {
        for (let key in value) {
          if (typeof (value[key]) === 'object') {
            if (!(isEqual(value[key], other[key]))) {
              return false
            }
          }
          if (value[key] !== other[key]) {
            return false
          }
        }
        return true
      } else {
        return false
      }
    } else {
      return JSON.stringify(value) === JSON.stringify(other)
    }
  }

  function repeat(str, n) {
    let result = ''
    for (let i = 0; i < n; i++) {
      result += str
    }

    return result
  }

  function dropRight(arr, n = 1) {
    let index = arr.length - n
    if (index >= 0) {
      return arr.slice(0, index)
    }
    return []
  }

  function dropRightWhile(arr, predicate) {
    // return arr.filter(!checkPredicate(predicate))
    for (let i = arr.length - 1; i >= 0; i--) {
      if (checkPredicate(predicate)(arr[i])) {
        arr.splice(i, 1)
      }
    }
    return arr
  }

  function intersection(...arr) {
    return arr.reduce((accumulator, currItem) => {
      return accumulator.filter(item => currItem.includes(item))
    })
  }

  function sortedIndex(arr, n) {
    return arr.findIndex((item) => item >= n)
  }

  function union(...arr) {
    let result = []
    let combined = new Set(arr.flat(1))
    for (let item of combined) {
      result.push(item)
    }
    return result
  }

  // unionBy: function () {

  // },
  function uniq(...arr) {
    let result = new Set(arr)
    return [...result]
  }

  function uniqBy(arr, iteratee) {
    if (typeof (iteratee) === 'function') {
      var func = iteratee
    } else if (typeof (iteratee) === 'string') {
      var func = (obj) => obj[iteratee]
    }
    let result = []
    let currArr = []

    for (let i = 0; i < arr.length; i++) {
      let item = func(arr[i])
      if (!currArr.includes(item)) {
        result.push(arr[i])
      }
      currArr.push(item)
    }

    return result
  }


  function unzip(arr) {
    let result = []
    let item = []
    for (let i = 0; i < arr[0].length; i++) {
      for (let j = 0; j < arr.length; j++) {
        item.push(arr[j][i])
      }
      result.push(item)
      item = []
    }

    return result
  }

  function without(arr, ...values) {
    return difference(arr, ...values)
  }

  function xor(...arr) {
    let result = []
    let map = new Map()
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        let item = arr[i][j]
        if (map.has(item)) {
          map.set(item, 1)
        } else {
          map.set(item, 0)
        }
      }
    }

    for (let key of map.keys()) {
      if (map.get(key) === 0) {
        result.push(key)
      }
    }
    return result
  }

  function zip(...arr) {
    let result = []
    let currArr = []

    for (let i = 0; i < arr[0].length; i++) {
      for (let j = 0; j < arr.length; j++) {
        let item = arr[j][i]
        currArr.push(item)
      }
      result.push(currArr)
      currArr = []
    }

    return result
  }

  function find(collection, precision, fromIndex = 0) {
    for (let i = fromIndex; i < collection.length; i++) {
      let item = collection[i]
      if (checkPredicate(precision)(item)) {
        return item
      }
    }
  }

  function partition(collection, precision) {
    let result = [[], []]
    for (let i = 0; i < collection.length; i++) {
      let item = collection[i]
      if (checkPredicate(precision)(item)) {
        result[0].push(item)
      } else {
        result[1].push(item)
      }
    }

    return result
  }

  function reject(collection, precision) {
    let result = []
    for (let i = 0; i < collection; i++) {
      let item = collection[i]
      if (!checkPredicate(precision)(item)) {
        result.push(item)
      }
    }

    return result
  }


  function isArray(value) {
    return Object.getPrototypeOf(value) === Array
  }

  function isBoolean(value) {
    return Object.getPrototypeOf(value) === Boolean
  }

  function isDate(value) {
    return Object.getPrototypeOf(value) === Date
  }

  function isElement(value) {
    return value instanceof HTMLElement
  }

  function isError(value) {
    return Object.getPrototypeOf(value) === Error
  }

  function isFunction(value) {
    return Object.getPrototypeOf(value) === Function
  }

  function isMatch(obj, precision) {

  }


  return {
    checkPredicate,
    chunk,
    compact,
    drop,
    fill,
    findIndex,
    findLastIndex,
    flatten,
    flattenDeep,
    flattenDepth,
    fromPairs,
    head,
    indexOf,
    lastIndexOf,
    initial,
    join,
    last,
    pull,
    reverse,
    every,
    some,
    countBy,
    groupBy,
    keyBy,
    forEach,
    map,
    filter,
    reduce,
    reduceRight,
    size,
    sortBy,
    sample,
    isUndefined,
    isNull,
    isNil,
    max,
    min,
    maxBy,
    minBy,
    round,
    sumBy,
    sum,
    flatMap,
    flatMapDepth,
    get,
    has,
    mapKeys,
    mapValues,
    range,
    concat,
    isEqual,
    repeat,
    dropRight,
    dropRightWhile,
    intersection,
    sortedIndex,
    union,
    uniq,
    uniqBy,
    unzip,
    without,
    xor,
    zip,
    find,
    partition,
    reject,
    isArray,
    isBoolean,
    isDate,
    isElement,
    isError,
    isFunction,
    isMatch,
  }
}
