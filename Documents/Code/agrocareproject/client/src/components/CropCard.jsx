import React from 'react'
import { useNavigate } from 'react-router-dom';

export function CropCard({ crop }) {

  const navigate = useNavigate()

  return (
    <div className='bg-zinc-100 p-3 hover:bg-zinc-200 hover:cursor-pointer'
    
    onClick={()=>{
      navigate(`/crops/${crop.id}`)
    }}

    >
        <h1 className='font-bold uppercase'>{crop.name}</h1>
        <p className='text-slate-400'>{crop.description}</p>
        <hr />
    </div>
  );
}

