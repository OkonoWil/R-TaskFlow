export const TaskItem = () => {

    return (
        <li className="flex flex-row justify-between items-center my-2 px-5 py-4 border-gray-600 bg-opacity-25 border-[1px] rounded-lg hover:bg-blue-700 hover:bg-opacity-[0.04]">
            <div className="flex flex-row w-full items-center">
                <div className="px-3 py-[3px] w-8 h-8 bg-blue-800 bg-opacity-20 text-blue-600 font-semibold mr-5 border rounded-full border-blue-700">1</div>
                <div>Title task Il te reste encore x tâches à accomplir Il te reste encore x tâches à accomplir Il te reste encore x tâches à accomplir Il te reste encore x tâches à accomplir Il te reste encore x tâches à accomplir ...</div>
            </div>
            <button className="w-10 h-10 text-center  bg-blue-800 bg-opacity-20 hover:bg-opacity-60 text-blue-600 font-semibold ml-5 border rounded-md border-blue-700">x</button>
        </li>
    )
}