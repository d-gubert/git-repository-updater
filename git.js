'use strict'

let execute = require('child_process').exec;
let executeSync = require('child_process').execSync;

class Git {
	constructor(path_to_repository) {
		if (typeof path_to_repository === 'undefined')
			this.path = __dirname;
		else
			this.path = path_to_repository;

		this.checkIfPathIsRepository();
	}

	checkIfPathIsRepository() {
		executeSync('git status', {cwd: this.path}).toString();
	}
}

module.exports = Git;