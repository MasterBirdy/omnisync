const express = require("express");
const path = require("path");
const fetch = require("node-fetch");

const GRANT_DATA_URL = "https://www.sbir.gov/api/solicitations.json?keyword=sbir";

const app = express();

app.use(express.json());

app.get("/api/grants", async (req, res) => {
    const rest = await fetch(GRANT_DATA_URL);
    const response = await rest.json();
    const filteredResponse = response.map(({ solicitation_title, solicitation_number, solicitation_agency_url, open_date, close_date, agency }) => ({
        solicitation_title,
        solicitation_number,
        solicitation_agency_url,
        open_date,
        close_date,
        agency,
    }));
    res.json(filteredResponse);
});

app.post("/api/download", async (req, res) => {
    const rest = await fetch(GRANT_DATA_URL);
    const response = await rest.json();
    const filteredResponse = response.filter((grant) => {
        return req.body.grants.some((choice) => choice.solicitation_number === grant.solicitation_number && choice.solicitation_title === grant.solicitation_title);
    });
    res.json(filteredResponse);
});

if (process.env.NODE_ENV === "production") {
    app.get("/*", (req, res) => {
        res.sendFile(path.join(__dirname, "../build", "index.html"));
    });
}

app.listen(process.env.PORT || 5000, console.log(`Server running on port ${process.env.PORT || 5000}!`));
