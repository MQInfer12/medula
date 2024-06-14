import { useCallback, useEffect, useMemo, useState } from "react";
import Page0 from "./page0";
import Page1 from "./page1";
import Page2 from "./page2";
import Page3 from "./page3";
import IconChevron from "../icons/iconChevron";
import Page4 from "./page4";
import Page5 from "./page5";
import Page6 from "./page6";
import Page7 from "./page7";
import Navbar from "./navbar";
import { useSearchParams } from "react-router-dom";
import PageRender from "./pageRender";
import { DataContextProvider } from "../../context/dataContext";
import Dots from "../absolutes/dots";
import Walls from "../absolutes/walls";
import Map from "../absolutes/map";
import ChatBtn from "../absolutes/chatBtn";
import { ChatContextProvider } from "../../context/chatContext";
import { CityContextProvider } from "../../context/cityContext";

export interface ScrollPage {
  component: JSX.Element;
  appear?: boolean;
}

const Main = () => {
  const [open, setOpen] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams({ page: "0" });
  const pageParam = Number(searchParams.get("page")) * 2;
  const [page, setPage] = useState(pageParam);
  const [scrolling, setScrolling] = useState(false);

  const pages: ScrollPage[] = useMemo(
    () => [
      {
        component: <Page0 setPage={setPage} />,
      },
      {
        component: <Page1 />,
      },
      {
        component: <Page2 />,
      },
      {
        component: <Page3 />,
      },
      {
        component: <Page4 />,
      },
      {
        component: <Page5 />,
      },
      {
        component: <Page6 />,
      },
      {
        component: <Page7 active={page === 14} />,
      },
    ],
    [setPage, page]
  );

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

  const handleWheel = useCallback(
    (event: any) => {
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
    },
    [scrolling, setPage]
  );

  const total = useMemo(() => (pages.length - 1) * 2, [pages]);

  return (
    <CityContextProvider>
      <DataContextProvider>
        <Navbar open={open} setOpen={setOpen} setPage={setPage} />
        <main
          className="flex-1 overflow-hidden relative isolate"
          onWheel={handleWheel}
        >
          <ChatContextProvider>
            {pages.map((p, i) => (
              <PageRender key={i} index={i} page={p} pageIndex={page} />
            ))}
            <ChatBtn />
          </ChatContextProvider>

          <Walls page={page} />

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
              setPage((oldPage) =>
                Math.min(oldPage + 2, (pages.length - 1) * 2)
              )
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

          <Dots page={page} />

          <Map page={page} />
        </main>
      </DataContextProvider>
    </CityContextProvider>
  );
};

export default Main;
