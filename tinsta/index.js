const blessed = require("blessed");

// Create a screen object.
const screen = blessed.screen({
	smartCSR: true
});

screen.title = "tinsta";

// Create a box perfectly centered horizontally and vertically.
const box = blessed.box({
	style: {
		focus: {
			border: {
				fg: "blue"
			}
		}
	},
	width: "20%",
	height: "100%",
	content: "Hello {bold}world{/bold}!",
	tags: true,
	border: {
		type: "line"
	}
});

// Append our box to the screen.
screen.append(box);

// Create a box perfectly centered horizontally and vertically.
const box1 = blessed.box({
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

screen.append(box1);

// Quit on Escape, q, or Control-C.
screen.key(["escape", "q", "C-c"], function() {
	return process.exit(0);
});

// Focus our element.
box.focus();

// Render the screen.
screen.render();

