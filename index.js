const express = require("express");
const app = express();
app.use(express.json());

const todos = [];

class Task {
	constructor(name, priority="medium", due=Date.now(), tags=[]) {
		this.name = name;
		this.priority = priority;
		this.due = due;
		this.tags = tags;
	}
}

app.get("/", (req, res) => {
	res.redirect("/todos");
})
app.get("/todos", (req, res) => {
	return res.send(todos);
})

app.put("/todos", (req, res) => {
	const name = req.query.name;
	const task = new Task(name);
	todos.push(task);
	return res.send(task);
})

app.get("/thisisnew", (req, res) => {
	return res.send("wow");
})

const port = process.env.OPTIC_API_PORT || 3000;

app.listen(port, () => {
	console.log(`App is listening @ http://localhost:${port}`)
})