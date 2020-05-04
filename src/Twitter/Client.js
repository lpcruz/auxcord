require('dotenv').config();
const Twitter = require('twitter');

const API = new Twitter({
  /* eslint-disable no-undef */
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_TOKEN_SECRET
});

module.exports = API;