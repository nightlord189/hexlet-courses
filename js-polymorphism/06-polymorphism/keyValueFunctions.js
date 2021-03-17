// @ts-check

// BEGIN (write your solution here)
const swapKeyValue = (db) => {
  const obj = db.toObject();
  const keys = Object.keys(obj);
  for (let key of keys) {
    db.unset(key);
  }
  console.log(obj);
  for (let key of keys) {
    const value = obj[key];
    db.set(value, key);
  }
}

export default swapKeyValue;
// END
