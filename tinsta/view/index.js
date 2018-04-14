const blessed = require("blessed");
const config = require("../config");

module.exports = () => {
	const screen = blessed.screen({
		smartCSR: true
	});

	config.set("screen", screen);

	screen.title = "tinsta";

	require("./chatBox");
	require("./userList");

	screen.key(["escape", "q", "C-c"], function() {
		return process.exit(0);
	});

	screen.render();
};

