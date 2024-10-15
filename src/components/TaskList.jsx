
import PropTypes from 'prop-types';
import { TaskItem } from "./TaskItem";

export const TaskList = ({tasks, completed, remove, totalCompleted}) => {

    const message = () => {
        if (tasks.length === 0) {
            return "Il n'y a aucune tâche à afficher";
        }
        if (tasks.length - totalCompleted === 1) {
            return "Il te reste une tâche à accomplir";
        }
        return `Il te reste ${tasks.length} tâches à accomplir`;
    }

    return (
        <div className="w-full mt-5 mb-8 bg-gray-700 p-4 rounded-lg border-gray-600 bg-opacity-25 border-[1px]">
            <h2 className="mt-2 mb-5 text-white font-bold">
                {message()}
            </h2>
            <ul>
                {tasks.map(task =>
                    <TaskItem key={task.id} task={task} completed={completed} remove={remove}/>
                )}
            </ul>
        </div>
    );
}


TaskList.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired,
    })).isRequired,
    completed: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
    totalCompleted: PropTypes.number.isRequired,
};