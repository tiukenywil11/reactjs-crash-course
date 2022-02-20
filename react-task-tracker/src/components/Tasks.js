// Importing a hook called useState to be able to use states
import { useState } from 'react'

/*
--  Example tasks, for testing usage. (This should be part of states)
const tasks = [
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 4th at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Meeting at School',
        day: 'Feb 6th at 1:30pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Food Shopping',
        day: 'Feb 5th at 2:30pm',
        reminder: false,
    }
]
*/

export const Tasks = () => {
    // Adding states to the array, 'setTasks' is a function to update the states
    // States are immutable, and cannot be directly changed (e.g. cannot use tasks.push())
    // To be able to change the state, call setTasks([...tasks], {})
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Doctors Appointment',
            day: 'Feb 4th at 2:30pm',
            reminder: true,
        },
        {
            id: 2,
            text: 'Meeting at School',
            day: 'Feb 6th at 1:30pm',
            reminder: true,
        },
        {
            id: 3,
            text: 'Food Shopping',
            day: 'Feb 5th at 2:30pm',
            reminder: false,
        }
    ])

    // Using map function to list out the details of the list
    return (
        <div>
            {tasks.map((task) => (
                <h3 key={task.id}>{task.text}</h3>
            ))}
        </div>
    )
}

export default Tasks