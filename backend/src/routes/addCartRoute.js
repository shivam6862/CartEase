const insertCart = require("../db/insertCart");
const deleteCart = require("../db/deleteCart");

module.exports = addCartRoute = {
  method: "put",
  path: "/cart",
  handler: async (req, res) => {
    const { cart } = req.body;
    await deleteCart();
    const response = await insertCart(cart);
    console.log(response);
    res.status(200).json(response);
  },
};
