import './TodoCounter.css';

function TodoCounter({ total, completed }) {
    return (
        <>
            <h1 className='TodoCounter--one'>Bienvenido a ToDo Tareas</h1>
            <h2 className='TodoCounter--two'>Has completado <span>{completed}</span> de <span>{total}</span> TODOs</h2>
        </>
    );
}

export { TodoCounter };