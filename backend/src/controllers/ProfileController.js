const connection = require("../database/connection");

class ProfileController {
  async show(req, res) {
    const ong_id = req.headers.autorization;

    const incidents = await connection("incidents")
      .where("ong_id", ong_id)
      .select("*");

    return res.json(incidents);
  }
}

module.exports = new ProfileController();