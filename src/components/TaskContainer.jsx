import { useState } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { TaskInput } from "./TaskInput";
import { TaskList } from "./TaskList";

export const TaskContainer = () => {

    const [taskList, setTaskList] = useState([])

    const addTask = (title) => {
        const newTask = {
            id: taskList.length + 1,
            title: title,
            completed: false
        }
        setTaskList([...taskList, newTask]);
    }

    const toggleTaskCompletion = (taskId) => {
        const updatedTasks = taskList.map(task => task.id === taskId? {...task, completed:!task.completed } : task);
        setTaskList(updatedTasks);
    }

    const removeTask = (taskId) => {
        const updatedTasks = taskList.filter(task => task.id !== taskId);
        updatedTasks.forEach((task, index) => {task.id = ++index})
        setTaskList(updatedTasks);
    }

    const taskCompleted = () => {
        return taskList.filter(task => task.completed).length;
    }

    const displayTaskList = () => {
        console.log(taskList.length > 0)
        if (TaskList.length >= 2) {
            return <TaskList tasks={taskList} completed={toggleTaskCompletion} remove={removeTask} totalCompleted={taskCompleted()}/>;
        }
        else{
            return <div></div>
        }
    }

    return (
        <main className=" min-w-[400px] w-full max-w-screen-md">
            <Header/>
            <TaskInput addTask={addTask}/>
            {displayTaskList()}
            <Footer totalCompleted={taskCompleted()} totalTask={taskList.length} />
        </main>
    );
}