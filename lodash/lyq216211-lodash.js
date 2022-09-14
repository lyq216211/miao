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
      if (f(item)) {
        return i
      }
    }
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

  flattenDeep: function (array) {
    return array.reduce((result, item) => {
      return Array.isArray(item)
        ? result.concat(flattenDeep(item))
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
      start = array.length - fromIndex
    }

    for (let i = start; i < array.length; i++) {
      if (array[i] === value) {
        return i
      }
    }
  },


}
