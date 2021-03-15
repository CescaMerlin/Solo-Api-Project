// The data below is mocked.
const data = require("./data");

module.exports = {
  Query: {
    GetAllBirds: () => {
      const allData = [];
      for (const type in data) {
        for (const bird of data[type]) {
          allData.push(bird);
        }
      }
      return allData;
    }
  }
};