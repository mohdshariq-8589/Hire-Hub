import React from "react";
import LatestJobCards from "./LatestJobCards";
import { useSelector } from "react-redux";

const LatestJobs = () => {
  const { allJobs } = useSelector((store) => store.job);

  if (!allJobs || allJobs.length === 0) {
    return (
      <div className="max-w-7xl mx-auto my-20 text-center text-gray-500 px-4">
        No Job Available
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto my-20 px-4">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-center md:text-left">
        <span className="text-blue-600">Latest & Top </span> Job Openings
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {allJobs?.slice(0, 6).map((job) => (
          <LatestJobCards key={job?._id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default LatestJobs;
