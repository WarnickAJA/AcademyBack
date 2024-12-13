const { MercadoPagoConfig, Preference } = require("mercadopago");
const client = new MercadoPagoConfig({
  accessToken: process.env.MERCADOPAGO_ACCESS_TOKEN,
});

const createPreference = async (req, res, next) => {
  try {
    const body = {
      //   items: req.body.map((product) => ({
      //     title: product.name,
      //     unit_price: Number(product.price),
      //     quantity: Number(product.quantity),
      //   })),
      items: [
        {
          title: "req.body.name",
          unit_price: 250,
          quantity: 5,
        },
      ],
      back_urls: {
        success: "http://martin-juncos.github.io/success",
        failure: "http://martin-juncos.github.io/failure",
        pending: "http://martin-juncos.github.io/pending",
      },
      auto_return: "approved",
    };
    const preference = new Preference(client);
    const result = await preference.create({ body });
    res.status(200).json({ id: result.id });
  } catch (error) {
    next(error);
  }
};

module.exports = { createPreference };
