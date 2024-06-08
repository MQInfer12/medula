import { twMerge } from "../../utils/twMerge";
import IconChat from "../icons/iconChat";
import Overlay from "../react/overlay";
import Chat from "../react/chat";
import { useChatContext } from "../../context/chatContext";

export interface IChat {
  me: boolean;
  content: string;
}

const ChatBtn = () => {
  const { setOpen, open } = useChatContext();

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
        <Chat close={() => setOpen(false)} />
      </Overlay>
    </>
  );
};

export default ChatBtn;
