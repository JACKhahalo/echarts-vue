export function format(data) {
  console.log(data);
  const obj = {};
  for (let i = 0; i < data.length; i++) {
    const item = data[i];
    for (const key in item) {
      if (
        !item.touru &&
        !item.huishou &&
        !item.paifang &&
        !item.type &&
        !item.co_discharge
      ) {
        continue;
      }

      if (!obj[key]) {
        obj[key] = [];
      }

      obj[key].push(
        typeof item[key] === "number" ? parseInt(item[key]) : item[key]
      );
    }
  }

  return obj;
}
