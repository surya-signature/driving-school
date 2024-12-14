"use client";
import { useState } from "react";
// import Scanner from "./Scanner";
// import "./driver.css";

import { MdQrCodeScanner } from "react-icons/md";

const DriverView = () => {
  const [students, setStudents] = useState([
    {
      id: 1,
      phone: "1122309488",
      name: "John Doe",
      status: "Joined",
      driver: "John",
      totalclass: "30 Days",
      completedClasses: 20,
      classType: "Days",
    },
    {
      id: 2,
      phone: "122348887",
      name: "Jane Smith",
      status: "Not Joined",
      driver: "Adam",
      totalclass: "45 Hours",
      completedClasses: 10,
      classType: "Hours",
    },
    {
      id: 3,
      phone: "122348887",
      name: "Sujatha",
      status: "Not Joined",
      driver: "Adam",
      totalclass: "50 Days",
      completedClasses: 10,
      classType: "Days",
    },
    {
      id: 4,
      phone: "122348887",
      name: "Jane Smith",
      status: "Not Joined",
      driver: "John",
      totalclass: "50 Hours",
      completedClasses: 10,
      classType: "Hours",
    },
  ]);

  const [isScannerOpen, setIsScannerOpen] = useState(false);
  const [filterDriver, setFilterDriver] = useState("all");

  const handleScan = (data: string | null) => {
    if (data) {
      setStudents((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          phone: "Unknown",
          name: data,
          status: "Joined",
          driver: "New Driver",
          totalclass: "0 Days",
          completedClasses: 0,
          classType: "Days",
        },
      ]);
      setIsScannerOpen(false);
    }
  };

  const handleStatusChange = (id: number, newStatus: string) => {
    setStudents((prev) =>
      prev.map((student) =>
        student.id === id ? { ...student, status: newStatus } : student
      )
    );
  };

  // Filter the table data based on the selected driver
  const filteredStudents =
    filterDriver === "all"
      ? students
      : students.filter((student) => student.driver === filterDriver);
return (
    <div className="dark:bg-[#292e37] pl-4">
      <div className="flex items-center space-x-4 py-5 lg:py-6">
        <h2 className="text-xl font-medium text-slate-800 dark:text-navy-50 lg:text-2xl">
          Attendance
        </h2>
        <div className="hidden h-full py-1 sm:flex">
          <div className="h-full w-px bg-slate-300 dark:bg-navy-600"/>
        </div>
        <ul className="hidden flex-wrap items-center space-x-2 sm:flex">
          <li className="flex items-center space-x-2">
            <a
              className="text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
              href="#"
            >
              Driver
            </a>
            <svg
              x-ignore
              xmlns="http://www.w3.org/2000/svg"
              className="size-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </li>
          <li>Attendance</li>
        </ul>
      </div>
      {/* Driver Filter */}
      <div className="flex justify-end mb-4">
        <select
          value={filterDriver}
          onChange={(e) => setFilterDriver(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
        >
          <option value="all">All Drivers</option>
          {/* Dynamically populate driver options */}
          {[...new Set(students.map((student) => student.driver))].map(
            (driver) => (
              <option key={driver} value={driver}>
                {driver}
              </option>
            )
          )}
        </select>
      </div>
      {/* Scanner Button */}
      <div className="flex justify-between items-center p-4 space-x-4">
        <button
          onClick={() => setIsScannerOpen(true)}
          style={{
            display: "flex",
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          <MdQrCodeScanner style={{ fontSize: "30px", color: "#4f46e5" }} />{" "}
          Scan here
        </button>
      </div>
      {/* {isScannerOpen && (
        <Scanner onScan={handleScan} onClose={() => setIsScannerOpen(false)} />
      )} */}

      {/* Students Table */}
      <div className="max-w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto p-4">
        <div className="overflow-x-auto w-full">
          <table className="min-w-full bg-white border border-gray-200 dark:bg-[#292e37]">
            <thead>
              <tr className="bg-gray-200 text-gray-600 text-left text-sm leading-normal dark:bg-[#292e37] dark:text-[#FFFFFFCC] border-b border-gray-400">
                <th className="py-3 px-6 font-semibold">SL No</th>
                <th className="py-3 px-6 font-semibold">Phone</th>
                <th className="py-3 px-6 font-semibold">Driver Name</th>
                <th className="py-3 px-6 font-semibold">Student Name</th>
                <th className="py-3 px-6 font-semibold">
                  Total Classes (Days/Hours)
                </th>
                <th className="py-3 px-6 font-semibold">Completed Classes</th>
                <th className="py-3 px-6 font-semibold">Pending Classes</th>
                <th className="py-3 px-6 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 text-sm dark:text-[#FFFFFFCC]">
              {filteredStudents.map((item, index) => {
                const totalClasses = parseInt(item.totalclass);
                const pendingClasses = totalClasses - item.completedClasses;
return (
                  <tr key={item.id} className="border-b border-gray-200">
                    <td className="py-3 px-6">{index + 1}</td>
                    <td className="py-3 px-6">{item.phone}</td>
                    <td className="py-3 px-6">{item.driver}</td>
                    <td className="py-3 px-6">{item.name}</td>
                    <td className="py-3 px-6">{`${totalClasses} ${item.classType}`}</td>
                    <td className="py-3 px-6">{`${item.completedClasses} ${item.classType}`}</td>
                    <td className="py-3 px-6">{`${pendingClasses} ${item.classType}`}</td>
                    <td className="py-3 px-6">
                      {item.status === "Not Joined" ? (
                        <button
                          className="bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded"
                          onClick={() => handleStatusChange(item.id, "Joined")}
                        >
                          Drive
                        </button>
                      ) : (
                        <button
                          className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded"
                          onClick={() =>
                            handleStatusChange(item.id, "Not Joined")
                          }
                        >
                          Stop
                        </button>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DriverView;
