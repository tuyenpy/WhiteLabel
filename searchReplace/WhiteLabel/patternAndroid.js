const ENV = process.env.APPENV;
const data = require('./app.json')[ENV];

const app = {
	buildGradle: {
		pattern: [
			{
				current: /package( ){0,}([=])( ){0,}["']{0,}([\w\.])+( ){0,}["']{0,}/g,
				next: `package="\n${data.appPackage}"`
			}
		],
		path: './input.xml'
	}
}

module.exports = app;