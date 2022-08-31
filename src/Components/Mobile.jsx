import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios';

const Mobile = () => {


const [mob,setMob]= useState([])

    useEffect(()=>{
        
        axios.get('http://backend.adapptonline.com:9002/fetchInternsDetails').then((res)=>{console.log('table ',res.data.mobiles); setMob(res.data.mobiles)})
        console.log(mob);
    },[])

  return (
    <div className='w-full mt-5'>

    <table className='w-full  '>

    <thead className='text-3xl mt-5'>

    <tr className='flex  w-full h-fit justify-evenly bg-black text-white p-3 items-center '>
        <div className='w-1/3'>Brand</div>
        <div className='w-1/3'>Model</div>
        <div className='w-1/3'>Price</div>
        <div className='w-1/3'> Image</div>
        
    </tr>

    </thead>
    

    {
            
        mob.map((mobile)=>(
            <tr className='flex w-full h-fit justify-evenly items-center text-center text-xl mt-5 mb-5 '>
                <div className='w-1/3'>{mobile.Brand}</div>
                <div className='w-1/3'>{mobile.Model}</div>
                <div className='w-1/3'>{mobile.Price}</div>
                <img className='w-1/3'  src={mobile.Image} />
                <div >{}</div>

            </tr>
        ))


    }
          




    </table>

    </div>
  )
}

export default Mobile