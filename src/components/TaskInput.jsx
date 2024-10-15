import PropTypes from 'prop-types';
import { useState } from "react";

export const TaskInput = ({ addTask }) => {
    const [taskTitle, setTaskTitle] = useState('');

    const handleInputChange = (e) => {
        setTaskTitle(e.target.value);
    }

    const handleAddTask = (e) => {
        e.preventDefault();
        if (taskTitle.trim() === '') return;
        addTask(taskTitle.trim());
        setTaskTitle('');
    }

    return (
        <div className="w-full mt-5 mb-12 bg-gray-700 shadow-xl shadow-blue-800 sh p-4 rounded-lg border-gray-600 bg-opacity-25 border-[1px]">
            <h2 className="text-white font-bold">🎯 Ajouter ta prochaine tâche</h2>
            <form className="flex flex-row justify-between my-2" onSubmit={handleAddTask}>
                <input type="text" value={taskTitle} onChange={handleInputChange} placeholder="Indiquez un titre de tâche explicite" className="w-full bg-opacity-25 bg-gray-700 rounded-md ring-1  ring-inset outline-none ring-gray-500 focus:ring-2 focus:ring-inset focus:ring-blue-600  px-5 text-gray-300"/>
                <button type="submit" className="p-2 bg-blue-800 bg-opacity-20 hover:bg-opacity-60 text-blue-600 font-semibold w-28 ml-5 border rounded-md border-blue-700">Ajouter</button>
            </form>
        </div>
    );
}

TaskInput.propTypes = {
    addTask: PropTypes.func.isRequired,
}