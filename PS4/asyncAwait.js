const fetch = require("node-fetch");

async function getWithAsyncAwait() {
  try {
    const response = await fetch("https://postman-echo.com/get?test=123");
    const data = await response.json();
    return data;
  } catch (err) {
    throw err;
  }
}

getWithAsyncAwait()
  .then((data) => console.log("Data:", data))
  .catch((err) => console.error("Error:", err));
