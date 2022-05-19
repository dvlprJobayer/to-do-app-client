import React from 'react';

const Task = ({ task, refetch }) => {
    const updateTask = id => {
        fetch(`https://quiet-thicket-58981.herokuapp.com/task/${id}`, {
            method: 'PATCH',
        }).then(res => res.json()).then(data => {
            console.log(data);
            refetch();
        })
    }

    const deleteTask = id => {
        fetch(`https://quiet-thicket-58981.herokuapp.com/task/${id}`, {
            method: 'DELETE',
        }).then(res => res.json()).then(data => {
            console.log(data);
            refetch();
        })
    }

    return (
        <div class="card max-w-md bg-base-100 shadow-xl">
            <div class="card-body">
                <h2 style={task.complete && { textDecoration: 'lineThrough' }} class="card-title">{task.taskName}</h2>
                <p>{task.taskDescription}</p>
                {task.complete && <p className='text-center text-success'>Task Completed</p>}
                <div class="card-actions justify-center">
                    <button onClick={() => updateTask(task._id)} class="btn btn-success">Update</button>
                    <button onClick={() => deleteTask(task._id)} class="btn btn-error">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default Task;