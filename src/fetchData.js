const axios = require("axios");

const fetchData = async (url) => {
  try {
    const response = await axios.get(url);
    return response;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = fetchData;
