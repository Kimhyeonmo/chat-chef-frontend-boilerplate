import React from "react";
import { useNavigate } from "react-router-dom"; // react-router-dom에서 useNavigate 훅을 가져옵니다.
const PrevButton = () => {
  // logic
  const navigate = useNavigate(); // 컴포넌트 내부 최상단에 선언
  const hadlePrev = () => {
    console.log("이전 페이지로 이동");
    navigate(-1); // 이전 페이지로 이동
  };

  // view
  return (
    <button
      type="button"
      className="text-none absolute top-6 left-4 px-4 py-2"
      onClick={hadlePrev}
    >
      <img src="./images/arrow-prev.svg" alt="뒤로가기" className="block" />
      뒤로가기
    </button>
  );
};

export default PrevButton;
