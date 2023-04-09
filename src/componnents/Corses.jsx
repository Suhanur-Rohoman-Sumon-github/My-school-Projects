import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleCards from './SingleCards';
import { addToDB } from '../utilite/fakedb';

const Corses = () => {
    const corses = useLoaderData()
    const setData = (id)=>{
        console.log(id)
        addToDB(id)
    }
    return (
        <div className='w-10/12 mx-auto grid grid-cols-3 gap-2 p-4'>
            {
                corses.map(corse => <SingleCards 
                key={corse.id}
                corse = {corse}
                setData={setData}
                ></SingleCards> )
            }
        </div>
    );
};

export default Corses;