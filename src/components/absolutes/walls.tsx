import { CSSProperties, useMemo } from "react";

interface Props {
  page: number;
}

const Walls = ({ page }: Props) => {
  const styleWalls: CSSProperties[] = useMemo(
    () => [
      {
        left: "0",
        right: "0",
      },
      {
        left: "0.3",
        right: "0.3",
      },
      {
        left: "0",
        right: "0",
      },
      {
        left: "0.3",
        right: "0.3",
      },
      {
        left: "0.3",
        right: "0.3",
      },
      {
        left: "0.3",
        right: "0.3",
      },
      {
        left: "0.3",
        right: "0.3",
      },
      {
        left: "0.3",
        right: "0.3",
      },
    ],
    []
  );

  return (
    <div className="absolute w-full h-full left-0 top-0 flex justify-between pointer-events-none z-[-10]">
      <div
        className="w-40 h-full transition-all duration-300"
        style={{
          backgroundImage: "url(./images/dots.png)",
          opacity: styleWalls[page / 2].left,
        }}
      ></div>
      <div
        className="w-40 h-full transition-all duration-300"
        style={{
          backgroundImage: "url(./images/dots.png)",
          opacity: styleWalls[page / 2].right,
        }}
      ></div>
    </div>
  );
};

export default Walls;
