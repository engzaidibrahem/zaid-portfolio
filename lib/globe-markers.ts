/** Equirectangular positions for markers on the scrolling day map. */
export type GlobeMarker = {
  id: string;
  lat: number;
  lon: number;
  primary?: boolean;
};

/** Indonesia (base) + markets reflected in portfolio delivery. */
export const globeMarkers: GlobeMarker[] = [
  { id: "indonesia", lat: -6.2, lon: 106.8, primary: true },
  { id: "saudi", lat: 24.7, lon: 46.7 },
  { id: "uae", lat: 25.2, lon: 55.3 },
  { id: "jordan", lat: 31.95, lon: 35.93 },
];

export function markerPosition(lat: number, lon: number) {
  const u = (lon + 180) / 360;
  const v = (90 - lat) / 180;
  return { left: `${u * 100}%`, top: `${v * 100}%` };
}
