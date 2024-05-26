import './CreateTodoButton.css'

function CreateTodoButton() {
    return (
        <button className='CreateTodoBUtton'
            onClick={
                (event) =>{
                    console.log(event.target)
                }
        }>+</button>
    );
}

export { CreateTodoButton }