const fetch = require("node-fetch");

function getWithPromise() {
  return fetch("https://postman-echo.com/get?test=123")
    .then((response) => response.json())
    .catch((err) => Promise.reject(err));
}

getWithPromise()
  .then((data) => console.log("Data:", data))
  .catch((err) => console.error("Error:", err));
