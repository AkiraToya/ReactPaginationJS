export default function Todos({todos}){
    return (
        <div className="todo-list-container">
            {todos.map((todo, index) =>
                <div className="todo-container" key={index}>
                    <div className="todo-name">{todo.title}</div>
                </div>
            )}

        </div>
    );
}