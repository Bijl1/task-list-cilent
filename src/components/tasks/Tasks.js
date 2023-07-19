import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import TaskContext from "../../contexts/Tasks.context";

// This is the same as a model for express app. Your declaring what value type is variable will be and what variables acan exists if declaring objects and/or arrays
// type TaskList = {
//     _id: string,
//     title: string,
//     tasks: string[],
//     createdAt: string,
//     updatedAt: string
// }

export default function Tasks() {
	// const [taskList, setTasks] = useState([]);
	const [formData, setFormData] = useState({ title: "" });

	const { taskList, setTasks, handleTaskSubmit } = useContext(TaskContext);

	useEffect(() => {
		axios
			.get("http://localhost:5005/task-lists")
			.then((res) => {
				// console.log({resp: res.data});
				setTasks(res.data.taskLists);
			})
			.catch((err) => console.log({ err }));
	}, []);

	const handleSubmit = () => {
		// console.log("Click!!");
		// axios
		// 	.post("http://localhost:5005/task-lists", formData)
		// 	.then((res) => {
		// 		console.log({ create: res.data });
		// 		setTasks([...taskList, res.data.taskList]);
		// 		setFormData({ title: "" });
		// 	})
		// 	.catch((err) => console.log({ err }));
		handleTaskSubmit(formData);
		setFormData({ title: "" });
	};

	const displayForm = () => {
		return (
			<div>
				<label>
					List Title:{" "}
					<input
						onChange={(e) => setFormData({ title: e.target.value })}
						type="text"
						name="title"
						value={formData.title}
					/>
				</label>
				<button onClick={() => handleSubmit()}>Create List</button>
			</div>
		);
	};

	const displayTaskLists = () => {
		// return taskList.map((task: TaskList, i) => (<div>
		return taskList.map((task, i) => (
			<div key={i}>
				<Link to={`/task-list/${task._id}`}> {task.title} </Link>
			</div>
		));
	};

	return (
		<div>
			{displayForm()}
			<div>{displayTaskLists()}</div>
		</div>
	);
}  