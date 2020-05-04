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

###### Copy the `.env.example` file to a new `.env` file
You'll need to store the access tokens / keys / secrets in a `.env` file.
```
TWITTER_CONSUMER_KEY=YOUR_CONSUMER_KEY
TWITTER_CONSUMER_SECRET=YOUR_CONSUMER_SECRET
TWITTER_ACCESS_TOKEN_KEY=YOUR_ACCESS_TOKEN_KEY
TWITTER_TOKEN_SECRET=YOUR_TOKEN_SECRET
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
```

## In Progress
* Spotify implementation

## References / Docs
* [Twitter API Reference Docs](https://developer.twitter.com/en/docs/api-reference-index)
*  [Node Twitter (GitHub)](https://github.com/desmondmorris/node-twitter)