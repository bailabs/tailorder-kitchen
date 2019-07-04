export function getLinesByTime(lines) {
  const obj = {}
  obj[Date.now()] = lines;
  return obj;
}

export function getLocaleTimeString(timestamp) {
  const date = new Date(parseInt(timestamp));
  return date.toLocaleTimeString();
}