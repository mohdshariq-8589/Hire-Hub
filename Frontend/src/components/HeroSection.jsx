import React, { useState, useCallback } from "react";
import { Button } from "./ui/button";
import { Search } from "lucide-react";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchJobHandler = useCallback(() => {
    if (!query.trim()) return;
    dispatch(setSearchedQuery(query));
    navigate("/browse");
  }, [dispatch, navigate, query]);

  return (
    <div className="text-center bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-5 max-w-4xl mx-auto">
        <span className="mx-auto px-4 py-2 rounded-full bg-gray-100 text-blue-600 font-medium text-sm sm:text-base">
          Your Gateway to Endless Career Opportunities!
        </span>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          Search, Apply & <br />
          Get Your <span className="text-blue-600">Dream Jobs</span>
        </h1>

        <p className="text-gray-700 text-base sm:text-lg md:text-xl mx-auto max-w-3xl">
          HireHub is a modern job portal designed to connect job seekers with
          top companies. Whether you're a fresh graduate looking for your first
          job or an experienced professional aiming for your next big
          opportunity, HireHub makes the process fast, easy, and efficient.
        </p>

        <div className="flex w-full max-w-lg shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-3 mx-auto mt-4">
          <input
            type="text"
            placeholder="Find your dream jobs"
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            className="outline-none border-none w-full text-sm sm:text-base px-2 py-2 rounded-l-full"
          />
          <Button
            onClick={searchJobHandler}
            className="rounded-r-full bg-blue-600 px-4 py-2"
          >
            <Search className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
