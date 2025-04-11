import React, { useState } from "react";
import PrevButton from "../components/PrevButton";
import InfoInput from "../components/InfoInput";
import AddButton from "../components/AddButton";
import Button from "../components/Button";
import Title from "../components/Title";
import { useNavigate } from "react-router-dom";

const Info = () => {
  const navigate = useNavigate();
  const [ingredientList, setIngredientList] = useState([]);

  const addIngredient = () => {
    const id = Date.now();
    const newIngredient = {
      id,
      label: `ingredient_${id}`,
      text: "재료명",
      value: "",
    };
    setIngredientList([...ingredientList, newIngredient]);
  };

  const handleInputChange = (selectedItem) => {
    setIngredientList((prev) =>
      prev.map((item) =>
        item.id === selectedItem.id ? selectedItem : item
      )
    );
  };

  const handleRemove = (id) => {
    const filtered = ingredientList.filter((item) => item.id !== id);
    setIngredientList(filtered);
  };

  const handleNext = async () => {
    const ingredients = ingredientList
      .map((item) => item.value.trim())
      .filter((val) => val !== "");

    if (ingredients.length === 0) {
      alert("재료를 한 개 이상 입력해주세요!");
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userMessage: `냉장고에 ${ingredients.join(", ")} 있어. 뭐 해먹을 수 있어?`,
        }),
      });

      const result = await response.json();
      console.log("GPT 응답:", result);

      navigate("/chat", {
        state: {
          ingredients,
          result,
        },
      });
    } catch (error) {
      console.error("GPT 통신 실패:", error);
      alert("GPT 요청 중 문제가 발생했습니다.");
    }
  };

  return (
    <div className="relative w-full h-full px-6 pt-10 break-keep overflow-auto overflow-x-hidden">
      <PrevButton />
      <div className="h-full flex flex-col">
        <Title
          title="서비스 소개"
          description="이 서비스는 GPT를 활용해 남은 재료로 가능한 요리를 추천합니다."
        />
        <div className="mt-20 overflow-auto">
          <form>
            {ingredientList.map((item) => (
              <InfoInput
                key={item.id}
                content={item}
                onRemove={handleRemove}
                onChange={handleInputChange}
              />
            ))}
          </form>
        </div>
        <AddButton onClick={addIngredient} />
        <Button text="Next" color="bg-chef-green-500" onClick={handleNext} />
      </div>
    </div>
  );
};

export default Info;
