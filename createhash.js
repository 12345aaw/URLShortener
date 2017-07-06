// createhash.js
// By Andrew Willis

function randomChar() {
	var n = Math.floor(Math.random() * 62);
	if(n < 10) return n;
	if(n < 36) return String.fromCharCode(n + 55);
	return String.fromCharCode(n+61);
}

function createHash(len) {
	var str = '';
	while(str.length < len) str += randomChar();
	return str;
}

module.exports = createHash;