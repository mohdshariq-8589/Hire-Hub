import React, { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { Avatar, AvatarImage } from "../ui/avatar";
import { LogOut, User2, Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/constant";
import { setUser } from "@/redux/authSlice";
import { toast } from "sonner";

const Navbar = () => {
  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${USER_API_END_POINT}/logout`, {
        withCredentials: true,
      });
      if (res.data.success) {
        dispatch(setUser(null));
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Logout failed");
    }
  };

  const menuItems =
    user && user.role === "recruiter" ? (
      <>
        <li>
          <Link
            to="/admin/companies"
            onClick={() => setMenuOpen(false)}
            className="hover:text-blue-600 transition-colors"
          >
            Companies
          </Link>
        </li>
        <li>
          <Link
            to="/admin/jobs"
            onClick={() => setMenuOpen(false)}
            className="hover:text-blue-600 transition-colors"
          >
            Jobs
          </Link>
        </li>
      </>
    ) : (
      <>
        <li>
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="hover:text-blue-600 transition-colors"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/jobs"
            onClick={() => setMenuOpen(false)}
            className="hover:text-blue-600 transition-colors"
          >
            Jobs
          </Link>
        </li>
        <li>
          <Link
            to="/browse"
            onClick={() => setMenuOpen(false)}
            className="hover:text-blue-600 transition-colors"
          >
            Browse
          </Link>
        </li>
      </>
    );

  return (
    <div className=" fixed top-0 left-0 w-full z-50 bg-gray-50 shadow-md border border-gray-200">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16 px-4 sm:px-6 lg:px-8">
        <Link to="/">
          <h1 className="text-3xl font-extrabold text-blue-600 tracking-tight">
            Hire<span className="text-orange-500">Hub</span>
          </h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          <ul className="flex font-medium items-center gap-5">{menuItems}</ul>
          {!user ? (
            <div className="flex items-center gap-2">
              <Link to="/login">
                <Button variant="outline">Login</Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  Signup
                </Button>
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage
                    src={user?.profile?.profilePhoto}
                    alt="user-avatar"
                  />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="flex gap-3">
                  <Avatar>
                    <AvatarImage
                      src={user?.profile?.profilePhoto}
                      alt="user-avatar"
                    />
                  </Avatar>
                  <div>
                    <h4 className="font-medium">{user?.fullname}</h4>
                    <p className="text-sm text-muted-foreground">
                      {user?.profile?.bio}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col mt-4 text-gray-600 gap-2">
                  {user.role === "student" && (
                    <div className="flex items-center gap-2">
                      <User2 size={18} />
                      <Link to="/profile">
                        <Button variant="link">View Profile</Button>
                      </Link>
                    </div>
                  )}
                  <div className="flex items-center gap-2">
                    <LogOut size={18} />
                    <Button onClick={logoutHandler} variant="link">
                      Logout
                    </Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-gray-50 border-t border-gray-200 px-4 py-3 space-y-4">
          {user && (
            <div className="flex items-center gap-3 border-b pb-3">
              <Avatar>
                <AvatarImage
                  src={user?.profile?.profilePhoto}
                  alt="user-avatar"
                />
              </Avatar>
              <div>
                <h4 className="font-medium">{user?.fullname}</h4>
                <p className="text-sm text-gray-500">{user?.profile?.bio}</p>
              </div>
            </div>
          )}

          <ul className="flex flex-col gap-3">{menuItems}</ul>

          <div>
            {!user ? (
              <div className="flex flex-col gap-2">
                <Link to="/login" onClick={() => setMenuOpen(false)}>
                  <Button variant="outline" className="w-full">
                    Login
                  </Button>
                </Link>
                <Link to="/signup" onClick={() => setMenuOpen(false)}>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full">
                    Signup
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="mt-3 flex flex-col gap-3">
                {user.role === "student" && (
                  <Link to="/profile" onClick={() => setMenuOpen(false)}>
                    <Button variant="outline" className="w-full">
                      View Profile
                    </Button>
                  </Link>
                )}
                <Button
                  onClick={() => {
                    logoutHandler();
                    setMenuOpen(false);
                  }}
                  variant="destructive"
                  className="w-full"
                >
                  Logout
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
