const express = require("express");
const newsletterController = require("../controllers/newsletter");
const md_auth = require("../middleware/authenticated");

const api = express.Router();

api.post("/newsletter", newsletterController.subcribeEmail);
api.get("/newsletter", [md_auth.asureAuth], newsletterController.getEmails);
api.delete(
  "/newsletter/:id",
  [md_auth.asureAuth],
  newsletterController.deleteEmail
);
module.exports = api;
