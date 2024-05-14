import { useEffect, useState, type CSSProperties } from "react";
import Page0 from "./page0";
import Page1 from "./page1";
import Page2 from "./page2";
import Page3 from "./page3";
import Spinner from "../icons/spinner";
import IconChevron from "../icons/iconChevron";
import Page4 from "./page4";
import Page5 from "./page5";
import Page6 from "./page6";
import Page7 from "./page7";
import Navbar from "./navbar";
import { useSearchParams } from "react-router-dom";

const Main = () => {
  const [searchParams, setSearchParams] = useSearchParams({ page: "0" });
  const pageParam = Number(searchParams.get("page")) * 2;
  const [page, setPage] = useState(pageParam);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const savePage = (callback: number | ((prev: number) => number)) => {
      const newPage = typeof callback === "number" ? callback : callback(page);
      setSearchParams(
        (prev) => {
          prev.set("page", String(newPage / 2));
          return prev;
        },
        { replace: true }
      );
    };
    savePage(page);
  }, [page]);

  const [scrolling, setScrolling] = useState(false);

  const pages = [
    <Page0 setPage={setPage} />,
    <Page1 />,
    <Page2 />,
    <Page3 />,
    <Page4 />,
    <Page5 />,
    <Page6 />,
    <Page7 active={page === 14} />,
  ];

  const handleWheel = (event: any) => {
    if (!scrolling) {
      setScrolling(true);
      if (event.deltaY > 0) {
        // Scrolling down
        setPage((oldPage) => Math.min(oldPage + 2, (pages.length - 1) * 2));
      } else {
        // Scrolling up
        setPage((oldPage) => Math.max(oldPage - 2, 0));
      }
      setTimeout(() => {
        setScrolling(false);
      }, 200); // Adjust the delay time here (in milliseconds)
    }
  };

  const styleWalls: CSSProperties[] = [
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
  ];

  const styles: CSSProperties[] = [
    {
      opacity: "0.2",
      width: "800px",
      top: "50%",
      left: "75%",
      transform: "translate(-50%, -50%)",
    },
    {
      opacity: "0.1",
      width: "500px",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    },
    {
      opacity: "0.1",
      width: "700px",
      top: "50%",
      left: "25%",
      transform: "translate(-50%, -50%)",
    },
    {
      opacity: "0.1",
      width: "1200px",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    },
    {
      opacity: "0.1",
      width: "900px",
      top: "50%",
      left: "80%",
      transform: "translate(-50%, -50%)",
    },
    {
      opacity: "0.1",
      width: "2000px",
      top: "0%",
      left: "20%",
      transform: "translate(-50%, -50%)",
    },
    {
      opacity: "0.1",
      width: "1500px",
      top: "100%",
      left: "80%",
      transform: "translate(-50%, -50%)",
    },
    {
      opacity: "0.1",
      width: "2200px",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    },
  ];

  const total = (pages.length - 1) * 2;

  return (
    <>
      <Navbar open={open} setOpen={setOpen} setPage={setPage} />
      <main
        className="flex-1 overflow-hidden relative isolate"
        onWheel={handleWheel}
      >
        {pages.map((p, i) => (
          <div
            key={i}
            className="h-full w-full transition-all duration-500"
            style={{
              transform: `translateY(${i * 100 - page * 100}%)`,
            }}
          >
            {p}
          </div>
        ))}

        {/* SIDEBARS */}
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

        {/* PROGRESS BAR */}
        <div
          className={`w-full absolute z-10 h-1 bg-black/5 top-0 ${
            open ? "max-md:top-10" : "max-md:top-0"
          }`}
        >
          <div
            className="bg-second h-full transition-all duration-500"
            style={{
              width: `${(page / total) * 100}%`,
            }}
          ></div>
        </div>

        {/* BUTTON UP */}
        <button
          className="absolute top-5 left-1/2 -translate-x-1/2 px-10 bg-black/5 rounded-full transition-all duration-500"
          onClick={() => setPage((oldPage) => Math.max(oldPage - 2, 0))}
          style={{
            opacity: page !== 0 ? "1" : "0",
            pointerEvents: page !== 0 ? "auto" : "none",
          }}
        >
          <div className="w-6 text-second">
            <IconChevron />
          </div>
        </button>

        {/* BUTTON DOWN */}
        <button
          className="absolute bottom-5 left-1/2 -translate-x-1/2 px-10 bg-black/5 rounded-full transition-all duration-500"
          onClick={() =>
            setPage((oldPage) => Math.min(oldPage + 2, (pages.length - 1) * 2))
          }
          style={{
            opacity: page !== (pages.length - 1) * 2 ? "1" : "0",
            pointerEvents: page !== (pages.length - 1) * 2 ? "auto" : "none",
          }}
        >
          <div className="w-6 text-second rotate-180">
            <IconChevron />
          </div>
        </button>

        {/* DOTS */}
        <div
          className="aspect-square absolute transition-all duration-500 pointer-events-none z-[-10]"
          style={styles[page / 2]}
        >
          <Spinner />
        </div>
      </main>
    </>
  );
};

export default Main;
