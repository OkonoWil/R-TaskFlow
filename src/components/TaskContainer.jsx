import { Footer } from "./Footer";
import { Header } from "./Header";
import { TaskInput } from "./TaskInput";
import { TaskList } from "./TaskList";

export const TaskContainer = () => {
    return (
        <main className=" min-w-[400px] w-full max-w-screen-md">
            <Header/>
            <TaskInput/>
            <TaskList />
            <Footer />
        </main>
    );
}