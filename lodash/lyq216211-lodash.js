var lyq216211 = {
  chunk: function (array, number) {
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
}
