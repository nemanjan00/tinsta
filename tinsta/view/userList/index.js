const blessed = require("blessed");
const config = require("../../config");

const screen = config.get("screen");
const manager = config.get("manager");

const list = blessed.list({
	style: {
		focus: {
			border: {
				fg: "blue"
			}
		},
		selected: {
			fg: "blue"
		}
	},
	mouse: true,
	width: "20%",
	height: "100%",
	tags: true,
	border: {
		type: "line"
	}
});

screen.append(list);

// Logic

list.on("select", () => {
});

manager.on("streamListChange", () => {

});

// Binding for stream navigation
screen.key(["C-p"], function() {
	list.up(1);
	screen.render();
});

screen.key(["C-n"], function() {
	list.down(1);
	screen.render();
});

module.exports = list;

