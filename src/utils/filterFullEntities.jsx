export const filterFullEntities = (entities, name, internalName, value) => {
  let filterEntities = {};
  filterEntities.data = [];
  for (var i in entities) {
    if (i[name] && i[name][internalName] && i[name][internalName] == value) {
      filterEntities.data.push(i);
    }
  }
  return filterEntities;
};
