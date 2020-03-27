const connection = require("../database/connection");

class SessionController {
  async store(req, res) {
    const { id } = req.body;
    console.log(req.body);
    const ong = await connection("ongs")
      .where("id", id)
      .select("name")
      .first();

    if (!ong) {
      return req.status(400).json({ error: "ONG not found with this ID" });
    }

    return res.json(ong);
  }
}

module.exports = new SessionController();
