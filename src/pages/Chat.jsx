import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PrevButton from "../components/PrevButton";
import MessageBox from "../components/MessageBox";

const Chat = () => {
  const location = useLocation();
  const { ingredients, result } = location.state || {};

  const [messages, setMessages] = useState([]);
  const [isMessageLoading, setIsMessageLoading] = useState(false);
  const [value, setValue] = useState("");

  useEffect(() => {
    if (result?.data) {
      const initialMessages = Array.isArray(result.data)
        ? result.data
        : [result.data]; // ✅ 단일 객체인 경우도 배열로 래핑
      setMessages(initialMessages);
    }
  }, [result]);

  if (!ingredients || !result) {
    return (
      <div className="p-10 text-center text-gray-500">
        로딩 중입니다...
      </div>
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!value.trim()) return;

    const userMessage = { role: "user", content: value };
    const updatedMessages = [...messages, userMessage];

    setMessages(updatedMessages);
    setValue("");
    setIsMessageLoading(true);

    try {
      const response = await fetch("http://localhost:8080/message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userMessage,
          messages,
        }),
      });

      const result = await response.json();
      if (result?.data) {
        setMessages((prev) => [...prev, result.data]);
      }
    } catch (err) {
      console.error("GPT 오류:", err);
    } finally {
      setIsMessageLoading(false);
    }
  };

  return (
    <div className="w-full h-full px-6 pt-10 break-keep overflow-auto">
      <PrevButton />
      <div className="h-full flex flex-col">
        {/* 헤더 */}
        <div className="-mx-6 -mt-10 py-7 bg-chef-green-500">
          <span className="block text-xl text-center text-white">맛있는 쉐프</span>
        </div>

        {/* 메시지 박스 */}
        <div className="overflow-auto">
          <MessageBox messages={messages} isLoading={isMessageLoading} />
        </div>

        {/* 입력창 */}
        <div className="mt-auto flex py-5 -mx-2 border-t border-gray-100">
          <form
            id="sendForm"
            className="w-full px-2 h-full"
            onSubmit={handleSubmit}
          >
            <input
              className="w-full text-sm px-3 py-2 h-full block rounded-xl bg-gray-100"
              type="text"
              name="message"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="쉐프에게 물어보세요!"
            />
          </form>
          <button
            type="submit"
            form="sendForm"
            className="w-10 min-w-10 h-10 inline-block rounded-full bg-chef-green-500 text-none px-2 bg-[url('../public/images/send.svg')] bg-no-repeat bg-center"
          >
            보내기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
