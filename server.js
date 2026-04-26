const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

// === IMPORTANT : Définir les routes ICI ===

// Route pour GET /enseignants
app.get("/enseignants", (req, res) => {
  const sql = `
    SELECT 
      numens,
      nom,
      nbheures,
      tauxhoraire,
      (nbheures * tauxhoraire) AS salaire
    FROM enseignant
  `;

  db.query(sql, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: err.message });
    }
    res.json(result);
  });
});

// Route pour GET /enseignants/stats
app.get("/enseignants/stats", (req, res) => {
  const sql = `
    SELECT
      MIN(nbheures * tauxhoraire) AS salaire_min,
      MAX(nbheures * tauxhoraire) AS salaire_max,
      SUM(nbheures * tauxhoraire) AS salaire_total
    FROM enseignant
  `;

  db.query(sql, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: err.message });
    }
    res.json(result[0]);
  });
});

// Démarrer le serveur
app.listen(3000, () => {
  console.log("Serveur lancé sur port 3000");
  console.log("Routes disponibles :");
  console.log("  - GET http://localhost:3000/enseignants");
  console.log("  - GET http://localhost:3000/enseignants/stats");
});