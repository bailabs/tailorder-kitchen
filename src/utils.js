export function groupByProperty(arr, property) {
  return arr.reduce(function(obj, item) {
    const key = item[property];
    if (!obj.hasOwnProperty(key)) {
      obj[key] = [];
    }
    obj[key].push(item);
    return obj;
  }, {});
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