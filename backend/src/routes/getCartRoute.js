const getCart = require("../db/getCart");

module.exports = getCartRoute = {
  method: "get",
  path: "/cart",
  handler: async (req, res) => {
    const carts = await getCart();
    res.status(200).json(carts);
  },
};
