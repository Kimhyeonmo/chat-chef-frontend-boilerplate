import React, { useState, useEffect } from "react";
//import MessageBox from "../components/MessageBox";
import PrevButton from "../components/PrevButton";
import InfoInput from "../components/InfoInput";
import AddButton from "../components/AddButton";
import Button from "../components/Button";
import Title from "../components/Title";
const Info = () => {
  // logic

  // TODO: set함수 추가하기
  const [ingredientList, setIngredientList] = useState([]); // 사용자가 입력할 재료 목록
  console.log("🚀 ~ Info ~ ingredientList:", ingredientList)

  const addIngredient = () => {
    const id = Date.now
    const newIngredient = {
      //  id: id,
      id,
      label: `ingredient_${id}`,
      text: "재료명",
      value: "",
    };
    setIngredientList([...ingredientList, newIngredient]);
  };


  const handleNext = () => {
    console.log("chat페이지로 이동");
  };
  //USEEFFECT
  //1. 컴포넌트가 처음 렌더링될 때 한번만실행됩니다.
  useEffect(() => {
    console.log("한번만 실행");
  })
  //2. 페이지내 있는 sate가 변경될 때마다 실행됩니다.
  useEffect(() => {
    console.log("state가 변경될 때마다 실행됨");
  })
  //3. 특정 stata가 변경될 때마다 실행됩니다.
  useEffect(() => {
    console.log("🚀  ingredientList:", ingredientList)
  }, [ingredientList]);

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
