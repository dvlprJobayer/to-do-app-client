import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';
import Task from '../Task/Task';



const AllTask = () => {

    const { data: allTask, isLoading, refetch } = useQuery('allTask', () => fetch('https://quiet-thicket-58981.herokuapp.com/task').then(res =>
        res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='container mx-auto mt-4'>
            <h1 className='text-center text-4xl text-success'>All Task {allTask?.length}</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {
                    allTask?.map(task => <Task key={task._id} task={task} refetch={refetch} />)
                }
            </div>
        </div>
    );
};

export default AllTask;