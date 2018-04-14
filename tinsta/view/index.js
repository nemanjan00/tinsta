const blessed = require("blessed");
const config = require("../config");

const manager = require("../manager");

module.exports = () => {
	const screen = blessed.screen({
		smartCSR: true,
		fullUnicode: true
	});

	config.set("screen", screen);
	config.set("manager", manager);

	screen.title = "tinsta";

	require("./chatBox");
	require("./userList");

	screen.key(["escape", "q", "C-c"], function() {
		return process.exit(0);
	});

	screen.render();
};

