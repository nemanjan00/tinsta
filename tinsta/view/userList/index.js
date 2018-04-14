const blessed = require("blessed");
const config = require("../../config");

const screen = config.get("screen");

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

list.addItem("@instazavodnik");
list.addItem("\t@nemanjan00");

screen.key(["C-p"], function() {
	list.up(1);
	screen.render();
});

screen.key(["C-n"], function() {
	list.down(1);
	screen.render();
});

list.on("select", () => {
});

module.exports = list;

