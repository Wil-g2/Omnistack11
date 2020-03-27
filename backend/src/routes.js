const routes = require("express").Router();
const crypto = require("crypto");
const OngContrller = require("./controllers/OngController");
const IncidentController = require("./controllers/IncidentController");
const ProfileController = require("./controllers/ProfileController");
const SessionController = require("./controllers/SessionController");

routes.get("/ongs", OngContrller.index);
routes.post("/ongs", OngContrller.store);

routes.post("/sessions", SessionController.store);
routes.get("/profile", ProfileController.show);

routes.get("/incidents", IncidentController.index);
routes.post("/incidents", IncidentController.store);
routes.delete("/incidents/:id", IncidentController.delete);

module.exports = routes;
