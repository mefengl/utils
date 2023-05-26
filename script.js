function duplicateArrayItems(arr, n) {
  return arr.flatMap(item => Array(n).fill({ ...item }));
}
