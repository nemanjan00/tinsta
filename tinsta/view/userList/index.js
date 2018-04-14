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

list.on("select", () => {
});

list.focus();

module.exports = list;

