import React from "react";

const JobPostComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white text-black rounded-2xl px-4 py-3">
      <h1 className="text-4xl font-bold my-2">Post a Job</h1>
      <div className="w-10/12 border-b-2"></div>
      <div className="input-group flex justify-between p-5 text-black font-bold">
        <input type="text" placeholder="Name" className="focus:outline-0" />
        <input
          type="email"
          placeholder="Enter your Email"
          className="focus:outline-0"
        />
        <input
          type="text"
          placeholder="Enter Designation"
          className="focus:outline-0"
        />
      </div>
      <div className="input-group  w-full px-3 py-2 text-black font-bold">
        <textarea
          placeholder="Enter Bio"
          className="w-full p-2 border-2 rounded-2xl h-20"
        ></textarea>
      </div>
      <button className="px-2 py-3 bg-green-500 border-2 rounded-bl-2xl rounded-tr-2xl w-2xl font-bold">Submit</button>
    </div>
  );
};

export default JobPostComponent;
