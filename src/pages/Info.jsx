import React, { useState } from "react";
import PrevButton from "../components/PrevButton";
import InfoInput from "../components/InfoInput";
import AddButton from "../components/AddButton";
import Button from "../components/Button";
import Title from "../components/Title";
import { useNavigate } from "react-router-dom"; // react-router-dom에서 useNavigate 훅을 가져옵니다.
const Info = () => {
  // logic
  const navigate = useNavigate(); // 컴포넌트 내부 최상단에 선언
  // TODO: set함수 추가하기
  const [ingredientList, setIngredientList] = useState([]); // 사용자가 입력할 재료 목록
  console.log("🚀 ~ Info ~ ingredientList:", ingredientList)

  const addIngredient = () => {
    const id = Date.now
    const newIngredient = {
      //  id: id,
      id,
      lable: 'ingredient_%{id}',
      text: "재료명",
      value: "",
    };
    setIngredientList([...ingredientList, newIngredient]);
  };
  console.log("🚀 ~ addIngredient ~ ingredientList:", ingredientList)

  const handleNext = () => {
    console.log("chat페이지로 이동");
  };

  // view
  return (
    <div className="w-full h-full px-6 pt-10 break-keep overflow-auto">
      <i className="w-168 h-168 rounded-full bg-chef-green-500 fixed -z-10 -left-60 -top-104"></i>
      {/* START:뒤로가기 버튼 */}
      <PrevButton />
      {/* END:뒤로가기 버튼 */}
      <div className="h-full flex flex-col">
        <Title
          title="서비스 소개"
          description="이 서비스는 GPT를 활용해 남은 재료로 가능한 요리를 추천합니다."
        />
        {/* START:form 영역 */}
        <div className="mt-20 overflow-auto">
          <form>
            {/* START:input 영역 */}
            <div>
              {ingredientList.map((item) => (
                <InfoInput key={item.id} content={item} />
              ))}
            </div>
            {/* END:input 영역 */}
          </form>
        </div>
        {/* END:form 영역 */}
        {/* START:Add button 영역 */}
        <AddButton onClick={addIngredient} />
        {/* END:Add button 영역 */}
        {/* START:Button 영역 */}
        <Button text="Next" color="bg-chef-green-500" onClick={handleNext} />
        {/* END:Button 영역 */}
      </div>
    </div>
  );
};

export default Info;
