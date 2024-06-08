import { memo } from "react";
import { twMerge } from "../../utils/twMerge";

const Message = memo(({ message, me }: { message: string; me: boolean }) => {
  const original = message;
  const replaced =
    original.includes("[{") && original.includes("}]")
      ? original.replace(
          original.substring(
            original.indexOf("[{"),
            original.indexOf("}]") + 2
          ),
          "[{...MAGIA DE LA PROGRAMACIÓN AQUÍ...}]"
        )
      : message;

  return (
    <div
      className={twMerge(
        "w-[600px] max-w-full flex",
        me ? "self-end justify-end" : "self-start justify-start"
      )}
    >
      <p
        className={twMerge(
          "font-bold text-base text-white p-2 px-4 rounded-b-lg leading-relaxed w-fit animate-[appear_.3s] whitespace-pre-line",
          me
            ? "bg-first/60 rounded-tl-lg text-end"
            : "bg-second/60 rounded-tr-lg text-start"
        )}
      >
        {replaced}
      </p>
    </div>
  );
});

export default Message;
