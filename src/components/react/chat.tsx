import React, { ElementRef, MutableRefObject, useEffect, useRef } from "react";
import { IChat } from "../absolutes/chatBtn";
import { twMerge } from "../../utils/twMerge";
import { api_getAIResponse } from "../../services/AIResponse";
import Chatbot from "../icons/monitos/chatbot";

interface Props {
  chat: IChat[];
  setChat: React.Dispatch<React.SetStateAction<IChat[]>>;
  close: () => void;
  msg: string;
  setMsg: React.Dispatch<React.SetStateAction<string>>;
  loadingChat: boolean;
  setLoadingChat: React.Dispatch<React.SetStateAction<boolean>>;
  newMessage: (msg: string) => void;
  runned: MutableRefObject<boolean>;
}

const Chat = ({
  chat,
  close,
  msg,
  setMsg,
  loadingChat,
  setLoadingChat,
  newMessage,
  setChat,
  runned,
}: Props) => {
  const chatRef = useRef<ElementRef<"div">>(null);

  const handleSend = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (msg.trim() === "") return;
    newMessage(msg);
    setMsg("");
  };

  useEffect(() => {
    const getResponse = async () => {
      await api_getAIResponse(chat, (res) => {
        setChat((old) => {
          const lastIndex = old.length - 1;
          const lastMessage = old[lastIndex];
          if (lastMessage.me) {
            return [
              ...old,
              {
                me: false,
                content: res,
              },
            ];
          } else {
            return old.map((v, i) => {
              if (i === lastIndex) {
                return { ...v, content: v.content + res };
              }
              return v;
            });
          }
        });
      });
      setLoadingChat(false);
    };
    if (loadingChat && !runned.current) {
      runned.current = true;
      getResponse();
    }
  }, [loadingChat]);

  useEffect(() => {
    const scrollToBottom = () => {
      if (chatRef.current) {
        chatRef.current.scrollTop = chatRef.current.scrollHeight;
      }
    };
    scrollToBottom();
  }, [chat]);

  return (
    <div className="border-l-2 border-black/30 bg-bg h-full flex flex-col justify-between p-4 gap-2">
      <div className="flex justify-between">
        <button
          onClick={close}
          className="bg-second text-white px-6 py-[2px] rounded-full cursor-pointer hover:opacity-80 transition-all duration-300"
        >
          X
        </button>
        <div className="flex">
          <button
            onClick={() => setChat([])}
            className="bg-second text-white px-6 py-[2px] rounded-full cursor-pointer hover:opacity-80 transition-all duration-300"
          >
            Borrar
          </button>
        </div>
      </div>
      <div
        ref={chatRef}
        className="w-full flex flex-col gap-2 flex-1 overflow-y-scroll overflow-x-hidden px-2 py-2 bg-black/10 border border-black/20 rounded-lg"
      >
        {chat.length > 0 ? (
          chat.map((message, i) => (
            <div
              key={i}
              className={twMerge(
                "w-[600px] max-w-full flex",
                message.me ? "self-end justify-end" : "self-start justify-start"
              )}
            >
              <p
                className={twMerge(
                  "font-bold text-white p-2 px-4 text-sm rounded-b-lg leading-relaxed w-fit animate-[appear_.3s] whitespace-pre-line",
                  message.me
                    ? "bg-first/60 rounded-tl-lg text-end"
                    : "bg-second/60 rounded-tr-lg text-start"
                )}
              >
                {message.content}
              </p>
            </div>
          ))
        ) : (
          <div className="h-full w-full flex flex-col gap-10 items-center justify-center">
            <div className="w-96 opacity-50">
              <Chatbot />
            </div>
            <small className="text-sm font-bold text-black/70">
              Pregunta algo acerca de la aplicación
            </small>
          </div>
        )}
      </div>
      <form className="w-full flex gap-2">
        <input
          autoFocus
          type="text"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          className="border border-black/40 w-full rounded-lg outline-black/40 p-2 text-sm font-bold text-black/60 disabled:bg-gray-100"
        />
        <button
          className="bg-second text-white px-6 py-[2px] rounded-full cursor-pointer hover:opacity-80 transition-all duration-300"
          disabled={loadingChat}
          onClick={handleSend}
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Chat;
