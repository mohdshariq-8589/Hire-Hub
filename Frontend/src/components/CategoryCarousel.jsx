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

const categories = [
  "Frontend Developer",
  "Backend Developer",
  "Data Science",
  "Graphic Designer",
  "FullStack Developer",
  "Mobile Developer",
  "DevOps Engineer",
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
      categories.map((cat) => (
        <CarouselItem
          key={cat}
          className="flex-shrink-0 px-2 md:px-3 lg:px-4 w-40 sm:w-48 md:w-52"
        >
          <Button
            onClick={() => searchJobHandler(cat)}
            variant="outline"
            className="rounded-full truncate w-full whitespace-nowrap"
          >
            {cat}
          </Button>
        </CarouselItem>
      )),
    [searchJobHandler]
  );

  return (
    <div className="relative w-full max-w-6xl mx-auto my-10">
      <Carousel className="overflow-x-auto scroll-smooth">
        <CarouselContent className="flex gap-3">
          {categoryButtons}
        </CarouselContent>
        <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 z-10" />
        <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 z-10" />
      </Carousel>
    </div>
  );
};

export default CategoryCarousel;
