import React, { useState } from "react";
import Navbar from "./shared/Navbar";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Contact, Mail, Pen } from "lucide-react";
import { Badge } from "./ui/badge";
import { Label } from "./ui/label";
import AppliedJobTable from "./AppliedJobTable";
import UpdateProfileDialog from "./UpdateProfileDialog";
import { useSelector } from "react-redux";
import useGetAppliedJobs from "@/hooks/useGetAppliedJobs";

const Profile = () => {
  useGetAppliedJobs();
  const [open, setOpen] = useState(false);
  const { user } = useSelector((store) => store.auth);

  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-4 sm:p-8">
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <div className="flex items-center gap-4 flex-wrap">
            <Avatar className="h-24 w-24">
              <AvatarImage
                src="https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg"
                alt="profile"
              />
            </Avatar>
            <div>
              <h1 className="font-medium text-xl break-words">
                {user?.fullname || "Full Name"}
              </h1>
              <p className="text-sm text-gray-600">
                {user?.profile?.bio || "No bio available."}
              </p>
            </div>
          </div>
          <Button
            onClick={() => setOpen(true)}
            className="self-start sm:self-center"
            variant="outline"
          >
            <Pen className="w-4 h-4" />
          </Button>
        </div>

        <div className="my-5 space-y-2">
          <div className="flex items-center gap-3">
            <Mail className="w-4 h-4" />
            <span className="break-all">{user?.email || "NA"}</span>
          </div>
          <div className="flex items-center gap-3">
            <Contact className="w-4 h-4" />
            <span>{user?.phoneNumber || "NA"}</span>
          </div>
        </div>

        <div className="my-5">
          <h1 className="font-semibold">Skills</h1>
          <div className="flex flex-wrap items-center gap-2 mt-1">
            {user?.profile?.skills?.length ? (
              user.profile.skills.map((item, index) => (
                <Badge key={index}>{item}</Badge>
              ))
            ) : (
              <span>NA</span>
            )}
          </div>
        </div>

        <div className="grid w-full max-w-sm items-start gap-1.5">
          <Label className="text-md font-bold">Resume</Label>
          {user?.profile?.resume ? (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={user.profile.resume}
              className="text-blue-500 hover:underline break-all"
            >
              {user.profile.resumeOriginalName || "View Resume"}
            </a>
          ) : (
            <span>NA</span>
          )}
        </div>
      </div>

      <div className="max-w-4xl mx-auto bg-white rounded-2xl p-4 sm:p-6">
        <h1 className="font-bold text-lg mb-4">Applied Jobs</h1>
        <AppliedJobTable />
      </div>

      <UpdateProfileDialog open={open} setOpen={setOpen} />
    </div>
  );
};

export default Profile;
