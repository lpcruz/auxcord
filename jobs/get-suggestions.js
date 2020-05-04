const TwitterClient = require('../src/Twitter/Client');
const TwitterAPI = require('../src/Twitter/Twitter');
const twitter = new TwitterAPI(TwitterClient);
/**
 * Gets the replies from a tweet and curates them into a spotify playlist
 * @param {string} id -- The id of the tweet asking for songs 
 * @param {string} twitterHandle  -- Twitter handle of the tweet under analysis (e.g. @suggestmesongs)
 * @todo: Actually curate it on spotify
 */
const getAndCurate = async (id, twitterHandle) => {
  await twitter.getSuggestions(id, twitterHandle, res => {
    console.info(res); // =>
    /**
    [
      'ALREADY by Beyoncé',
      'Newness by Jade Novah',
      'Hear me calling by Juice WRLD',
      'Paralyzed by KWAYE'
    ]
    */
  });
};

getAndCurate('@suggestmesongs', '1257050067665596418');