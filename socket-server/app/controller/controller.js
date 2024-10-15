
exports.register = async (req, res) => {
  try {
    const user = await Services.register(req.body);
    res.status(201).json({ user });
  } catch (err) {
    res.status(500).json({ error: err.toString() });
  }
}

exports.login = async (req, res) => {
  try {
    const token = await Services.login(req.body);
    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: err.toString() });
  }
}

exports.sendMessage = async (req, res) => {
  try {
    const message = await Services.sendMessage(req.body);
    res.status(200).json({ message });
  } catch (err) {
    res.status(500).json({ error: err.toString });
  }
}
