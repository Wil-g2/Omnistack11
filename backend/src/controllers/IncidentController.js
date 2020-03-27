const connection = require("../database/connection");

class IncidentController {
  async store(req, res) {
    const { title, description, value } = req.body;
    const ong_id = req.headers.autorization;
    console.log(ong_id);
    const [id] = await connection("incidents").insert({
      title,
      description,
      value,
      ong_id
    });

    res.json({ id });
  }

  async index(req, res) {
    const { page = 1 } = req.query;

    const [count] = await connection("incidents").count();

    const incidents = await connection("incidents")
      .join("ongs", "ongs.id", "=", "incidens.ong_id")
      .limit(5)
      .offset((page - 1) * 5)
      .select([
        "incidents.*",
        "ongs.name",
        "ongs.email",
        "ongs.whatsapp",
        "ongs.city",
        "ongs.uf"
      ]);

    res.headers("X-Total-Count", count["count(*)"]);

    return res.json(incidents);
  }

  async delete(req, res) {
    const { id } = req.params;
    const ong_id = req.headers.autorization;

    const incidents = await connection("incidents")
      .where("id", id)
      .select("ong_id")
      .first();
    console.log(incidents.ong_id);
    console.log(ong_id);
    if (incidents.ong_id !== ong_id) {
      return res.status(401).json({ error: "Operantion not permited" });
    }

    await connection("incidents")
      .where("id", id)
      .delete();
    return res.status(204).send();
  }
}

module.exports = new IncidentController();
