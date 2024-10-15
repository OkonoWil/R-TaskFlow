import PropTypes from 'prop-types';
export const TaskItem = ({task, completed, remove}) => {

    const handleClick = () => {
        completed(task.id);
    }

    const handleRemove = (e) => {
        e.stopPropagation();
        remove(task.id);
    }

    return (
        <li onClick={handleClick} className={`flex flex-row justify-between items-center cursor-pointer my-2 px-5 py-4 border-gray-600 border-[1px] rounded-lg ${task.completed ? 'hover:bg-green-700 bg-green-700  bg-opacity-5  hover:bg-opacity-25' : 'hover:bg-blue-700  bg-opacity-25 hover:bg-opacity-[0.04]'}`}>
            <div className="flex flex-row w-full items-center">
                <div className={`px-3 py-[3px] w-8 h-8 bg-opacity-20 font-semibold mr-5 border rounded-full ${task.completed ? 'bg-green-800 text-green-600 border-green-700' : 'bg-blue-800 text-blue-600 border-blue-700'}`}>{task.id}</div>
                <div className={task.completed ? 'text-green-500 line-through' : ''}>{task.title}</div>
            </div>
            <button onClick={handleRemove} className={`w-10 h-10 text-center bg-opacity-20 hover:bg-opacity-60 font-semibold ml-5 border rounded-md ${task.completed ? ' bg-green-800 text-green-600 border-green-700' : ' bg-blue-800 text-blue-600 border-blue-700'}`}>x</button>
        </li>
    )
}

TaskItem.propTypes = {
    task: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired,
    }).isRequired,
    completed: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
}