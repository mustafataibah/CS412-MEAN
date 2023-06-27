const express = require("express");
const cors = require("cors");
const axios = require("axios");
const redis = require("redis");
require("dotenv").config();

const REDIS_PORT = process.env.REDIS_PORT || 6379;
const client = redis.createClient(REDIS_PORT);

const app = express();
app.use(cors());
app.use(express.json());

const getFromCache = (req, res, next) => {
  const { query } = req.body;

  client.get(query, (err, data) => {
    if (err) throw err;

    if (data !== null) {
      res.send(JSON.parse(data));
    } else {
      next();
    }
  });
};

app.post("/api/query", getFromCache, async (req, res) => {
  const { query } = req.body;

  const options = {
    method: "GET",
    url: "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch",
    params: {
      query,
    },
    headers: {
      "X-RapidAPI-Key": process.env.RAPIDAPI_KEY,
      "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);

    // Set data to Redis
    client.setex(query, 3600, JSON.stringify(response.data));

    res.send(response.data);
  } catch (error) {
    console.error(error);
    res.status(500);
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
