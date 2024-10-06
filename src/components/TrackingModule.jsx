import React from 'react'
import Sidebar from './Sidebar';
import InnerSidebar from './InnerSidebar';
import ChatInterface from './ChatInterface';
import Header from './Header';
import FilterSidebar from './FilterSidebar';
import SalesAnalytics from './SalesAnalytics';

export default function TrackingModule() {
  return (
    <>
     <div className="min-h-screen bg-gray-100 flex">
        <Sidebar />
        <div className="flex flex-col">
          <Header />
        <h1 className=" text-3xl font-bold ml-8 mt-8">Tracking Module</h1>
          <div className=" flex flex-row h-full">
            <FilterSidebar />
            <div className='flex flex-col max-w-[10/12]'>
                <h4>ID: 1001</h4>
                <SalesAnalytics/>
            </div>
            {/* <ChatInterface/> */}
          </div>
        </div>
      </div> 
    </>
  )
}

