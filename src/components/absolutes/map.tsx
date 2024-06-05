import { useEffect, useRef } from "react";
import { initializeMap } from "../../utils/map";
import { twMerge } from "../../utils/twMerge";
import { useCityContext } from "../../context/cityContext";

interface Props {
  page: number;
}

const Map = ({ page }: Props) => {
  const { city, setCity } = useCityContext();
  const elementRef = useRef<HTMLDivElement>(null);
  const viewRef = useRef<any>(null);
  const mapRef = useRef<any>(null);

  useEffect(() => {
    let cleanup = null;
    if (elementRef.current) {
      cleanup = initializeMap(
        elementRef.current,
        ["-63.744612", "-16.849363"],
        (view, map) => {
          viewRef.current = view;
          mapRef.current = map;
        },
        (feature) => {
          setCity(feature);
        }
      );
    }
    return () => {
      if (cleanup) cleanup();
    };
  }, []);

  console.log(city);

  const handleMouseEnter = () => {
    if (viewRef.current) {
      viewRef.current.goTo({ zoom: 4, duration: 300 });
    }
  };

  const handleMouseLeave = () => {
    if (viewRef.current) {
      viewRef.current.goTo({ zoom: 3, duration: 300 });
    }
  };

  return (
    <div
      className={twMerge(
        "right-4 top-4 absolute transition-all duration-300 z-10 w-48 aspect-square hover:w-96 bg-white rounded-lg overflow-hidden",
        "border-2 border-t-second border-l-first border-r-third border-b-fourth",
        page >= 6 ? "opacity-1" : "opacity-0 pointer-events-none"
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="w-full h-full relative">
        <small className="absolute text-white top-0 right-0 z-50 bg-fifth px-4 text-sm rounded-bl-lg">{city}</small>
        <div ref={elementRef} id="map" className="w-full h-full" />
      </div>
    </div>
  );
};

export default Map;
