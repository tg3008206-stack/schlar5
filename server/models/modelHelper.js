const mongoose = require("mongoose");
const { getInMemoryCollection } = require("../config/inMemoryDb");

function createModelProxy(modelName, schema) {
  const MongooseModel = mongoose.models[modelName] || mongoose.model(modelName, schema);
  const inMemStore = getInMemoryCollection(modelName);

  return new Proxy(MongooseModel, {
    get(target, prop) {
      if (mongoose.connection && mongoose.connection.readyState === 1) {
        return target[prop];
      }
      if (prop in inMemStore) {
        const val = inMemStore[prop];
        return typeof val === "function" ? val.bind(inMemStore) : val;
      }
      return target[prop];
    },
  });
}

module.exports = { createModelProxy };
