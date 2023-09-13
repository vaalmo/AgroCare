import React from 'react'
import { useEffect } from 'react';
import { useForm } from 'react-hook-form'
import { createCrop, deleteCrop, updateCrop, getCrop } from '../api/crops.api';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast'

export function CropFormPage () {

  const {register, handleSubmit, formState: {errors}, setValue} = useForm();

  const navigate = useNavigate();
  const params = useParams();

  const onSubmit = handleSubmit(async data => {
    if (params.id) {
        await updateCrop(params.id, data)
        toast.success('Crop updated successfully!')
    } else {
        await createCrop(data);
        toast.success('Crop created successfully!')
    }
    navigate("/crops");
  })


   useEffect(() => {
    async function loadCrop() {
        if (params.id){
            const res = await getCrop(params.id)
            setValue('name', res.data.name)
            setValue('scientific_name', res.data.scientific_name)
            setValue('family', res.data.family)
            setValue('gender', res.data.gender)
            setValue('description', res.data.description)
            setValue('soil_type', res.data.soil_type)
            setValue('soil_components', res.data.soil_components)
            setValue('irrigation_parameters', res.data.irrigation_parameters)
            setValue('crop_type', res.data.crop_type)
            setValue('harvest_time', res.data.harvest_time)
            setValue('max_temperature', res.data.max_temperature)
            setValue('min_temperature', res.data.min_temperature)
            setValue('location', res.data.location)
        }
    }
    loadCrop();
   }, [])


  return (
    <div className='max-w-xl mx-auto'>
       <form onSubmit={onSubmit}>
        <input type="text" placeholder="Name" 
        {...register("name", {required: true})}
        className='bg-zinc-100 p-3 rounded-lg block w-full mb-3'
        />
        {errors.name && <span>this field is required</span>}

        <input type="text" placeholder="Scientific name" 
        {...register("scientific_name", {required: true})}
        className='bg-zinc-100 p-3 rounded-lg block w-full mb-3'
        />
        {errors.scientific_name && <span>this field is required</span>}

        <input type="text" placeholder="Family" 
        {...register("family", {required: true})}
        className='bg-zinc-100 p-3 rounded-lg block w-full mb-3'
        />
        {errors.family && <span>this field is required</span>}
        
        <input type="text" placeholder="Gender" 
        {...register("gender", {required: true})}
        className='bg-zinc-100 p-3 rounded-lg block w-full mb-3'
        />
        {errors.gender && <span>this field is required</span>}

        <textarea rows="3" placeholder="Description" 
        {...register("description", {required: true})}
        className='bg-zinc-100 p-3 rounded-lg block w-full mb-3'
        ></textarea>
        
        {errors.description && <span>this field is required</span>}

        <input type="text" placeholder="Soil type" 
        {...register("soil_type", {required: true})}
        className='bg-zinc-100 p-3 rounded-lg block w-full mb-3'
        />
        {errors.soil_type && <span>this field is required</span>}

        <textarea rows="3" placeholder="Soil components" 
        {...register("soil_components", {required: true})}
        className='bg-zinc-100 p-3 rounded-lg block w-full mb-3'
        ></textarea>
        {errors.soil_components && <span>this field is required</span>}

        <textarea rows="3" placeholder="Irrigation parameters" 
        {...register("irrigation_parameters", {required: true})}
        className='bg-zinc-100 p-3 rounded-lg block w-full mb-3'
        ></textarea>
        {errors.irrigation_parameters && <span>this field is required</span>}

        <input type="text" placeholder="Crop type" 
        {...register("crop_type", {required: true})}
        className='bg-zinc-100 p-3 rounded-lg block w-full mb-3'
        />
        {errors.crop_type && <span>this field is required</span>}

        <input type="text" placeholder="Harvest time" 
        {...register("harvest_time", {required: true})}
        className='bg-zinc-100 p-3 rounded-lg block w-full mb-3'
        />
        {errors.harvest_time && <span>this field is required</span>}

        <input type="number" placeholder='Maximum Temperature' min="-100" max="100" 
        {...register("max_temperature", {required: true})}
        className='bg-zinc-100 p-3 rounded-lg block w-full mb-3'
        />
        {errors.max_temperature && <span>this field is required</span>}

        <input type="number" placeholder='Minimum temperature' min="-100" max="100" 
        {...register("min_temperature", {required: true})}
        className='bg-zinc-100 p-3 rounded-lg block w-full mb-3'
        />
        {errors.min_temperature && <span>this field is required</span>}

        <input type="text" placeholder="Location" 
        {...register("location", {required: true})}
        className='bg-zinc-100 p-3 rounded-lg block w-full mb-3'
        />
        {errors.location && <span>this field is required</span>}


        <button className='bg-indigo-300 p-3 rounded-lg block w-full mt-3 mb-6'>Save</button>
        </form> 

        {params.id && <button className='bg-red-300 p-3 rounded-lg w-48 mt-3 mb-6'
        
        onClick={async ()=>{
            const accepted = window.confirm('are you sure u want to delete the crop?')
            if (accepted){
                await deleteCrop(params.id);
                toast.success('Crop deleted successfully!')
                navigate("/crops");
            }
        }} >Delete</button>}
            

    </div>
  )
}