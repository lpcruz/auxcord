const TwitterClient = require('../src/Twitter/Client');
const TwitterAPI = require('../src/Twitter/Twitter');
const twitter = new TwitterAPI(TwitterClient);
const {
  getCurrentMonthName,
} = require('../utils/time');
/**
 * Simply asks for songs on Twitter
 * Perfoms the underlying POST method via twitter
 * @note Maybe do this every first of the month(?)
 */
const ask = () => {
  const header = `🎧 ${getCurrentMonthName()} Playlist is ready to get made!`;
  twitter.tweet(`${header}\nPlease comment below. One song per comment!`);
};
ask();