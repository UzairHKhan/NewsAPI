const baseURL = "https://newsapi.org/v2/everything";

const apiKey = "e17a130c827040dcb2299b6a3d6b0229";

const generateQueryParams = (params = {}) => {
  let query = "";
  const objArr = Object.keys(params);

  objArr.forEach(
    (key, i) => (query += `${i === 0 ? "?" : "&"}${key}=${params[key]}`)
  );

  return query;
};

export const FullURL = (data) => {
  const paramsObj = { ...data, apiKey };
  const queryParms = generateQueryParams(paramsObj);

  // console.log(`${baseURL}${queryParms}`)

  return fetch(`${baseURL}${queryParms}`);
};
