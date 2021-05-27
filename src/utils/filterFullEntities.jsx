export const filterFullEntities = (data, name, internalName, value) => {
  let filterEntities = {};
  filterEntities.data = [];
  for (var i in data) {
    if (data[i][name] && data[i][name][internalName] && data[i][name][internalName] == value) {
      filterEntities.data.push(data[i]);
    }
  }
  return filterEntities;
};
