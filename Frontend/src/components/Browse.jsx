import React, { useEffect, useMemo } from "react";
import Navbar from "./shared/Navbar";
import Job from "./Job";
import { useDispatch, useSelector } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";
import useGetAllJobs from "@/hooks/useGetAllJobs";

const Browse = () => {
  useGetAllJobs();
  const { allJobs } = useSelector((store) => store.job);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(setSearchedQuery(""));
    };
  }, [dispatch]);

  const jobsList = useMemo(() => {
    return allJobs.map((job) => <Job key={job._id} job={job} />);
  }, [allJobs]);

  return (
    <div className="min-h-screen bg-gray-50">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-10">
        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl my-6 text-center sm:text-left">
          Search Results ({allJobs.length})
        </h1>

        {allJobs.length === 0 ? (
          <p className="text-center text-gray-500 text-lg mt-10">
            No jobs found.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {jobsList}
          </div>
        )}
      </div>
    </div>
  );
};

export default Browse;
