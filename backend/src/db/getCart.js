const getDb = require("./db").getDb;

module.exports = getCart = async () => {
  const connection = await getDb();
  const carts = await connection.collection("cart").find({}).toArray();
  return carts;
};
