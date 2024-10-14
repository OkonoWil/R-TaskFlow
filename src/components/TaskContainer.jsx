import { Header } from "./Header";
import { TaskInput } from "./TaskInput";

export const TaskContainer = () => {
    return (
        <main className=" min-w-[400px] w-full max-w-screen-md">
            <Header/>
            <TaskInput/>
        </main>
    );
}