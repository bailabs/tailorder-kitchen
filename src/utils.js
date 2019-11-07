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

export function groupByRows(arr, columns) {
  /**
   * Group arrays by rows
   * @param {number} arr  Array of objects that needs to be grouped
   * @param {number} columns Max columns per rows
   */
  let current = 0;
  const rowsObject = arr.reduce((grouped, item) => {
    if (!grouped[current]) { grouped[current] = []; }
    grouped[current].push(item);
    if (grouped[current].length === columns) { current++; }
    return grouped
  }, {})
  return Object.values(rowsObject);
}