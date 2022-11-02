import TodoItem from "./TodoItem.jsx";
const TodoList = ({ todos, removeTodo, updateTodo }) => {
    return (
        <div className="mt-8 overflow-hidden rounded-t-md bg-white">
            {/* Todo List (Todo Item ) Todo Update & Todo Delete */}

            {todos.map((todo) => {
                return (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        removeTodo={removeTodo}
                        updateTodo={updateTodo}
                    />
                );
            })}
        </div>
    );
};

export default TodoList;
