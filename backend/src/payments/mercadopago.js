const { MercadoPagoConfig } = require("mercadopago");
const client = new MercadoPagoConfig({
  accessToken: process.env.MERCADOPAGO_ACCESS_TOKEN,
});

const createPreference = async (req, res, next) => {
  try {
    const preference = await client.preference.create({
      items: req.body.map((product) => ({
        title: product.name,
        unit_price: product.price,
        quantity: product.quantity,
      })),
      back_urls: {
        success: "http://martin-juncos.github.io/success",
        failure: "http://martin-juncos.github.io/failure",
        pending: "http://martin-juncos.github.io/pending",
      },
      auto_return: "approved",
    });
    res.status(200).json(preference);
  } catch (error) {
    next(error);
  }
};

module.exports = { createPreference };
