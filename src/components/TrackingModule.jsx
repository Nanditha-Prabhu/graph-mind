import React from 'react'
import Sidebar from './Sidebar';
import InnerSidebar from './InnerSidebar';
import ChatInterface from './ChatInterface';
import Header from './Header';
import FilterSidebar from './FilterSidebar';
import SalesAnalytics from './SalesAnalytics';
import History from './History';

export default function TrackingModule() {
  return (
    <>
     <div className="min-h-screen bg-gray-100 flex ">
        <Sidebar />
        <div className="flex flex-col w-full">
          <Header />
        <h1 className=" text-3xl font-bold ml-8 mt-8">Tracking Module</h1>
          <div className=" flex flex-row h-full">
            <FilterSidebar />
            <div className='flex flex-col w-full px-4 pb-4 my-8 mx-auto'>
                <h4 className='mx-4 mb-2 p-1 w-auto font-medium'>ID: 1001</h4>
                <SalesAnalytics/>
                <History/>
            </div>
            {/* <ChatInterface/> */}
          </div>
        </div>
      </div> 
    </>
  )
}

