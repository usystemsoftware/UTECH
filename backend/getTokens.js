const { google } = require("googleapis");
const express = require("express");

const app = express();

const oauth2Client = new google.auth.OAuth2(
    "1085619593874-8uc792a58jp4or6kjfk1gmbccetjudvv.apps.googleusercontent.com",
    "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",
    "http://localhost:5002/oauth2callback"   // <-- must match console
);

const SCOPES = ["https://www.googleapis.com/auth/calendar"];

app.get("/auth", (req, res) => {
    const url = oauth2Client.generateAuthUrl({
        access_type: "offline",
        scope: SCOPES,
    });
    res.redirect(url);
});

app.get("/oauth2callback", async (req, res) => {
    console.log("running")
    const { code } = req.query;
    const { tokens } = await oauth2Client.getToken(code);
    console.log("Your tokens:", tokens);
    res.send("Tokens received! Check console.");
});

app.listen(5002, () => console.log("Visit: http://localhost:5002/auth"));
