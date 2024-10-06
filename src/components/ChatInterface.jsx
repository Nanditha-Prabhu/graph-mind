import React, { useState } from "react";

export default function ChatInterface() {
  const [queryResponse, setQueryResponse] = useState(
    "Our the past years we can seen an increase demands with Model variant M1 on the other hand the supply is never enough to fulfill user needs. So we need to work on improving our supply chain for M1 model."
  );

  return (
    <div className=" flex flex-col w-10/12 bg-white shadow-lg my-8 mr-8 p-4  rounded-lg">
      {/* Chat Interface */}
      {/* User Header */}
      <div className="flex justify-between items-center border-b pb-4 mb-4 right ">
        <div className="text-lg font-bold">John Doe</div>
        <div className="flex flex-row gap-3">
        <div className="text-gray-600">Star</div>
        <div className="text-gray-600">Print</div>
        <div className="text-gray-600">Delete</div>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto">
        <div className="chat-window ">
          {/* User Query */}
          <div className="flex justify-end mb-4">
            <div className="bg-blue-100 text-blue-700 py-2 px-4 rounded-xl">
              What should be our next market expansion strategy?
            </div>
          </div>

          {/* AI Response */}
          <div className="flex justify-start">
            <div className="bg-gray-100 text-gray-700 py-2 px-4 rounded-xl w-3/4">
              {queryResponse}
              <div className="mt-2 text-blue-500 text-sm cursor-pointer">
                View Data Source
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Input Area */}
      <div className="sticky inset-x-0 bottom-0">
        <div className=" flex">
          <input
            type="text"
            placeholder="Write message..."
            className="w-full border rounded-l-lg py-2 px-4 focus:outline-none focus:border-2 focus:border-blue-300"
          />
          <button className="bg-blue-500 text-white py-2 px-6 rounded-r-lg">
            Send
          </button>
        </div>
      </div>
      {/* </main> */}
    </div>
  );
}
