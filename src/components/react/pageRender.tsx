import { useRef } from "react";
import { ScrollPage } from "./main";

interface Props {
  index: number;
  page: ScrollPage;
  pageIndex: number;
}

const PageRender = ({ index, page, pageIndex }: Props) => {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  return (
    <div
      ref={(el) => (sectionRefs.current[index] = el)}
      className="h-full w-full transition-all duration-500"
      style={{
        transform: `translateY(${index * 100 - pageIndex * 100}%)`,
      }}
    >
      {page.component}
    </div>
  );
};

export default PageRender;
