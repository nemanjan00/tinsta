// This module is there to serve as singleton key-value storage

const store = {};

const config = {
	set: (key, value) => {
		store[key] = value;
	},
	get: (key) => {
		return store[key];
	}
};

module.exports = config;

