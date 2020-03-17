const config = {
	"gatsby": {
		"pathPrefix": "/",
		"siteUrl": "https://anthonylee.netlify.com/",
		"gaTrackingId": null,
		"trailingSlash": false
	},
	"header": {
		"logo": "https://avatars0.githubusercontent.com/u/35132441?s=460&u=27251c3ce82c53741cf64b53276c82382cdb555c&v=4",
		"logoLink": "/",
		"title": "Anthony's NoteBook",
		"githubUrl": "https://github.com/Mbahmo",
		"helpUrl": "",
		"tweetText": "",
		"links": [
			{ "text": "", "link": ""}
		],
    "search": {
      "enabled": !!process.env.GATSBY_ALGOLIA_APP_ID,
      "indexName": "Anthony",
      "algoliaAppId": process.env.GATSBY_ALGOLIA_APP_ID,
      "algoliaSearchKey": process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      "algoliaAdminKey": process.env.ALGOLIA_ADMIN_KEY
    },
	},
	"sidebar": {
		"forcedNavOrder": [
			"/introduction", // add trailing slash if enabled above
    		"/codeblock"
		],
   "collapsedNav": [
      "/talks",
      "/quotes",
      "/podcasts",
      "/programming",
      "/languages",
      "/books",
      "/health"
    ],
		"links": [
			{ "text": "", "link": ""},
		],
		"frontline": false,
		"ignoreIndex": true,
	},
	"siteMetadata": {
		"title": "Anthony's Notebook",
		"description": "My Personal Notebook",
		"ogImage": null,
		"docsLocation": "https://github.com/Mbahmo/personal-notebook-anthony/blob/master/content",
		"favicon": "logo.svg"
	},
	"pwa": {
		"enabled": true, // disabling this will also remove the existing service worker.
		"manifest": {
			"name": "Anthony's Notebook",
			"short_name": "Anthony's Notebook",
			"start_url": "/",
			"background_color": "#6b37bf",
			"theme_color": "#6b37bf",
			"display": "standalone",
			"crossOrigin": "use-credentials",
			icons: [
				{
					src: "src/pwa-512.png",
					sizes: `512x512`,
					type: `image/png`,
				},
			],
		},
	}
};

module.exports = config;
