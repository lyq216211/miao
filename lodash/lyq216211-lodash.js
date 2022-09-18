var lyq216211 = {
  chunk: function (array, number = 1) {
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
  },

  compact: function (arr) {
    let result = []
    for (let item of arr) {
      if (item) {
        result.push(item)
      }
    }
    return result
  },

  difference: function (arr, ...values) {
    let result = []
    values = values.flat()
    for (let i = 0; i < arr.length; i++) {
      if (!(values.includes(arr[i]))) {
        result.push(arr[i])
      }
    }
    return result
  },

  drop: function (arr, number = 1) {
    return arr.slice(number)
  },

  fill: function (array, value, start = 0, end = array.length) {
    for (let i = start; i < end; i++) {
      array[i] = value
    }
    return array
  },

  findIndex: function (array, predicate, fromIndex = 0) {
    for (let i = fromIndex; i < array.length; i++) {
      let item = array[i]
      if (lyq216211.checkPredicate(predicate)(item)) {
        return i
      }
    }
    return -1
  },

  findLastIndex: function (array, predicate, fromIndex = array.length - 1) {
    for (let i = fromIndex; i >= 0; i--) {
      let item = array[i]
      if (lyq216211.checkPredicate(predicate)(item)) {
        return i
      }
    }
    return -1
  },
  flatten: function (array) {
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
  },

  flattenDeep: function f(array) {
    return array.reduce((result, item) => {
      return Array.isArray(item)
        ? result.concat(f(item))
        : result.concat(item);
    }, []);
  },

  flattenDepth: function (array, depth = 1) {
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
  },

  fromPairs: function (array) {
    let map = {}
    for (let i = 0; i < array.length; i++) {
      let [key, val] = array[i]
      map[key] = val
    }

    return map
  },

  head: function (array) {
    return array[0]
  },

  indexOf: function (array, value, fromIndex = 0) {
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
  },

  lastIndexOf: function (array, value, fromIndex = array.length - 1) {
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
  },

  initial: function (array) {
    let n = array.length
    return array.slice(0, n - 1)
  },

  join: function (arr, separator) {
    let str = ''
    for (let i = 0; i < arr.length; i++) {
      str += arr[i]
      if (i < arr.length - 1) {
        str += separator
      }
    }
    return str
  },

  last: (arr) => arr[arr.length - 1],

  pull: function (arr, ...value) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
      let item = arr[i]
      if (!value.includes(item)) {
        result.push(item)
      }
    }
    return arr = [...result]
  },

  reverse: function (arr) {
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
  },

  checkPredicate: function (predicate) {
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
  },
  every: function (users, predicate) {
    for (let i = 0; i < users.length; i++) {
      let item = users[i]
      if (!(lyq216211.checkPredicate(predicate)(item))) {
        return false
      }
    }
    return true
  },

  some: function (users, predicate) {
    for (let i = 0; i < users.length; i++) {
      let item = users[i]
      if (lyq216211.checkPredicate(predicate)(item)) {
        return true
      }
    }
    return false
  },

  countBy: function (collection, iteratee) {
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
  },

  groupBy: function (collection, iteratee) {
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
  },

  keyBy: function (collection, iteratee) {
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
  },

  forEach: function (collection, iteratee) {
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
  },

  map: function (collection, iteratee) {
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
  },

  filter: function (arr, iteratee) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
      let item = arr[i]
      if (lyq216211.checkPredicate(iteratee)(item)) {
        result.push(item)
      }
    }

    return result
  },

  reduce: function (collection, iteratee, accumulator) {
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
  },

  reduceRight: function (collection, iteratee, accumulator) {
    let n = collection.length
    for (let i = n - 1; i >= 0; i--) {
      accumulator = iteratee(accumulator, collection[i], i, collection)
    }

    return accumulator
  },

  size: function (collection) {
    if (typeof (collection) === 'string') {
      return collection.length
    } else if (typeof (collection) === 'object') {
      if (Array.isArray(collection)) {
        return collection.length
      } else {
        return Object.getOwnPropertyNames(collection).length
      }
    }
  },

  sortBy: function (collection, iteratee) {

  },

  sample: function (collection) {
    let n = collection.length
    let index = Math.trunc(Math.random() * n)
    return collection[index]
  },

  isUndefined: function (value) {
    return value === undefined
  },

  isNull: function (value) {
    return value === null
  },

  isNil: function (value) {
    return value == null
  },

  max: function (arr) {
    if (arr.length === 0) return
    return arr.reduce((maxItem, item) => item > maxItem ? item : maxItem, -Infinity)
  },

  min: function (arr) {
    if (arr.length === 0) return
    return arr.reduce((minItem, item) => item < minItem ? item : minItem, Infinity)
  },

  maxBy: function (arr, iteratee) {
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
  },

  minBy: function (arr, iteratee) {
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
  },

  round: function (number, precision) {

  },

  sumBy: function (arr, iteratee) {
    if (typeof (iteratee) === 'string') {
      var f = (item) => item[iteratee]
    } else if (typeof (iteratee) === 'function') {
      var f = iteratee
    }

    return arr.map(f).reduce((a, b) => a + b, 0)
  },

  sum: function (arr) {
    return arr.reduce((a, b) => a + b, 0)
  },

  flatMap: function (collection, iteratee) {
    let result = collection.map(iteratee)
    return lyq216211.flatten(result)
  },

  flatMapDepth: function (collection, iteratee, depth = 1) {
    let result = collection.map(iteratee)
    return lyq216211.flattenDepth(result, depth)
  },

  get: function (obj, path, defaultValue) {
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
  },

  has: function (obj, path) {
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
  },

  mapKeys: function (obj, iteratee) {
    let map = {}
    for (let key in obj) {
      let value = obj[key]
      let resultKey = iteratee(value, key, obj)
      map[resultKey] = value
    }

    return map
  },

  mapValues: function (obj, iteratee) {
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
  },

  range: function (start = 0, end, step = 1) {
    if (start === end) {
      return []
    }
    if (end == undefined) {
      end = start
      start = 0
    }
    if (end < 0) {
      step = -step
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
  },

  concat: function (array, ...values) {
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
  },

  isEqual: function isEuqal (value, other) {
    if (typeof (value) === 'object') {
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
  },
}
