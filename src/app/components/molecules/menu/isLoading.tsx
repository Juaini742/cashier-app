import {ProductType} from "@/app/constants";
import Image from "next/image";
import React from "react";
import {Button} from "../../atoms";

type Props = {
  filterProducts: ProductType[];
  isLoading: boolean;
};

function IsLoading({filterProducts, isLoading}: Props) {
  if (isLoading) {
    return (
      <div className="flex justify-center flex-wrap gap-5">
        {[...Array(10)]?.map((_, index) => (
          <div key={index} className="bg-gray-200 p-4 rounded-md animate-pulse">
            <div className="w-full flex flex-col justify-center flex-wrap gap-5 p-4">
              <div className="flex items-center gap-2">
                <div className="p-1 rounded-lg flex items-center justify-center">
                  <div className="w-[90px] h-[90px] rounded-full bg-gray-300" />
                </div>
                <div className="w-32 flex flex-col gap-2">
                  <span className="text-sm bg-gray-300 rounded-full w-full py-2"></span>
                  <span className="text-sm bg-gray-300 rounded-full w-full py-2"></span>
                  <span className="text-sm bg-gray-300 rounded-full w-full py-2"></span>
                </div>
              </div>
              <div className="flex gap-2 justify-center w-full">
                <span className="text-sm bg-gray-300 rounded-full w-full py-2"></span>
                <span className="text-sm bg-gray-300 rounded-full w-full py-2"></span>
                <span className="text-sm bg-gray-300 rounded-full w-full py-2"></span>
              </div>
              <Button
                variant="disable"
                className="px-5 py-2 cursor-not-allowed"
              >
                Add to billing
              </Button>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return null;
}

export default IsLoading;
