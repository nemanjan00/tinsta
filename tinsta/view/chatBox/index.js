const blessed = require("blessed");
const config = require("../../config");

const screen = config.get("screen");

const box = blessed.box({
	left: "20%",
	width: "80%",
	height: "100%",
	tags: true,
	border: {
		type: "line"
	}
});

screen.append(box);

const log = blessed.box({
	style: {
		focus: {
			border: {
				fg: "blue"
			}
		}
	},
	height: "100%-3",
	width: "100%",
	top: "-20",
	left: "-10",
	scrollable: true, 
	alwaysScroll: true,
	mouse: true,
	border: {
		type: "line"
	}
});

log.content += "12:00:04\t@instazavodnik\tTest 😀";

const textbox = blessed.textbox({
	style: {
		focus: {
			border: {
				fg: "blue"
			}
		}
	},
	left: "-10",
	width: "100%",
	height: "70",
	top: "100%-4",
	border: {
		type: "line"
	},
	mouse: true,
	inputOnFocus: true
});

textbox.on("submit", () => {
	textbox.clearValue();
	screen.render();
});

box.append(log);
box.append(textbox);

screen.key(["i"], function() {
	textbox.focus();
});

module.exports = box;

