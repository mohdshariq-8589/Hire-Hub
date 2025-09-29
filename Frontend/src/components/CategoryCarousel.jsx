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
];

const CategoryCarousel = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Memoize click handler for performance
  const searchJobHandler = useCallback(
    (query) => {
      dispatch(setSearchedQuery(query));
      navigate("/browse");
    },
    [dispatch, navigate]
  );

  // Memoize category buttons to prevent unnecessary re-renders
  const categoryButtons = useMemo(
    () =>
      category.map((cat) => (
        <CarouselItem key={cat} className="md:basis-1/2 lg-basis-1/3">
          <Button
            onClick={() => searchJobHandler(cat)}
            variant="outline"
            className="rounded-full truncate"
          >
            {cat}
          </Button>
        </CarouselItem>
      )),
    [searchJobHandler]
  );

  return (
    <div className="overflow-x-auto">
      <Carousel className="w-full max-w-xl mx-auto my-20">
        <CarouselContent>{categoryButtons}</CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default CategoryCarousel;
