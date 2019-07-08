export function getLinesByTime(lines) {
  const obj = {}
  obj[Date.now()] = lines;
  return obj;
}

export function getLocaleTimeString(timestamp) {
  const date = new Date(parseInt(timestamp));
  return date.toLocaleTimeString();
}

export function filterByObject(arr, object) {
  return arr.filter(item => {
    for (let property in object) {
      if (object[property] !== item[property])
        return false;  
    }
    return true;
  });
}