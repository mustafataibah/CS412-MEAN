const request = require("request");

function getWithCallback(callback) {
  request(
    "https://postman-echo.com/get?test=123",
    { json: true },
    (err, res, body) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, body);
      }
    }
  );
}

getWithCallback((err, data) => {
  if (err) {
    console.error("Error:", err);
  } else {
    console.log("Data:", data);
  }
});
