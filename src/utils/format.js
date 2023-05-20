export function format(data) {
  const obj = {};
  for (let i = 0; i < data.length; i++) {
    const item = data[i];

    for (const key in item) {
      if (!obj[key]) {
        obj[key] = [];
      }

      obj[key].push(
        typeof item[key] === "number" ? parseInt(item[key]) : item[key]
      );
    }
  }

  console.log(obj);

  return obj;
}
