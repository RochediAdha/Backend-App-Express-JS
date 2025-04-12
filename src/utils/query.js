/**
 * Parse the include query string and return an object with the valid includes
 * @param {String} query - The include query string
 * @param {Array} validIncludes - The valid includes
 * @returns {Object} - The include options
 * @example
 * const includeOptions = parseIncludeQuery(req.query.include, [
 *  "peran",
 * "menu",
 * ]);
 */
const parseIncludeQuery = (query, validIncludes) => {
  let includeOptions = {};

  if (query) {
    const includesArray = query.split(",");
    includesArray.forEach((item) => {
      if (validIncludes.includes(item)) {
        includeOptions[item] = true;
      }
    });
  }

  return includeOptions;
};

export { parseIncludeQuery };
