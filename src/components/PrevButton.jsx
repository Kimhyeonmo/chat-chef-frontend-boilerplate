import React from "react";
import { useNavigate } from "react-router-dom";

const PrevButton = () => {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      onClick={() => navigate(-1)}
      className="w-14 h-14 inline-flex justify-center items-center bg-white rounded-full shadow-md fixed top-6 left-6 z-10"
    >
      {/* ✅ 직접 svg 아이콘 삽입 */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        stroke="#333"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
        className="w-6 h-6"
      >
        <line x1="19" y1="12" x2="5" y2="12" />
        <polyline points="12 19 5 12 12 5" />
      </svg>
    </button>
  );
};

export default PrevButton;
