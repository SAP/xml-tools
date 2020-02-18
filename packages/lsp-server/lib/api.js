// require.resolve will throw an error if the module does not exist
// thus ensuring a valid path is provided (e.g if server.js is renamed).
const SERVER_PATH = require.resolve("./server.js");

module.exports = {
  SERVER_PATH: SERVER_PATH
};
