import React from "react";

export default function MetricTable() {
  // Sample data for the table
  const data = [
    {
      id: "00001",
      user: "A1",
      score: 3,
      date: "14 Feb 2019",
      type: "Improvement",
      status: "Completed",
    },
    {
      id: "00002",
      user: "A2",
      score: 4,
      date: "14 Feb 2019",
      type: "Suggestion",
      status: "Processing",
    },
    {
      id: "00003",
      user: "A3",
      score: 5,
      date: "14 Feb 2019",
      type: "Feedback",
      status: "Rejected",
    },
    {
      id: "00004",
      user: "A4",
      score: 1,
      date: "14 Feb 2019",
      type: "Any",
      status: "Completed",
    },
  ];

  // Function to return the correct color for the status
  const getStatusClass = (status) => {
    switch (status) {
      case "Completed":
        return "text-green-500 bg-green-100";
      case "Processing":
        return "text-purple-500 bg-purple-100";
      case "Rejected":
        return "text-red-500 bg-red-100";
      default:
        return "text-gray-500 bg-gray-100";
    }
  };

  return (
    <>
      <div className=" flex flex-col w-auto bg-white shadow-lg mx-8 mb-8  p-4  rounded-lg">
        <h3 className=" font-bold mb-4 text-xl text-blue-500">Metrics Table</h3>

        <div className="overflow-x-auto ">
          <table className="min-w-full bg-white border ">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 border-b">ID</th>
                <th className="px-4 py-2 border-b">User</th>
                <th className="px-4 py-2 border-b">Relevancy Score</th>
                <th className="px-4 py-2 border-b">DATE</th>
                <th className="px-4 py-2 border-b">TYPE</th>
                <th className="px-4 py-2 border-b">STATUS</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index} className="text-gray-700 text-center">
                  <td className="px-4 py-2 border-b">{row.id}</td>
                  <td className="px-4 py-2 border-b">{row.user}</td>
                  <td className="px-4 py-2 border-b">{row.score}</td>
                  <td className="px-4 py-2 border-b">{row.date}</td>
                  <td className="px-4 py-2 border-b">{row.type}</td>
                  <td className="px-4 py-2 border-b">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusClass(
                        row.status
                      )}`}
                    >
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
