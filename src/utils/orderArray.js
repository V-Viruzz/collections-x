function orderArray ({ arr, index, newPos }) {
  const element = arr.splice(index, 1)[0]
  arr.splice(newPos, 0, element)

  console.log(arr)
  return arr
}

export default orderArray
