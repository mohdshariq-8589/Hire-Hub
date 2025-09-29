import React, { useEffect, useState, useMemo } from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { useParams } from "react-router-dom";
import axios from "axios";
import { APPLICATION_API_END_POINT, JOB_API_END_POINT } from "@/utils/constant";
import { setSingleJob } from "@/redux/jobSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";

const JobDescription = () => {
  const { singleJob } = useSelector((store) => store.job);
  const { user } = useSelector((store) => store.auth);
  const params = useParams();
  const jobId = params.id;
  const dispatch = useDispatch();

  const isInitiallyApplied = useMemo(() => {
    return singleJob?.applications?.some((app) => app.applicant === user?._id);
  }, [singleJob?.applications, user?._id]);

  const [isApplied, setIsApplied] = useState(isInitiallyApplied || false);

  const applyJobHandler = async () => {
    try {
      const res = await axios.get(
        `${APPLICATION_API_END_POINT}/apply/${jobId}`,
        {
          withCredentials: true,
        }
      );

      if (res.data.success) {
        setIsApplied(true);
        dispatch(
          setSingleJob({
            ...singleJob,
            applications: [...singleJob.applications, { applicant: user?._id }],
          })
        );
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  useEffect(() => {
    const fetchSingleJob = async () => {
      try {
        const res = await axios.get(`${JOB_API_END_POINT}/get/${jobId}`, {
          withCredentials: true,
        });
        if (res.data.success) {
          dispatch(setSingleJob(res.data.job));
          setIsApplied(
            res.data.job.applications.some((app) => app.applicant === user?._id)
          );
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchSingleJob();
  }, [jobId, dispatch, user?._id]);

  const postedDate = useMemo(
    () => singleJob?.createdAt?.split("T")[0],
    [singleJob?.createdAt]
  );

  return (
    <div className="max-w-7xl mx-auto my-10 p-4 bg-white rounded-md shadow-md">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <div className="flex-1">
          <h1 className="font-bold text-xl">{singleJob?.title}</h1>
          <div className="flex flex-wrap items-center gap-2 mt-4">
            <Badge className="text-blue-700 font-bold" variant="ghost">
              {singleJob?.position} Positions
            </Badge>
            <Badge className="text-[#F83002] font-bold" variant="ghost">
              {singleJob?.jobType}
            </Badge>
            <Badge className="text-[#7209b7] font-bold" variant="ghost">
              {singleJob?.salary} LPA
            </Badge>
          </div>
        </div>
        <Button
          onClick={isApplied ? null : applyJobHandler}
          disabled={isApplied}
          className={`rounded-lg ${
            isApplied
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-800"
          }`}
        >
          {isApplied ? "Already Applied" : "Apply Now"}
        </Button>
      </div>

      <h1 className="border-b-2 border-b-gray-300 font-medium py-4 mt-6">
        Job Description
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <InfoRow label="Role" value={singleJob?.title} />
        <InfoRow label="Location" value={singleJob?.location || "India"} />
        <InfoRow label="Description" value={singleJob?.description} />
        <InfoRow
          label="Experience"
          value={`${singleJob?.experience || 0} yrs`}
        />
        <InfoRow label="Salary" value={`${singleJob?.salary || 0} LPA`} />
        <InfoRow
          label="Total Applicants"
          value={singleJob?.applications?.length || 0}
        />
        <InfoRow label="Posted Date" value={postedDate || "-"} />
      </div>
    </div>
  );
};

// Helper component for label-value rows
const InfoRow = ({ label, value }) => (
  <div>
    <h1 className="font-bold my-1">
      {label}: <span className="pl-2 font-normal text-gray-800">{value}</span>
    </h1>
  </div>
);

export default JobDescription;
