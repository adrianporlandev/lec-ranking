import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_CEOxWlHx.mjs';
import { manifest } from './manifest_CDG7ybM2.mjs';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/players/_realname_.astro.mjs');
const _page2 = () => import('./pages/ranking.astro.mjs');
const _page3 = () => import('./pages/teams/_team_.astro.mjs');
const _page4 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/players/[realname].astro", _page1],
    ["src/pages/ranking.astro", _page2],
    ["src/pages/teams/[team].astro", _page3],
    ["src/pages/index.astro", _page4]
]);
const serverIslandMap = new Map();

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "f9f0bdfc-21fb-4cd2-9263-560e010aee47",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
