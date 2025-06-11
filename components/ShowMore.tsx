"use client";

import { useRouter } from "next/navigation";

// Update the path below to the correct relative path where ShowMoreProps is located
import { ShowMoreProps } from "../types";
// Update the path below to the correct relative path where updateSearchParams is located
// Update the path below to the correct relative path where updateSearchParams is located
import { updateSearchParams } from "../utils/updateSearchParams";
// Update the path below to the correct relative path where CustomButton is located
import CustomButton from "./CustomButton";

const ShowMore = ({ pageNumber, isNext }: ShowMoreProps) => {
  const router = useRouter();

  const handleNavigation = () => {
    // Calculate the new limit based on the page number and navigation type
    const newLimit = (pageNumber + 1) * 10;

    // Update the "limit" search parameter in the URL with the new value
    const newPathname = updateSearchParams("limit", `${newLimit}`);
    
    router.push(newPathname);
  };

  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <CustomButton
          btnType="button"
          title="Show More"
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
};

export default ShowMore;