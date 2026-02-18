import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Pagination = ({ handlePrev, handleNext, pageNo }) => {
  return (
    <div className="flex items-center space-x-4 justify-center mt-6">
      <button
        onClick={handlePrev}
        className="p-2 hover:text-yellow-400"
      >
        <ArrowLeft size={24} />
      </button>

      <div className="text-lg font-semibold">
        {pageNo}
      </div>

      <button
        onClick={handleNext}
        className="p-2 hover:text-yellow-400"
      >
        <ArrowRight size={24} />
      </button>
    </div>
  );
};

export default Pagination;
