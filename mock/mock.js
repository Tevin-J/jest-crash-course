function map(arr, callback) {
  const result = [];
  for (const i of arr) {
    result.push(callback(i));
  }
  return result;
}
module.exports = { map };
