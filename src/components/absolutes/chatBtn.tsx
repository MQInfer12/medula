import { useRef, useState } from "react";
import { twMerge } from "../../utils/twMerge";
import IconChat from "../icons/iconChat";
import Overlay from "../react/overlay";
import Chat from "../react/chat";

export interface IChat {
  me: boolean;
  content: string;
}

const ChatBtn = () => {
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState("");
  const [chat, setChat] = useState<IChat[]>([]);
  const [loadingChat, setLoadingChat] = useState(false);
  const runned = useRef(false);

  const newMessage = (msg: string) => {
    runned.current = false;
    setOpen(true);
    setChat((old) => [
      ...old,
      {
        me: true,
        content: msg.trim(),
      },
    ]);
    setLoadingChat(true);
  };

  return (
    <>
      <button
        className={twMerge(
          "w-16 aspect-square absolute bottom-4 right-4 p-2 rounded-lg border-2 border-black/20 text-white",
          "bg-second"
        )}
        onClick={() => setOpen(true)}
      >
        <IconChat />
      </button>
      <Overlay
        width="900px"
        state={{
          close: () => setOpen(false),
          open: open,
        }}
      >
        <Chat
          chat={chat}
          close={() => setOpen(false)}
          loadingChat={loadingChat}
          msg={msg}
          setLoadingChat={setLoadingChat}
          setMsg={setMsg}
          newMessage={newMessage}
          setChat={setChat}
          runned={runned}
        />
      </Overlay>
    </>
  );
};

export default ChatBtn;
