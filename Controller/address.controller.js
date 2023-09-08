const Address = require("../Model/address.model");

exports.getAllAddresses = async (req, res) => {
  try {
    const addresses = await Address.find();
    res.json(addresses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createAddress = async (req, res) => {
  const { user_id, city, state, country } = req.body;
  const newAddress = new Address({
    user_id,
    city,
    state,
    country,
  });

  try {
    const address = await newAddress.save();
    res.status(201).json(address);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
