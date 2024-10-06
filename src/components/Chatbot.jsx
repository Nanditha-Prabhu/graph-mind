import React from 'react'
import Sidebar from './Sidebar';
import InnerSidebar from './InnerSidebar';
import ChatInterface from './ChatInterface';
import Header from './Header';

export default function Chatbot() {
  return (
    <>
     <div className="min-h-screen bg-gray-100 flex">
        <Sidebar />
        <div className="flex flex-col">
          <Header />
        <h1 className=" text-3xl font-bold ml-8 mt-8">Chatbot</h1>
          <div className=" flex flex-row h-full">
            <InnerSidebar />
            <ChatInterface />
          </div>
        </div>
      </div> 
    </>
  )
}
