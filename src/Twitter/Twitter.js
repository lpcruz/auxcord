class Twitter {
  constructor(api) {
    this.api = api;
    this.TWITTER_API_ROUTES = {
      POST: 'statuses/update',
      SEARCH: 'search/tweets'
    };
  }

  /**
   * Tweets a status via Twitter's POST method to statuses/update
   * @param {string} message 
   */
  async tweet(message) {
    await this.api.post(this.TWITTER_API_ROUTES.POST, {
      status: message
    }, (err, tweet, res) => {
      if (err) {
        console.error('Something went wrong with tweeting a status!', res);
        throw err;
      }
      console.log(`Successfully posted status: "${tweet.text}"`)
    });
  }

  /**
   * Searches for the twitter handle and gets all tweets
   * Filters the tweets to only get replies from the given id
   * @param {*} twitterHandle -- Twitter handle of the tweet under analysis (e.g. @suggestmesongs)
   * @param {*} id -- The id of the tweet asking for songs 
   * @param {*} callback -- @returns {Array} -- Returns the song suggestions
   */
  async getSuggestions(twitterHandle, id, callback) {
    await this.api.get(this.TWITTER_API_ROUTES.SEARCH, {
      q: twitterHandle
    }, (err, tweets, res) => {
      if (err) {
        console.error('Something went wrong with searching/getting a status!', res);
        throw err;
      }
      const criteria = status => {
        return status.in_reply_to_status_id_str === id;
      };
      let suggestions = [];
      const replies = tweets.statuses.filter(criteria);
      replies.forEach(reply => {
        suggestions.push(reply.text.replace(`${twitterHandle} `, ''));
      });
      return callback(suggestions);
    });
  }
}
module.exports = Twitter;