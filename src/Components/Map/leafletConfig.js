/** Options communes aux cartes Journey */
export const TILE_URL =
  'https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_nolabels/{z}/{x}/{y}.png';

export const TILE_ATTRIBUTION =
  '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>';

export const WORLD_BOUNDS = [
  [-60, -180],
  [89, 180],
];

export const DEFAULT_VIEW = { center: [40, -7], zoom: 2.5 };
