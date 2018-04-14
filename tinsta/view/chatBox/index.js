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
	content: "Hello {bold}world{/bold}!",
	tags: true,
	border: {
		type: "line"
	}
});

screen.append(box);

module.exports = box;

