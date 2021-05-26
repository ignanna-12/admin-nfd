export const arrayUniqValues = (entities, name, internalName) => {
  let arr = [];
  for (var i in entities) {
    entities[i][name] &&
      entities[i][name][internalName] &&
      arr.push(entities[i][name][internalName]);
  }
  return Array.from(new Set(arr));
};
