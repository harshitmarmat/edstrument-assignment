const getNestedError = (obj, path) => {
  return path.split(/[.[\]]+/).reduce((acc, part) => {
    if (!part) return acc;
    return acc && acc[part];
  }, obj);
};

export default getNestedError