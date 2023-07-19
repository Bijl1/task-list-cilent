import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import Tasks from "./components/tasks/Tasks";
import { TaskProvider } from "./contexts/Tasks.context";

function App() {
	return (
		<div className="App">
			<NavBar />
			<TaskProvider>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/tasks" element={<Tasks />} />
				</Routes>
			</TaskProvider>
		</div>
	);
}

export default App;