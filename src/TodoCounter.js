import './TodoCounter.css';

function TodoCounter({ total, completed }) {
    return (
        <>
            <h1>Bienvenido a ToDo Tareas</h1>
            <h2>Has completado <span>{completed}</span> de <span>{total}</span> TODOs</h2>
        </>
    );
}

export { TodoCounter };