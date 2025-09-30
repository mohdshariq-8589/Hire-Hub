import React, { useMemo, useCallback } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Button } from "./ui/button";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSearchedQuery } from "@/redux/jobSlice";

const category = [
  "Frontend Developer",
  "Backend Developer",
  "Data Science",
  "Graphic Designer",
  "FullStack Developer",
  "Mobile Developer",
  "AI Engineer",
  "UI/UX Designer",
];

const CategoryCarousel = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchJobHandler = useCallback(
    (query) => {
      dispatch(setSearchedQuery(query));
      navigate("/browse");
    },
    [dispatch, navigate]
  );

  const categoryButtons = useMemo(
    () =>
      category.map((cat) => (
        <CarouselItem
          key={cat}
          className="basis-1/1 sm:basis-1/2 md:basis-1/2 lg:basis-1/3 flex justify-center"
        >
          <Button
            onClick={() => searchJobHandler(cat)}
            variant="outline"
            className="rounded-full px-6 py-2 text-sm sm:text-base font-medium 
                       border-gray-300 shadow-sm hover:border-blue-500 hover:text-blue-600 
                       transition-all duration-200 ease-in-out truncate w-full"
          >
            {cat}
          </Button>
        </CarouselItem>
      )),
    [searchJobHandler]
  );

  return (
    <div className="w-full bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-center text-2xl md:text-3xl font-bold text-gray-800 mb-8">
          Explore Job Categories
        </h2>
        <Carousel className="w-full">
          <CarouselContent className="gap-4">{categoryButtons}</CarouselContent>
          <CarouselPrevious className="left-0 md:-left-8" />
          <CarouselNext className="right-0 md:-right-8" />
        </Carousel>
      </div>
    </div>
  );
};

export default CategoryCarousel;
