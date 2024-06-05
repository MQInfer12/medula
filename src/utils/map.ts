import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import GeoJSONLayer from "@arcgis/core/layers/GeoJSONLayer";
import SimpleFillSymbol from "@arcgis/core/symbols/SimpleFillSymbol";
import SimpleLineSymbol from "@arcgis/core/symbols/SimpleLineSymbol";
import Color from "@arcgis/core/Color";
import BoliviaData from "../mock/bolivia.json";

const createRenderer = (nomDep: string): any => {
  const currentDepartmentSymbol = new SimpleFillSymbol({
    color: new Color([0, 158, 227, 0.8]),
    outline: new SimpleLineSymbol({
      color: new Color([255, 255, 255]),
      width: 0.5,
    }),
  });

  const otherDepartmentSymbol = new SimpleFillSymbol({
    color: new Color([200, 200, 200, 0.5]),
    outline: new SimpleLineSymbol({
      color: new Color([255, 255, 255]),
      width: 0.5,
    }),
  });

  return {
    type: "unique-value",
    field: "NOM_DEP",
    uniqueValueInfos: [
      {
        value: nomDep,
        symbol: currentDepartmentSymbol,
      },
    ],
    defaultSymbol: otherDepartmentSymbol,
  };
};

const createLayer = (nomDep: string) => {
  const renderer = createRenderer(nomDep);

  const blob = new Blob([JSON.stringify(BoliviaData)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);

  return new GeoJSONLayer({
    url,
    renderer,
  });
};

const fadeRenderer = (
  oldLayer: GeoJSONLayer,
  newLayer: GeoJSONLayer,
  map: Map
) => {
  newLayer.opacity = 0;
  map.add(newLayer);

  let opacity = 0;
  const interval = setInterval(() => {
    opacity += 0.1;
    newLayer.opacity = opacity;
    oldLayer.opacity = 1 - opacity;

    if (opacity >= 1) {
      clearInterval(interval);
      map.remove(oldLayer);
    }
  }, 50);
};

export const initializeMap = (
  container: HTMLDivElement,
  center: [string, string],
  onViewCreated?: (view: MapView, map: Map) => void,
  onFeatureClick?: (feature: any) => void
) => {
  const LngLat = center.map((v) => Number(v));

  const map = new Map({
    basemap: "gray",
  });

  const view = new MapView({
    container,
    map: map,
    zoom: 3,
    center: LngLat,
    ui: {
      components: [],
    },
    constraints: {
      snapToZoom: false,
    },
  });

  view.on("drag", (event) => {
    event.stopPropagation();
  });
  view.on("mouse-wheel", (event) => {
    event.stopPropagation();
  });
  view.on("double-click", (event) => {
    event.stopPropagation();
  });
  view.on("key-down", (event) => {
    event.stopPropagation();
  });
  view.on("key-up", (event) => {
    event.stopPropagation();
  });
  view.on("click", (event) => {
    event.stopPropagation();
  });

  let layer = createLayer("LA PAZ");
  map.add(layer);

  view
    .when()
    .then(() => {
      if (onViewCreated) {
        onViewCreated(view, map);
      }
    })
    .catch((error) => {
      console.error("Error loading map:", error);
    });

  view.on("pointer-move", (event) => {
    event.stopPropagation();
    view.hitTest(event).then((response) => {
      const results = response.results;
      if (results.length > 0) {
        view.container.style.cursor = "pointer";
      } else {
        view.container.style.cursor = "default";
      }
    });
  });

  view.on("click", (event) => {
    event.stopPropagation();
    view.hitTest(event).then((response) => {
      const results = response.results;
      if (results.length > 0) {
        const feature = results.filter(
          //@ts-ignore
          (result) => result.graphic.layer === layer
          //@ts-ignore
        )[0].graphic;
        const nomDep = feature.attributes.NOM_DEP;

        const newLayer = createLayer(nomDep);
        fadeRenderer(layer, newLayer, map);
        layer = newLayer;

        if (onFeatureClick) {
          onFeatureClick(nomDep);
        }
      }
    });
  });

  return () => {
    if (view) {
      //@ts-ignore
      view.container = null;
    }
  };
};
