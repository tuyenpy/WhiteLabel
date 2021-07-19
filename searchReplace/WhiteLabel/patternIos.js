const ENV = process.env.APPENV;
const data = require('./app.json')[ENV];

const app = {
	buildGradle: {
		pattern: [
			{
				current: /<key>CFBundleDisplayName<\/key>\r*\n*\t*<string>[\w ]+<\/string>/g,
				next: `<key>CFBundleDisplayName</key>\n\t<string>${data.appName}</string>`
			}, {
				current: /<key>CodePushDeploymentKey<\/key>\r*\n*\t*<string>[\w -_\d]+<\/string>/ig,
				next: `<key>CodePushDeploymentKey</key>\n\t<string>${data.codePushDeploymentKey}</string>`
			},{
				current: /<key>CFBundleVersion<\/key>\r*\n*\t*<string>[\w -_\d.]+<\/string>/ig,
				next: `<key>CFBundleVersion</key>\n\t<string>${data.versionApp}</string>`
			}
		],
		path: './info.plist'
	}
}

module.exports = app;