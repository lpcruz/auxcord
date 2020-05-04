# Auxcord (...in development though)

A NodeJS CLI tool to crowdsource song suggestions on [Twitter](https://twitter.com) and auto-create a [Spotify](https://spotify.com) playlist.
> NOTE: In my personal opinion, sharing music is an under-appreciated level of intimacy. This is  for the kids that burned CDs for their homies and school crushes back in the day.
## Contribute

#### Clone this repository 

###### With `ssh` (recommended)
```bash
$ git clone git@github.com:lpcruz/auxcord.git
```

###### With `https`
```bash
$ git clone https://github.com/lpcruz/auxcord.git
```

#### Install Dependencies
```
npm install
```

#### Setting up your twitter client 
This project uses the [Node Twitter Library](https://github.com/desmondmorris/node-twitter) for interacting as a client.

You _need_ to have your own personal tokens and secrets to use the Twitter API. If you don't, please follow these steps:

* Create a twitter account or use your own handle
* Create an app associated with your twitter account via the [Twitter Developer Getting Started docs.](https://developer.twitter.com/en/apps)
* After successfully creating your app, you should be able to obtain your tokens/secrets that will need to be used in this project.

#### Setting up your spotify client 
This project uses the [Spotify Web API NodeJS Library](https://github.com/thelinmichael/spotify-web-api-node)for interacting as a client.

You _need_ to have your own personal tokens and secrets to use the Spotufy API. If you don't, please follow these steps:

* Sign up as a developer for Spotify
* Create a Client ID via the [Spotify Developer Dashboard for Applications](https://developer.spotify.com/dashboard/applications)
* After successfully creating your app, you should be able to obtain your tokens/secrets that will need to be used in this project.

###### Copy the `.env.example` file to a new `.env` file
You'll need to store the access tokens / keys / secrets in a `.env` file.
```
TWITTER_CONSUMER_KEY=YOUR_CONSUMER_KEY
TWITTER_CONSUMER_SECRET=YOUR_CONSUMER_SECRET
TWITTER_ACCESS_TOKEN_KEY=YOUR_ACCESS_TOKEN_KEY
TWITTER_TOKEN_SECRET=YOUR_TOKEN_SECRET
SPOTIFY_CLIENT_ID=YOUR_SPOTIFY_CLIENT_ID
SPOTIFY_CLIENT_SECRET=YOUR_SPOTIFY_CLIENT_SECRET
```
Copy the content of `.env.example` via the following command in the `/auxcord` directory:
```bash
cp .env.example .env 
```

...and replace the values with the your personal access tokens / keys / secrets.

#### Verify that your Twitter client is up-and-running
To ensure that your twitter client is working, run the following command:
```
npm run get:suggestions
```

This should return an array of songs:
```
npm run get:suggestions
> auxcord@1.0.0 get:suggestions /Users/laurencecruz/Desktop/lcruz/dev/auxcord
> node ./jobs/get-suggestions

[
  'ALREADY by Beyoncé',
  'Newness by Jade Novah',
  'Hear me calling by Juice WRLD',
  'Paralyzed by KWAYE'
]

[
  {
    album: {
      album_type: 'album',
      artists: [Array],
      available_markets: [Array],
      external_urls: [Object],
      href: 'https://api.spotify.com/v1/albums/552zi1M53PQAX5OH4FIdTx',
      id: '552zi1M53PQAX5OH4FIdTx',
      images: [Array],
      name: 'The Lion King: The Gift',
      release_date: '2019-07-19',
      release_date_precision: 'day',
      total_tracks: 27,
      type: 'album',
      uri: 'spotify:album:552zi1M53PQAX5OH4FIdTx'
    },
    artists: [ [Object], [Object], [Object] ],
    available_markets: [
      'AD', 'AE', 'AR', 'AT', 'AU', 'BE', 'BG', 'BH',
      'BO', 'BR', 'CA', 'CH', 'CL', 'CO', 'CR', 'CY',
      'CZ', 'DE', 'DK', 'DO', 'DZ', 'EC', 'EE', 'EG',
      'ES', 'FI', 'FR', 'GB', 'GR', 'GT', 'HK', 'HN',
      'HU', 'ID', 'IE', 'IL', 'IN', 'IS', 'IT', 'JO',
      'JP', 'KW', 'LB', 'LI', 'LT', 'LU', 'LV', 'MA',
      'MC', 'MT', 'MX', 'MY', 'NI', 'NL', 'NO', 'NZ',
      'OM', 'PA', 'PE', 'PH', 'PL', 'PS', 'PT', 'PY',
      'QA', 'RO', 'SA', 'SE', 'SG', 'SK', 'SV', 'TH',
      'TN', 'TR', 'TW', 'US', 'UY', 'VN', 'ZA'
    ],
    disc_number: 1,
    duration_ms: 222529,
    explicit: false,
    external_ids: { isrc: 'USSM11904704' },
    external_urls: {
      spotify: 'https://open.spotify.com/track/6tgEc2O1uFHcZDKPoo6PC8'
    },
    href: 'https://api.spotify.com/v1/tracks/6tgEc2O1uFHcZDKPoo6PC8',
    id: '6tgEc2O1uFHcZDKPoo6PC8',
    is_local: false,
    name: 'ALREADY',
    popularity: 68,
    preview_url: 'https://p.scdn.co/mp3-preview/6e8bef4d9afb67163e187822d7f872364963f949?cid=62c735feaf304f649d9d655abd089c47',
    track_number: 19,
    type: 'track',
    uri: 'spotify:track:6tgEc2O1uFHcZDKPoo6PC8'
  }
]
```

## In Progress
* Spotify implementation

## References / Docs
* [Twitter API Reference Docs](https://developer.twitter.com/en/docs/api-reference-index)
* [Node Twitter (GitHub)](https://github.com/desmondmorris/node-twitter)
* [Spotify for Developers](https://developer.spotify.com/)
* [Spotify Web API NodeJS (GitHub)](https://github.com/thelinmichael/spotify-web-api-node)