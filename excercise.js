const items = [[11], [11, 85, 86, 25, 88, 33], [25, 33], [11, 25]];

const getValues = (items) => {
  const flatItems = items.flat();
  const values = flatItems.reduce((acc, curr) => ({ ...acc, [curr]: acc[curr] ? ++acc[curr] : 1 }), {});
  const value = Object.keys(values).sort((a, b) => values[b] - values[a]);
  value.splice(3, value.length);
  return value;
};

getValues(items);
