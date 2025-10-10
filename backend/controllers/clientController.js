const Client = require('../models/Client');

exports.createClient = async (req, res) => {
  const { name } = req.body;
  let client = await Client.findOne({ name });
  if (client) return res.status(400).json({ message: 'Client already exists' });

  client = await Client.create({
    name,
    platforms: {
      Facebook: [],
      Instagram: [],
      YouTube: [],
      'Google Ads': [],
    },
  });

  res.json(client);
};

exports.getClients = async (req, res) => {
  const clients = await Client.find();
  res.json(clients);
};
