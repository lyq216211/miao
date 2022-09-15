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

  findIndex: function (array, f, fromIndex = 0) {
    for (let i = fromIndex; i < array.length; i++) {
      let item = array[i]
      if (lyq216211.checkPredicate(f)(item)) {
        return i
      }
    }
    return -1
  },

  findLastIndex: function () {

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

  lastIndexOf: function (array, value, fromIndex = arr.length - 1) {
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
  }

}
