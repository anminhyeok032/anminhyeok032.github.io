import { d as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_BUS8JYOL.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>This post will explain how you can enable/disable light &#x26; dark mode for the website. Moreover, you’ll learn how you can customize color schemes of the entire website.</p>\n<h2 id=\"table-of-contents\">Table of contents</h2>\n<p></p><details><summary>Open Table of contents</summary><p></p>\n<ul>\n<li><a href=\"#enabledisable-light--dark-mode\">Enable/disable light &#x26; dark mode</a></li>\n<li><a href=\"#choose-primary-color-scheme\">Choose primary color scheme</a></li>\n<li><a href=\"#customize-color-schemes\">Customize color schemes</a></li>\n</ul>\n<p></p></details><p></p>\n<h2 id=\"enabledisable-light--dark-mode\">Enable/disable light &#x26; dark mode</h2>\n<p>AstroPaper theme will include light and dark mode by default. In other words, there will be two color schemes_ one for light mode and another for dark mode. This default behavior can be disabled in SITE configuration object of the <code>src/config.ts</code> file.</p>\n<pre class=\"astro-code one-dark-pro\" style=\"background-color:#282c34;color:#abb2bf; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;\" tabindex=\"0\"><code><span class=\"line\"><span style=\"color:#7F848E;font-style:italic\">// file: src/config.ts</span></span>\n<span class=\"line\"><span style=\"color:#C678DD\">export</span><span style=\"color:#C678DD\"> const</span><span style=\"color:#E5C07B\"> SITE</span><span style=\"color:#56B6C2\"> =</span><span style=\"color:#ABB2BF\"> {</span></span>\n<span class=\"line\"><span style=\"color:#E06C75\">  website</span><span style=\"color:#ABB2BF\">: </span><span style=\"color:#98C379\">\"https://astro-paper.pages.dev/\"</span><span style=\"color:#ABB2BF\">,</span></span>\n<span class=\"line\"><span style=\"color:#E06C75\">  author</span><span style=\"color:#ABB2BF\">: </span><span style=\"color:#98C379\">\"Sat Naing\"</span><span style=\"color:#ABB2BF\">,</span></span>\n<span class=\"line\"><span style=\"color:#E06C75\">  desc</span><span style=\"color:#ABB2BF\">: </span><span style=\"color:#98C379\">\"A minimal, responsive and SEO-friendly Astro blog theme.\"</span><span style=\"color:#ABB2BF\">,</span></span>\n<span class=\"line\"><span style=\"color:#E06C75\">  title</span><span style=\"color:#ABB2BF\">: </span><span style=\"color:#98C379\">\"AstroPaper\"</span><span style=\"color:#ABB2BF\">,</span></span>\n<span class=\"line\"><span style=\"color:#E06C75\">  ogImage</span><span style=\"color:#ABB2BF\">: </span><span style=\"color:#98C379\">\"astropaper-og.jpg\"</span><span style=\"color:#ABB2BF\">,</span></span>\n<span class=\"line\"><span style=\"color:#E06C75\">  lightAndDarkMode</span><span style=\"color:#ABB2BF\">: </span><span style=\"color:#D19A66\">true</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#7F848E;font-style:italic\">// true by default</span></span>\n<span class=\"line\"><span style=\"color:#E06C75\">  postPerPage</span><span style=\"color:#ABB2BF\">: </span><span style=\"color:#D19A66\">3</span><span style=\"color:#ABB2BF\">,</span></span>\n<span class=\"line\"><span style=\"color:#ABB2BF\">};</span></span></code></pre>\n<p>To disable <code>light &#x26; dark mode</code> set <code>SITE.lightAndDarkMode</code> to <code>false</code>.</p>\n<h2 id=\"choose-primary-color-scheme\">Choose primary color scheme</h2>\n<p>By default, if we disable <code>SITE.lightAndDarkMode</code>, we will only get system’s prefers-color-scheme.</p>\n<p>Thus, to choose primary color scheme instead of prefers-color-scheme, we have to set color scheme in the primaryColorScheme variable inside <code>public/toggle-theme.js</code>.</p>\n<pre class=\"astro-code one-dark-pro\" style=\"background-color:#282c34;color:#abb2bf; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;\" tabindex=\"0\"><code><span class=\"line\"><span style=\"color:#7F848E;font-style:italic\">/* file: public/toggle-theme.js */</span></span>\n<span class=\"line\"><span style=\"color:#C678DD\">const</span><span style=\"color:#E5C07B\"> primaryColorScheme</span><span style=\"color:#56B6C2\"> =</span><span style=\"color:#98C379\"> \"\"</span><span style=\"color:#ABB2BF\">; </span><span style=\"color:#7F848E;font-style:italic\">// \"light\" | \"dark\"</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color:#7F848E;font-style:italic\">// Get theme data from local storage</span></span>\n<span class=\"line\"><span style=\"color:#C678DD\">const</span><span style=\"color:#E5C07B\"> currentTheme</span><span style=\"color:#56B6C2\"> =</span><span style=\"color:#E5C07B\"> localStorage</span><span style=\"color:#ABB2BF\">.</span><span style=\"color:#61AFEF\">getItem</span><span style=\"color:#ABB2BF\">(</span><span style=\"color:#98C379\">\"theme\"</span><span style=\"color:#ABB2BF\">);</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color:#7F848E;font-style:italic\">// other codes etc...</span></span></code></pre>\n<p>The <strong>primaryColorScheme</strong> variable can hold two values_ <code>\"light\"</code>, <code>\"dark\"</code>. You can leave the empty string (default) if you don’t want to specify the primary color scheme.</p>\n<ul>\n<li><code>\"\"</code> - system’s prefers-color-scheme. (default)</li>\n<li><code>\"light\"</code> - use light mode as primary color scheme.</li>\n<li><code>\"dark\"</code> - use dark mode as primary color scheme.</li>\n</ul>\n<details><summary>Why 'primaryColorScheme' is not inside config.ts?</summary>\n<blockquote>\n<p>To avoid color flickering on page reload, we have to place the toggle-switch JavaScript codes as early as possible when the page loads. It solves the problem of flickering, but as a trade-off, we cannot use ESM imports anymore.</p>\n</blockquote>\n<p><a href=\"https://docs.astro.build/en/reference/directives-reference/#isinline\">Click here</a> to know more about Astro’s <code>is:inline</code> script.</p>\n</details>\n<h2 id=\"customize-color-schemes\">Customize color schemes</h2>\n<p>Both light &#x26; dark color schemes of AstroPaper theme can be customized. You can do this in <code>src/styles/base.css</code> file.</p>\n<pre class=\"astro-code one-dark-pro\" style=\"background-color:#282c34;color:#abb2bf; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;\" tabindex=\"0\"><code><span class=\"line\"><span style=\"color:#7F848E;font-style:italic\">/* file: src/styles/base.css */</span></span>\n<span class=\"line\"><span style=\"color:#C678DD\">@tailwind</span><span style=\"color:#ABB2BF\"> base;</span></span>\n<span class=\"line\"><span style=\"color:#C678DD\">@tailwind</span><span style=\"color:#ABB2BF\"> components;</span></span>\n<span class=\"line\"><span style=\"color:#C678DD\">@tailwind</span><span style=\"color:#ABB2BF\"> utilities;</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color:#C678DD\">@layer</span><span style=\"color:#ABB2BF\"> base {</span></span>\n<span class=\"line\"><span style=\"color:#56B6C2\">  :root</span><span style=\"color:#ABB2BF\">,</span></span>\n<span class=\"line\"><span style=\"color:#E06C75\">  html</span><span style=\"color:#C678DD\">[</span><span style=\"color:#D19A66\">data-theme</span><span style=\"color:#ABB2BF\">=</span><span style=\"color:#98C379\">\"light\"</span><span style=\"color:#C678DD\">]</span><span style=\"color:#ABB2BF\"> {</span></span>\n<span class=\"line\"><span style=\"color:#E06C75\">    --color-fill</span><span style=\"color:#ABB2BF\">: </span><span style=\"color:#D19A66\">251</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">254</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">251</span><span style=\"color:#ABB2BF\">;</span></span>\n<span class=\"line\"><span style=\"color:#E06C75\">    --color-text-base</span><span style=\"color:#ABB2BF\">: </span><span style=\"color:#D19A66\">40</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">39</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">40</span><span style=\"color:#ABB2BF\">;</span></span>\n<span class=\"line\"><span style=\"color:#E06C75\">    --color-accent</span><span style=\"color:#ABB2BF\">: </span><span style=\"color:#D19A66\">0</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">108</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">172</span><span style=\"color:#ABB2BF\">;</span></span>\n<span class=\"line\"><span style=\"color:#E06C75\">    --color-card</span><span style=\"color:#ABB2BF\">: </span><span style=\"color:#D19A66\">230</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">230</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">230</span><span style=\"color:#ABB2BF\">;</span></span>\n<span class=\"line\"><span style=\"color:#E06C75\">    --color-card-muted</span><span style=\"color:#ABB2BF\">: </span><span style=\"color:#D19A66\">205</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">205</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">205</span><span style=\"color:#ABB2BF\">;</span></span>\n<span class=\"line\"><span style=\"color:#E06C75\">    --color-border</span><span style=\"color:#ABB2BF\">: </span><span style=\"color:#D19A66\">236</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">233</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">233</span><span style=\"color:#ABB2BF\">;</span></span>\n<span class=\"line\"><span style=\"color:#ABB2BF\">  }</span></span>\n<span class=\"line\"><span style=\"color:#E06C75\">  html</span><span style=\"color:#C678DD\">[</span><span style=\"color:#D19A66\">data-theme</span><span style=\"color:#ABB2BF\">=</span><span style=\"color:#98C379\">\"dark\"</span><span style=\"color:#C678DD\">]</span><span style=\"color:#ABB2BF\"> {</span></span>\n<span class=\"line\"><span style=\"color:#E06C75\">    --color-fill</span><span style=\"color:#ABB2BF\">: </span><span style=\"color:#D19A66\">47</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">55</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">65</span><span style=\"color:#ABB2BF\">;</span></span>\n<span class=\"line\"><span style=\"color:#E06C75\">    --color-text-base</span><span style=\"color:#ABB2BF\">: </span><span style=\"color:#D19A66\">230</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">230</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">230</span><span style=\"color:#ABB2BF\">;</span></span>\n<span class=\"line\"><span style=\"color:#E06C75\">    --color-accent</span><span style=\"color:#ABB2BF\">: </span><span style=\"color:#D19A66\">26</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">217</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">217</span><span style=\"color:#ABB2BF\">;</span></span>\n<span class=\"line\"><span style=\"color:#E06C75\">    --color-card</span><span style=\"color:#ABB2BF\">: </span><span style=\"color:#D19A66\">63</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">75</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">90</span><span style=\"color:#ABB2BF\">;</span></span>\n<span class=\"line\"><span style=\"color:#E06C75\">    --color-card-muted</span><span style=\"color:#ABB2BF\">: </span><span style=\"color:#D19A66\">89</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">107</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">129</span><span style=\"color:#ABB2BF\">;</span></span>\n<span class=\"line\"><span style=\"color:#E06C75\">    --color-border</span><span style=\"color:#ABB2BF\">: </span><span style=\"color:#D19A66\">59</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">70</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">85</span><span style=\"color:#ABB2BF\">;</span></span>\n<span class=\"line\"><span style=\"color:#ABB2BF\">  }</span></span>\n<span class=\"line\"><span style=\"color:#7F848E;font-style:italic\">  /* other styles */</span></span>\n<span class=\"line\"><span style=\"color:#ABB2BF\">}</span></span></code></pre>\n<p>In AstroPaper theme, <code>:root</code> and <code>html[data-theme=\"light\"]</code> selectors are used as the light color scheme and <code>html[data-theme=\"dark\"]</code> is used the dark color scheme. If you want to customize your custom color scheme, you have to specify your light color scheme inside <code>:root</code>,<code>html[data-theme=\"light\"]</code> and dark color scheme inside <code>html[data-theme=\"dark\"]</code>.</p>\n<p>Colors are declared in CSS custom property (CSS Variable) notation. Color property values are written in rgb values. (Note: instead of <code>rgb(40, 39, 40)</code>, only specify <code>40, 39, 40</code>)</p>\n<p>Here is the detail explanation of color properties.</p>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th>Color Property</th><th>Definition &#x26; Usage</th></tr></thead><tbody><tr><td><code>--color-fill</code></td><td>Primary color of the website. Usually the main background.</td></tr><tr><td><code>--color-text-base</code></td><td>Secondary color of the website. Usually the text color.</td></tr><tr><td><code>--color-accent</code></td><td>Accent color of the website. Link color, hover color etc.</td></tr><tr><td><code>--color-card</code></td><td>Card, scrollbar and code background color (like <code>this</code>).</td></tr><tr><td><code>--color-card-muted</code></td><td>Card and scrollbar background color for hover state etc.</td></tr><tr><td><code>--color-border</code></td><td>Border color. Especially used in horizontal row (hr)</td></tr></tbody></table>\n<p>Here is an example of changing the light color scheme.</p>\n<pre class=\"astro-code one-dark-pro\" style=\"background-color:#282c34;color:#abb2bf; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;\" tabindex=\"0\"><code><span class=\"line\"><span style=\"color:#C678DD\">@layer</span><span style=\"color:#ABB2BF\"> base {</span></span>\n<span class=\"line\"><span style=\"color:#7F848E;font-style:italic\">  /* lobster color scheme */</span></span>\n<span class=\"line\"><span style=\"color:#56B6C2\">  :root</span><span style=\"color:#ABB2BF\">,</span></span>\n<span class=\"line\"><span style=\"color:#E06C75\">  html</span><span style=\"color:#C678DD\">[</span><span style=\"color:#D19A66\">data-theme</span><span style=\"color:#ABB2BF\">=</span><span style=\"color:#98C379\">\"light\"</span><span style=\"color:#C678DD\">]</span><span style=\"color:#ABB2BF\"> {</span></span>\n<span class=\"line\"><span style=\"color:#E06C75\">    --color-fill</span><span style=\"color:#ABB2BF\">: </span><span style=\"color:#D19A66\">246</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">238</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">225</span><span style=\"color:#ABB2BF\">;</span></span>\n<span class=\"line\"><span style=\"color:#E06C75\">    --color-text-base</span><span style=\"color:#ABB2BF\">: </span><span style=\"color:#D19A66\">1</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">44</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">86</span><span style=\"color:#ABB2BF\">;</span></span>\n<span class=\"line\"><span style=\"color:#E06C75\">    --color-accent</span><span style=\"color:#ABB2BF\">: </span><span style=\"color:#D19A66\">225</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">74</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">57</span><span style=\"color:#ABB2BF\">;</span></span>\n<span class=\"line\"><span style=\"color:#E06C75\">    --color-card</span><span style=\"color:#ABB2BF\">: </span><span style=\"color:#D19A66\">220</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">152</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">145</span><span style=\"color:#ABB2BF\">;</span></span>\n<span class=\"line\"><span style=\"color:#E06C75\">    --color-card-muted</span><span style=\"color:#ABB2BF\">: </span><span style=\"color:#D19A66\">233</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">119</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">106</span><span style=\"color:#ABB2BF\">;</span></span>\n<span class=\"line\"><span style=\"color:#E06C75\">    --color-border</span><span style=\"color:#ABB2BF\">: </span><span style=\"color:#D19A66\">220</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">152</span><span style=\"color:#ABB2BF\">, </span><span style=\"color:#D19A66\">145</span><span style=\"color:#ABB2BF\">;</span></span>\n<span class=\"line\"><span style=\"color:#ABB2BF\">  }</span></span>\n<span class=\"line\"><span style=\"color:#ABB2BF\">}</span></span></code></pre>\n<blockquote>\n<p>Check out some <a href=\"https://astro-paper.pages.dev/posts/predefined-color-schemes/\">predefined color schemes</a> AstroPaper has already crafted for you.</p>\n</blockquote>";

				const frontmatter = {"author":"Sat Naing","pubDatetime":"2022-09-25T15:20:35.000Z","title":"Customizing AstroPaper theme color schemes","featured":false,"draft":false,"tags":["color-schemes","docs"],"description":"How you can enable/disable light & dark mode; and customize color schemes of AstroPaper theme."};
				const file = "C:/mltest/bb/anminhyeok032.github.io/src/content/blog/customizing-astropaper-theme-color-schemes.md";
				const url = undefined;
				function rawContent() {
					return "\nThis post will explain how you can enable/disable light & dark mode for the website. Moreover, you'll learn how you can customize color schemes of the entire website.\n\n## Table of contents\n\n## Enable/disable light & dark mode\n\nAstroPaper theme will include light and dark mode by default. In other words, there will be two color schemes\\_ one for light mode and another for dark mode. This default behavior can be disabled in SITE configuration object of the `src/config.ts` file.\n\n```js\n// file: src/config.ts\nexport const SITE = {\n  website: \"https://astro-paper.pages.dev/\",\n  author: \"Sat Naing\",\n  desc: \"A minimal, responsive and SEO-friendly Astro blog theme.\",\n  title: \"AstroPaper\",\n  ogImage: \"astropaper-og.jpg\",\n  lightAndDarkMode: true, // true by default\n  postPerPage: 3,\n};\n```\n\nTo disable `light & dark mode` set `SITE.lightAndDarkMode` to `false`.\n\n## Choose primary color scheme\n\nBy default, if we disable `SITE.lightAndDarkMode`, we will only get system's prefers-color-scheme.\n\nThus, to choose primary color scheme instead of prefers-color-scheme, we have to set color scheme in the primaryColorScheme variable inside `public/toggle-theme.js`.\n\n```js\n/* file: public/toggle-theme.js */\nconst primaryColorScheme = \"\"; // \"light\" | \"dark\"\n\n// Get theme data from local storage\nconst currentTheme = localStorage.getItem(\"theme\");\n\n// other codes etc...\n```\n\nThe **primaryColorScheme** variable can hold two values\\_ `\"light\"`, `\"dark\"`. You can leave the empty string (default) if you don't want to specify the primary color scheme.\n\n- `\"\"` - system's prefers-color-scheme. (default)\n- `\"light\"` - use light mode as primary color scheme.\n- `\"dark\"` - use dark mode as primary color scheme.\n\n<details><summary>Why 'primaryColorScheme' is not inside config.ts?</summary>\n\n> To avoid color flickering on page reload, we have to place the toggle-switch JavaScript codes as early as possible when the page loads. It solves the problem of flickering, but as a trade-off, we cannot use ESM imports anymore.\n\n[Click here](https://docs.astro.build/en/reference/directives-reference/#isinline) to know more about Astro's `is:inline` script.\n\n</details>\n\n## Customize color schemes\n\nBoth light & dark color schemes of AstroPaper theme can be customized. You can do this in `src/styles/base.css` file.\n\n```css\n/* file: src/styles/base.css */\n@tailwind base;\n@tailwind components;\n@tailwind utilities;\n\n@layer base {\n  :root,\n  html[data-theme=\"light\"] {\n    --color-fill: 251, 254, 251;\n    --color-text-base: 40, 39, 40;\n    --color-accent: 0, 108, 172;\n    --color-card: 230, 230, 230;\n    --color-card-muted: 205, 205, 205;\n    --color-border: 236, 233, 233;\n  }\n  html[data-theme=\"dark\"] {\n    --color-fill: 47, 55, 65;\n    --color-text-base: 230, 230, 230;\n    --color-accent: 26, 217, 217;\n    --color-card: 63, 75, 90;\n    --color-card-muted: 89, 107, 129;\n    --color-border: 59, 70, 85;\n  }\n  /* other styles */\n}\n```\n\nIn AstroPaper theme, `:root` and `html[data-theme=\"light\"]` selectors are used as the light color scheme and `html[data-theme=\"dark\"]` is used the dark color scheme. If you want to customize your custom color scheme, you have to specify your light color scheme inside `:root`,`html[data-theme=\"light\"]` and dark color scheme inside `html[data-theme=\"dark\"]`.\n\nColors are declared in CSS custom property (CSS Variable) notation. Color property values are written in rgb values. (Note: instead of `rgb(40, 39, 40)`, only specify `40, 39, 40`)\n\nHere is the detail explanation of color properties.\n\n| Color Property       | Definition & Usage                                         |\n| -------------------- | ---------------------------------------------------------- |\n| `--color-fill`       | Primary color of the website. Usually the main background. |\n| `--color-text-base`  | Secondary color of the website. Usually the text color.    |\n| `--color-accent`     | Accent color of the website. Link color, hover color etc.  |\n| `--color-card`       | Card, scrollbar and code background color (like `this`).   |\n| `--color-card-muted` | Card and scrollbar background color for hover state etc.   |\n| `--color-border`     | Border color. Especially used in horizontal row (hr)       |\n\nHere is an example of changing the light color scheme.\n\n```css\n@layer base {\n  /* lobster color scheme */\n  :root,\n  html[data-theme=\"light\"] {\n    --color-fill: 246, 238, 225;\n    --color-text-base: 1, 44, 86;\n    --color-accent: 225, 74, 57;\n    --color-card: 220, 152, 145;\n    --color-card-muted: 233, 119, 106;\n    --color-border: 220, 152, 145;\n  }\n}\n```\n\n> Check out some [predefined color schemes](https://astro-paper.pages.dev/posts/predefined-color-schemes/) AstroPaper has already crafted for you.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"table-of-contents","text":"Table of contents"},{"depth":2,"slug":"enabledisable-light--dark-mode","text":"Enable/disable light & dark mode"},{"depth":2,"slug":"choose-primary-color-scheme","text":"Choose primary color scheme"},{"depth":2,"slug":"customize-color-schemes","text":"Customize color schemes"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
