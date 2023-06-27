const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/query", async (req, res) => {
  const { query } = req.body;

  const options = {
    method: "GET",
    url: "https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup",
    params: {
      term: query,
      country: "uk",
    },
    headers: {
      "X-RapidAPI-Key": process.env.RAPIDAPI_KEY,
      "X-RapidAPI-Host": "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response.data); // Log the response data
    return res.send(response.data);
  } catch (error) {
    console.error("Error in Axios:", error);
    return res.status(500).send("Error in Axios: " + error);
  }
});
