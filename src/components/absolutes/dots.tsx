import { CSSProperties, useMemo } from "react";
import Spinner from "../icons/spinner";

interface Props {
  page: number;
}

const Dots = ({ page }: Props) => {
  const styles: CSSProperties[] = useMemo(
    () => [
      {
        width: "800px",
        top: "50%",
        left: "75%",
        transform: "translate(-50%, -50%)",
      },
      {
        width: "500px",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      },
      {
        width: "700px",
        top: "50%",
        left: "25%",
        transform: "translate(-50%, -50%)",
      },
      {
        width: "1200px",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      },
      {
        width: "900px",
        top: "50%",
        left: "80%",
        transform: "translate(-50%, -50%)",
      },
      {
        width: "2000px",
        top: "0%",
        left: "20%",
        transform: "translate(-50%, -50%)",
      },
      {
        width: "1500px",
        top: "100%",
        left: "80%",
        transform: "translate(-50%, -50%)",
      },
      {
        width: "2200px",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      },
    ],
    []
  );

  return (
    <div
      className="aspect-square absolute transition-all duration-500 pointer-events-none z-[-10] opacity-10"
      style={styles[page / 2]}
    >
      <Spinner />
    </div>
  );
};

export default Dots;
