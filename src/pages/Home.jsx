import React from "react";
import Button from "../components/Button";
import Title from "../components/Title";
import { useNavigate } from "react-router-dom"; // react-router-dom에서 useNavigate 훅을 가져옵니다.
const Home = () => {
  // logic
  // async 비동기 함수
  const navigate = useNavigate(); // 컴포넌트 내부 최상단에 선언
  const handleStart = () => {
    navigate("/info"); // info 페이지로 이동
  }
  // const handleStart = async () => {
  //   // alert("handleStart 실행됨");
  //   // console.log("info페이지로 이동");
  //   try {
  //     const response = await fetch("http://localhost:8080/message", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ userMessage: "안녕하세요" })
  //     }
  //     );
  //     const result = await response.json(); // 
  //     console.log("🚀 ~ handleStart ~ result:", result);

  //     if (!response.ok) {
  //       console.error("서버 응답 실패:", response.status);
  //       return;
  //     }
  //     // info로 이동
  //     navigate("/info");
  //   }
  //   catch (error) {
  //     console.error("Error while navigating to info page:", error);
  //   }
  // };
  // view
  return (
    <div className="w-full h-full px-6 pt-10 break-keep overflow-auto">
      <i className="w-168 h-168 rounded-full bg-chef-green-500 fixed -z-10 -left-60 -top-96"></i>
      <div className="fixed left-0 top-1/2 transform -translate-y-1/3 -z-10">
        <img src="./images/hero.svg" alt="hero" />
      </div>
      <div className="h-full flex flex-col">

        <Title
          title="맛있는 쉐프"
          description="냉장고에 있는 재료로 뭐 해먹을지 고민되시나요? 남은 재료만 넣으면 맛있는 레시피가 나옵니다!"
        />

        {/* START:Button 영역 */}
        <Button
          text="Get started"
          color="bg-chef-green-500"
          onClick={handleStart}
        />
        {/* END:Button 영역 */}
      </div>
    </div>
  );
};

export default Home;
