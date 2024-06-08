import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
} from "react";
import { IChat } from "../components/absolutes/chatBtn";

interface Ctx {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  msg: string;
  setMsg: React.Dispatch<React.SetStateAction<string>>;
  chat: IChat[];
  setChat: React.Dispatch<React.SetStateAction<IChat[]>>;
  loadingChat: boolean;
  setLoadingChat: React.Dispatch<React.SetStateAction<boolean>>;
  runned: React.MutableRefObject<boolean>;
  newMessage: (msg: string) => void;
}

const ChatContext = createContext<Ctx | null>(null);

interface Props {
  children: React.ReactNode;
}

export const ChatContextProvider = ({ children }: Props) => {
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState("");
  const [chat, setChat] = useState<IChat[]>([]);
  const [loadingChat, setLoadingChat] = useState(false);
  const runned = useRef(false);

  const newMessage = useCallback((msg: string) => {
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
  }, []);

  const value = useMemo(
    () => ({
      chat,
      loadingChat,
      msg,
      open,
      setChat,
      setLoadingChat,
      setMsg,
      setOpen,
      runned,
      newMessage,
    }),
    [
      chat,
      loadingChat,
      msg,
      open,
      setChat,
      setLoadingChat,
      setMsg,
      setOpen,
      runned,
      newMessage,
    ]
  );

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
};

export const useChatContext = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error("this contexts must be used whitin a ChatContextProvider");
  }
  return context;
};

/* export const useChatContext = create<Ctx>((set) => ({
  open: false,
  setOpen: (data) => set((old) => ({ ...old, open: data })),
  msg: "",
  setMsg: (data) => set((old) => ({ ...old, msg: data })),
  chat: [],
  setChat: (data) =>
    set((old) => ({
      ...old,
      chat: typeof data === "function" ? data(old.chat) : data,
    })),
  loadingChat: false,
  setLoadingChat: (data) => set((old) => ({ ...old, loadingChat: data })),
  runned: false,
  setRunned: (data) => set((old) => ({ ...old, runned: data })),
  newMessage: (msg) =>
    set((old) => ({
      ...old,
      runned: false,
      open: true,
      chat: [
        ...old.chat,
        {
          me: true,
          content: msg.trim(),
        },
      ],
      loadingChat: true,
    })),
})); */
