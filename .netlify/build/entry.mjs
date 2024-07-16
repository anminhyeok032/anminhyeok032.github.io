import * as adapter from '@astrojs/netlify/ssr-function.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_CnUKT2cD.mjs';

const _page0  = () => import('./chunks/generic_B11zHbDU.mjs');
const _page1  = () => import('./chunks/index_DvGJKNka.mjs');
const _page2  = () => import('./chunks/index_DVZg_4Tk.mjs');
const _page3  = () => import('./chunks/index_alrAEnX7.mjs');
const _page4  = () => import('./chunks/_page__m9X0qKD8.mjs');
const _page5  = () => import('./chunks/index_CrPDigqe.mjs');
const _page6  = () => import('./chunks/index_sJFZ8F7o.mjs');
const _page7  = () => import('./chunks/og_DDxm2aRF.mjs');
const _page8  = () => import('./chunks/robots_2MHkX9cv.mjs');
const _page9  = () => import('./chunks/rss_CqtlM48d.mjs');
const _page10  = () => import('./chunks/index_Vs0sNXqZ.mjs');
const _page11  = () => import('./chunks/404_CS0LgwEz.mjs');
const _page12  = () => import('./chunks/about_vhXxzbg1.mjs');
const _page13  = () => import('./chunks/search_OIBAbNIV.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/posts/[slug]/index.png.ts", _page1],["src/pages/posts/[slug]/index.astro", _page2],["src/pages/tags/[tag]/index.astro", _page3],["src/pages/tags/[tag]/[page].astro", _page4],["src/pages/posts/index.astro", _page5],["src/pages/tags/index.astro", _page6],["src/pages/og.png.ts", _page7],["src/pages/robots.txt.ts", _page8],["src/pages/rss.xml.ts", _page9],["src/pages/index.astro", _page10],["src/pages/404.astro", _page11],["src/pages/about.md", _page12],["src/pages/search.astro", _page13]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {"middlewareSecret":"1d1689d3-8269-48eb-9075-5cf6a848c36a"};

const _exports = adapter.createExports(_manifest, _args);
const _default = _exports['default'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { _default as default, pageMap };
