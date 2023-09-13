import React from 'react'
import { useEffect, useState} from 'react'
import { getAllCrops } from '../api/crops.api'
import { CropCard } from './CropCard';

export function CropList() {

    const [crops, setCrops] = useState([]);

    useEffect(() => {
        async function loadCrops() {
            const res = await getAllCrops();
            setCrops(res.data);
        }
        loadCrops();
    }, []);

  return (
  <div className='grid grid-cols-3 gap-6'>
    {crops.map(crop => (
        <CropCard key={ crop.id } crop={crop} />
    ))}
  </div>)
}

