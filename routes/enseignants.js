// GET /enseignants/stats
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
    // result[0] car la requête retourne une seule ligne
    res.json(result[0]);
  });
});