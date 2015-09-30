'use strict'

let Git = require('./git');

class GitUpdater {
	constructor(repository_path) {
		this.repo = repository_path;
		console.log(this.repo);
	}
}

console.log(new GitUpdater(__filename), new Git());