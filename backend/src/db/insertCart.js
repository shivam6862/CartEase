const getDb = require("./db").getDb;

module.exports = insertCart = async (cart) => {
  const connection = await getDb();
  const { insertedId } = await connection.collection("cart").insertOne(cart);
  return insertedId;
};
