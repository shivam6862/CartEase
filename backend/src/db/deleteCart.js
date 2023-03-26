const getDb = require("./db").getDb;

module.exports = deleteCart = async () => {
  const connection = await getDb();
  const carts = await connection.collection("cart").deleteMany({});
  return carts;
};
