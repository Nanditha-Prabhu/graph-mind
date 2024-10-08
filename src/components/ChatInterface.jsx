import React, { useState } from "react";
import { FaPrint } from "react-icons/fa";
import { FaMicrophone } from "react-icons/fa";
import { GrAttachment } from "react-icons/gr";
import { FaStar } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

export default function ChatInterface() {
  const handlePrint = () => {
    setTimeout(() => {
      window.print(); // Adding a small delay before triggering print
    }, 100); // 100 milliseconds delay
  };

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [star, setStar] = useState(false);

  const handleStar = () => {
    console.log(star);
    if (!star) {
      setStar(true);
      console.log(star);
    } else {
      setStar(false);
      console.log(star);
    }
  };

  const handleSendMessage = () => {
    if (input.trim() === "") return;

    // Add the user's message to the messages list
    setMessages([...messages, { sender: "user", text: input }]);
    setInput("");

    // Simulate chatbot response
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "bot", text: "Hello! How can I assist you?" },
      ]);
    }, 1000);
  };

  const [queryResponse, setQueryResponse] = useState(
    "Our the past years we can seen an increase demands with Model variant M1 on the other hand the supply is never enough to fulfill user needs. So we need to work on improving our supply chain for M1 model."
  );

  return (
    <div className=" flex flex-col w-10/12 bg-white shadow-lg my-8 mr-8 p-4 rounded-lg h-[35rem]">
      {/* Chat Interface */}
      {/* User Header */}
      <div className="flex justify-between items-center border-b pb-4 mb-4 right ">
        <div className="text-lg font-bold">John Doe</div>
        <div className="flex flex-row gap-3">
          <button onClick={handlePrint} className="text-gray-600 p-2 border">
            <FaPrint />
          </button>
          <button
            onClick={handleStar}
            className={
              star
                ? "text-yellow-400 text-xl p-2 border"
                : "text-gray-600 text-xl p-2 border"
            }
          >
            <FaStar />
          </button>
          <div className="text-gray-600 text-xl p-2 border">
            <MdDelete />
          </div>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto">
        <div className="chat-window ">
          {/* User Query */}
          {/* <div className="flex justify-end mb-4">
            <div className="bg-blue-100 text-blue-700 py-2 px-4 rounded-xl">
              What should be our next market expansion strategy?
            </div>
          </div> */}

          {/* AI Response */}
          {/* <div className="flex justify-start">
            <div className="bg-gray-100 text-gray-700 py-2 px-4 rounded-xl w-3/4">
              {queryResponse}
              <div className="mt-2 text-blue-500 text-sm cursor-pointer">
                View Data Source
              </div>
            </div>
          </div> */}

          {/* Messages*/}
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.sender === "user" ? "justify-end" : "justify-start"
              } mb-4`}
            >
              <div
                className={`max-w-xs p-3 rounded-lg  ${
                  message.sender === "user"
                    ? "bg-blue-100 text-blue-700"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                {message.text}
              {message.sender != "user" ? (
                <div className="mt-2 text-blue-500 text-sm cursor-pointer">
                  View Data Source
                </div>
              ) : (
                <p></p>
              )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Input Area */}
      <div className="sticky inset-x-0 bottom-0">
        <div className=" flex">
          <div className="bg-blue-500 text-white items-center justify-center p-3 rounded-l-lg">
            <FaMicrophone />
          </div>
          <input
            type="text"
            placeholder="Write message..."
            className="w-full border py-2 px-4 focus:outline-none "
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyUp={(e) => {
              if (e.key === "Enter") handleSendMessage();
            }}
          />
          <div className="p-3 text-gray-500 border">
            <GrAttachment />
          </div>
          <button
            onClick={handleSendMessage}
            className="bg-blue-500 text-white w-40 py-2 px-3 rounded-r-lg"
          >
            Send &#11166;
          </button>
        </div>
      </div>
      {/* </main> */}
    </div>
  );
}
