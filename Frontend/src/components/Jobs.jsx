import React, { useEffect, useState, useMemo } from "react";
import Navbar from "./shared/Navbar";
import FilterCard from "./FilterCard";
import Job from "./Job";
import { useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { Sliders } from "lucide-react"; // filter icon

const Jobs = () => {
  const { allJobs, searchedQuery } = useSelector((store) => store.job);
  const [filterJobs, setFilterJobs] = useState(allJobs);
  const [showFilter, setShowFilter] = useState(false); // toggle state

  // Filtering jobs
  useEffect(() => {
    if (searchedQuery) {
      const filtered = allJobs.filter((job) =>
        [job.title, job.description, job.location].some((field) =>
          field.toLowerCase().includes(searchedQuery.toLowerCase())
        )
      );
      setFilterJobs(filtered);
    } else {
      setFilterJobs(allJobs);
    }
  }, [allJobs, searchedQuery]);

  const isJobsEmpty = useMemo(() => filterJobs.length === 0, [filterJobs]);

  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto mt-5 px-4">
        {/* Toggle button for mobile */}
        <div className="flex justify-end mb-4 md:hidden">
          <Button
            onClick={() => setShowFilter(!showFilter)}
            className="flex items-center gap-2"
          >
            <Sliders className="h-4 w-4" /> Filter
          </Button>
        </div>

        <div className="flex flex-col md:flex-row gap-5">
          {/* Sidebar */}
          {showFilter && (
            <div className="w-full md:w-1/4">
              <FilterCard />
            </div>
          )}

          <div className="flex-1 h-[88vh] overflow-y-auto pb-5">
            {isJobsEmpty ? (
              <span className="text-gray-500">No jobs found.</span>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <AnimatePresence>
                  {filterJobs.map((job) => (
                    <motion.div
                      key={job?._id}
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Job job={job} />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
