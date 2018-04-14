const blessed = require("blessed");
const config = require("../../config");

const screen = config.get("screen");

const box = blessed.box({
	left: "20%",
	width: "80%",
	height: "100%"
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
	width: "100%",
	height: "shrink",
	bottom: "0",
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

screen.key([":"], function() {
	textbox.setValue(":");
	textbox.focus();
});

screen.key(["/"], function() {
	textbox.setValue("/");
	textbox.focus();
});

log.focus();

module.exports = box;

