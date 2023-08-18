import './App.css';
import { useState } from 'react';
import Task from './Task';

function App() {
    const [tasks, setTasks] = useState([
        { text: 'Go to gym', checked: true },
        { text: 'Drink coffee', checked: false }
    ])

    const handleSubmit = (event) => {
        event.preventDefault()
        const newArray = { text: event.target[0].value, checked: false }
        setTasks([...tasks, newArray])
        // TODO Add a new task to the tasks array
        // HINT: Spread the current tasks array into a new array, add this new task on there
        // then update the state of tasks
    }

    const handleDelete = (index) => {
        const newArray = tasks.filter((elem, i) => index !== i)
        setTasks(newArray)
        // TODO Using the provided index, remove the task from the array and update
        // state to re-render the component
        // HINT: .filter()
    }

    const handleUpdate = (index, checked) => {
        const newArray = tasks.map((elem, i) => 
          index === i ? { ...elem, checked} : elem)
        setTasks(newArray)
        // TODO Find the task by the provided index
        // Change the checked property on the task
        // Update the state array to re-render the component
        // HINT: .map() or access by index
    }

  return (
    <div className='app'>
        <main>
            <form onSubmit={handleSubmit}>
                <input type="text" name="task" />
                <button type="submit">add task</button>
            </form>

            {
                tasks.map((todoItem, index) => {
                    return (
                        <div>
                          <Task index={index} todoItem={todoItem} handleDelete={handleDelete} handleUpdate={handleUpdate}/>
                        </div>
                    )
                })
            }
        </main>
    </div>
  );
}

export default App;