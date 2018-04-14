const EventEmitter = require("events");

const eventEmmiter = new EventEmitter();

const streams = [];

const init = () => {
	
};

const manager = {
	on: (name, callback) => {
		eventEmmiter.on(name, callback);
	},
	getStreams: () => {
		return streams;
	}
};

init();

module.exports = manager;

