import React from 'react';

const AddTask = () => {

    const handleSubmit = event => {
        event.preventDefault();
        const taskName = event.target.taskName.value;
        const taskDescription = event.target.taskDescription.value;
        const task = {
            taskName,
            taskDescription
        }
        if (taskName && taskDescription) {
            fetch('https://quiet-thicket-58981.herokuapp.com/add-task', {
                method: 'POST',
                headers: {
                    'content-Type': 'application/json'
                },
                body: JSON.stringify(task)
            }).then(res => res.json()).then(data => {
                console.log(data);
                event.target.reset();
            })
        }
    }

    return (
        <div className='container mx-auto mt-8'>
            <h1 className='text-center text-4xl text-success'>Add a Task</h1>
            <form className='mx-auto mt-10 py-8 card max-w-md bg-base-100 shadow-xl' onSubmit={handleSubmit}>
                <div className="form-control w-full max-w-xs mx-auto mb-4">
                    <label className="label">
                        <span className="label-text">Task Name:</span>
                    </label>
                    <input name='taskName' type="text" placeholder="Task name" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs mx-auto mb-4">
                    <label className="label">
                        <span className="label-text">Task Description:</span>
                    </label>
                    <textarea name="taskDescription" id="" cols="30" rows="5" className="border-2 w-full max-w-xs p-4 rounded-lg"></textarea>
                </div>
                <input className="btn btn-success max-w-xs mx-auto text-white w-full" type="submit" value="Add Task" />
            </form>
        </div>
    );
};

export default AddTask;