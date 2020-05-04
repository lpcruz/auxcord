class Spotify {
  constructor(api) {
    this.api = api;
  }

  async getToken() {
    const res = await this.api.clientCredentialsGrant();
    return res.body['access_token'];
  }

  async setToken(token) {
    await this.api.setAccessToken(token);
  }

  async authorize() {
    const scopes = ['playlist-modify-public', 'playlist-modify-private'];
    const res = await this.api.createAuthorizeURL(scopes);
    console.log(res)
  }

  async search(track, artist) {
    try {
      const res = await this.api.searchTracks(`track:${track} artist:${artist}`);
      console.log(res.body.tracks.items)
      return res;
    } catch (e) {
      console.error(e);
      throw e;
    }
  }

  async addTracksToPlaylist(playlistId, tracks) {
    try {
      const res = await this.api.addTracksToPlaylist(playlistId, tracks);
      console.log(res)
      return res;
    } catch (e) {
      console.error(e);
      throw e;
    }
  }

}
module.exports = Spotify;