import { useState } from "react";
import React from "react";
import { FaStar } from "react-icons/fa";

const CardRow = ({ trackingId, description, status }) => {
  // Function to get status label color
  const getStatusClass = (status) => {
    switch (status) {
      case "Improvement":
        return "text-green-500 bg-green-100";
      case "Important":
        return "text-purple-500 bg-purple-100";
      case "Any":
        return "text-blue-500 bg-blue-100";
      default:
        return "text-gray-500 bg-gray-100";
    }
  };

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

  return (
    <div className="flex items-center justify-between bg-white rounded-lg shadow-md p-4 mb-4">
      <div className="flex items-center gap-10">
        {/* Checkbox */}
        <input type="checkbox" className="form-checkbox text-blue-500 h-5 w-5 mr-4" />

        {/* Tracking ID and Description */}
        <div>
          <div className="text-gray-700 font-medium">Tracking ID: {trackingId}</div>
        </div>
        <div>
        <div className="text-gray-500">{description}</div>
        </div>
      </div>

      {/* Status Label */}
      <div className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusClass(status)}`}>
        {status}
      </div>

      {/* Star Icon */}
      <button onClick={handleStar}
            className={
              star
                ? "text-yellow-400 text-xl "
                : "text-gray-300 text-xl "
            }>
      <FaStar />
      </button>
    </div>
  );
};

export default function History() {
  const data = [
    { trackingId: "100", description: "Conversation History", status: "Improvement" },
    { trackingId: "101", description: "Conversation History", status: "Important" },
    { trackingId: "102", description: "Conversation History", status: "Any" },
  ];
  return (
    <>
      <div className=" flex flex-col w-auto  shadow-lg m-4  p-4  rounded-lg bg-blue-100">
        <h3 className=" font-bold mb-4 text-xl text-blue-500">
          Conversation history
        </h3>
        <div className="container mx-auto px-4 py-8">
      {data.map((item, index) => (
        <CardRow
          key={index}
          trackingId={item.trackingId}
          description={item.description}
          status={item.status}
        />
      ))}
    </div>
      </div>
    </>
  );
}
