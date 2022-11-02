import { useState } from "react";

const TodoCreate = ({ createTodo }) => {
    const [title, setTitle] = useState("");

    const handleSubmitCreateTodo = (e) => {
        e.preventDefault();

        if (!title.trim()) {
            return setTitle("");
        }
        console.log(title);
        createTodo(title);
        setTitle("");
    };
    return (
        <form
            onSubmit={handleSubmitCreateTodo}
            className="flex items-center gap-4 overflow-hidden rounded-md bg-white py-4 px-4 transition-all duration-1000 dark:bg-gray-800"
        >
            <span className="inline-block h-5 w-5 rounded-full border-2"></span>
            <input
                type="text"
                className="w-full border-none text-gray-400 outline-none transition-all duration-1000 dark:bg-gray-800"
                placeholder="Create a new Todo..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
        </form>
    );
};

export default TodoCreate;
