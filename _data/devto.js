require('dotenv').config()
const fetch = require("node-fetch");

module.exports = async function() {
  return fetch(
    "https://dev.to/api/articles/me", {
      headers: { "api-key": process.env.API_KEY }
    }
  )
    .then(res => res.json())
    .then(json => {
      return {
        posts: json
      };
    });
};