import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import RelevancyChart from './RelevancyChart'
import MetricTable from './MetricTable'

export default function Dashboard() {
  return (
    <>
     <div className="min-h-screen bg-gray-100 flex">
        <Sidebar />
        <div className="flex flex-col">
          <Header />
        <h1 className=" text-3xl font-bold ml-8 mt-8">Dashboard</h1>
          <div className=" flex flex-col">
            <RelevancyChart/>
            <MetricTable/>
          </div>
        </div>
      </div> 
    </>
  )
}
