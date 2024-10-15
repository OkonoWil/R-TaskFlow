import { TaskItem } from "./TaskItem";

export const TaskList = () => {

    return (
        <div className="w-full mt-5 mb-8 bg-gray-700 p-4 rounded-lg border-gray-600 bg-opacity-25 border-[1px]">
            <h2 className="mt-2 mb-5 text-white font-bold">
                Il te reste encore x tâches à accomplir
            </h2>
            <ul>
                <TaskItem />
                <TaskItem />
                <TaskItem />
                <TaskItem />
            </ul>
        </div>
    );
}