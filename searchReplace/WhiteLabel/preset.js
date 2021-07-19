const fs = require('fs');
const path = require('path');
const appAndroid = require('./patternAndroid');
const appIos = require('./patternIos')


// console.log(path.resolve(__dirname))
// console.log("------")


searchReplace(appAndroid);
searchReplace(appIos);

function searchReplace(app) {
	for (let key in app) {
		let item = app[key];
		let data = fs.readFileSync(item.path, {encoding: 'utf8'});

		item.pattern.map(value => {
			data = data.replace(value.current, value.next);
		});

		fs.writeFileSync(item.path, data, {encoding: 'utf8', flag: 'w'});
		
	}
}