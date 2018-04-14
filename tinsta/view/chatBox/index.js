const blessed = require("blessed");
const config = require("../../config");

const screen = config.get("screen");

const box = blessed.box({
	style: {
		focus: {
			border: {
				fg: "blue"
			}
		}
	},
	left: "20%",
	width: "80%",
	height: "100%",
	tags: true,
	border: {
		type: "line"
	}
});

const list = blessed.list({
	height: "100%-5"
});

list.add("12:00:04\t@instazavodnik\tTest");

const textbox = blessed.textbox({
	height: "70",
	top: "100%-5",
	border: {
		type: "line"
	}
});

box.append(list);
box.append(textbox);

screen.append(box);

module.exports = box;

