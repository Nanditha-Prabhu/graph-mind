import React from 'react'
import LiveBarChart from './LiveBarChart'

export default function RelevancyChart() {
  return (
    <>
     <div className=" flex flex-col w-auto bg-white shadow-lg m-8  p-4  rounded-lg">
     <h3 className=' font-bold mb-4 text-xl text-blue-500'>Relevancy Metrics</h3>
     <LiveBarChart/>
     </div> 
    </>
  )
}
