console.time("Execution Time");

let painter = {
	tools: ["brush", "roller", "caulk", "sandpaper", "dropcloth"],
	uniform: "white overalls",
	cost_per_hour: 25.0,
	insured: true,
	newProp: (newTool) => {
		painter.tools.push(newTool);
	},
};

painter.newProp("whackin' hammer");

console.log(painter.tools);


console.timeEnd("Execution Time");
