import { d as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_BUS8JYOL.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<blockquote>\n<p>This article is originally from my <a href=\"https://satnaing.dev/blog/posts/how-do-i-develop-my-portfolio-and-blog\">blog post</a>. I put this article to demonstrate how you can write blog posts/articles using AstroPaper theme.</p>\n</blockquote>\n<p>My experience about developing my first portfolio website and a blog using NextJS and a headless CMS.</p>\n<p><img src=\"https://satnaing.dev/_ipx/w_2048,q_75/https%3A%2F%2Fres.cloudinary.com%2Fnoezectz%2Fimage%2Fupload%2Fv1653050141%2FSatNaing%2Fblog_at_cafe_ei1wf4.jpg?url=https%3A%2F%2Fres.cloudinary.com%2Fnoezectz%2Fimage%2Fupload%2Fv1653050141%2FSatNaing%2Fblog_at_cafe_ei1wf4.jpg&#x26;w=2048&#x26;q=75\" alt=\"Building portfolio\"></p>\n<h2 id=\"motivation\">Motivation</h2>\n<p>I’ve been always thinking about launching my own website with my custom domain name (<strong>satnaing.dev</strong>) since my college student life. But that never happened until this project. I’ve done several projects and works about web application development but I didn’t make an effort to do this.</p>\n<p>So, “what about blog?” you may ask. Yeah, blog also has been in my project list for some time. I always wanted to make a blog project using some of the latest technologies. However, I’ve been busy with my works and other projects so that blog project has never been started.</p>\n<p>In these days, I tend to develop my own projects with the focus in good quality rather than quantity. After the project is done, I usually put a proper readme file in the Github repo. But Github repo readme is only suitable for technical aspects (this is just my thought). I want to write down my experiences and challenges. Thus, I decided to make my own blog. Plus, at this point, I have decent experiences and confidence to develop this project.</p>\n<h2 id=\"tech-stack\">Tech Stack</h2>\n<p>For the front-end, I wanted to use <a href=\"https://reactjs.org/\" title=\"React Official Website\">React</a>. But React alone is not good enough for SEO; and I did have to consider many factors like routing, image optimization etc. So, I chose <a href=\"https://nextjs.org/\" title=\"NextJS Official Website\">NextJS</a> as my main front-end stack. And of course TypeScript for type checking. (It’s said that you’ll love TypeScript when you’re used to it 😉)</p>\n<p>For styling, I use <a href=\"https://tailwindcss.com/\" title=\"Tailwind CSS Official Website\">TailwindCSS</a>. This is because I love developer experience that Tailwind gives and it has a lot of flexibilities compared to other component UI libraries like MUI or React Bootstrap.</p>\n<p>All contents of this project reside within the GitHub repository. All my blog posts (including this one) are written in Markdown file format since I’m very used to with this. But to write Markdown along with its frontmatter effortlessly, I use <a href=\"https://forestry.io/\" title=\"Forestry Official Website\">Forestry</a> headless CMS. It is a git-based CMS that can serve Markdown and other contents. Because of this, I can write my contents either using Markdown or wysiwyg editor. Besides, writing frontmatters with this is a breeze.</p>\n<p>Images and assets are uploaded and stored in <a href=\"https://cloudinary.com/\" title=\"Cloudinary Official Website\">Cloudinary</a>. I connect Cloudinary via Forestry and manage them directly in the dashboard.</p>\n<p>In conclusion, these are the tech stack I’ve used for this project.</p>\n<ul>\n<li>Front-end: NextJS (TypeScript)</li>\n<li>Styling: TailwindCSS</li>\n<li>Animations: GSAP</li>\n<li>CMS: Forestry Headless CMS</li>\n<li>Deployment: Vercel</li>\n</ul>\n<h2 id=\"features\">Features</h2>\n<p>The following are certain features of my portfolio and blog</p>\n<h3 id=\"seo-friendly\">SEO Friendly</h3>\n<p>The entire project is developed with SEO focus in mind. I’ve used proper meta tags, descriptions and heading alignments. This website is now indexed by Google.</p>\n<blockquote>\n<p>You can search this website on google by using keywords like ‘sat naing dev’</p>\n</blockquote>\n<p><img src=\"https://res.cloudinary.com/noezectz/image/upload/v1648231400/SatNaing/satnaing-on-google_asflq6.png\" alt=\"searching satnaing.dev on google\" title=\"satnaing.dev is indexed\"></p>\n<p>Moreover, this website will be displayed well when shared to social media due to properly used meta tags.</p>\n<p><img src=\"https://res.cloudinary.com/noezectz/image/upload/v1653106955/SatNaing/satnaing-dev-share-on-facebook_1_zjoehx.png\" alt=\"satnaing.dev card layout when shared to Facebook\" title=\"Card layout when shared to Facebook\"></p>\n<h3 id=\"dynamic-sitemap\">Dynamic Sitemap</h3>\n<p>Sitemap plays an important part in SEO. Because of this, every single page of this site should be included in sitemap.xml. I made an auto generated sitemap in my website whenever I create a new content or tags or categories.</p>\n<h3 id=\"light--dark-themes\">Light &#x26; Dark Themes</h3>\n<p>Due to dark theme trend in recent years, many websites include dark theme out of the box nowadays. Certainly, my website also supports light &#x26; dark themes.</p>\n<h3 id=\"fully-accessible\">Fully Accessible</h3>\n<p>This website is fully accessible. You can navigate around by only using keyboard. I put all a11y enhancement best practices like including alt text in all images, no skipping headings, using semantic HTML tags, using aria-attributes properly.</p>\n<h3 id=\"search-box-categories--tags\">Search box, Categories &#x26; Tags</h3>\n<p>All blog contents can be searched by search box. Moreover, contents can be filtered by categories and tags. In this way, blog readers can search and read what they really want.</p>\n<h3 id=\"performance-and-lighthouse-score\">Performance and Lighthouse Score</h3>\n<p>This website got very good performance and lighthouse score thanks to proper development and best practices. Here’s the lighthouse score for this website.</p>\n<p><img src=\"https://user-images.githubusercontent.com/53733092/159957822-7082e459-11e9-4616-8f1e-49d0881f7cbb.png\" alt=\"satnaing.dev Lighthouse score\" title=\"satnaing.dev Lighthouse score\"></p>\n<h3 id=\"animations\">Animations</h3>\n<p>Initially I used <a href=\"https://www.framer.com/motion/\" title=\"Framer Motion\">Framer Motion</a> to add animations and micro interactions for this website. However, when I tried to use some complex animations and parallax effects, I found it inconvenient to integrate with Framer Motion (Maybe I’m not very good at and used to working with it). Hence, I decided to use <a href=\"https://greensock.com/\" title=\"GSAP Animation Library\">GSAP</a> for all of my animations. It is one of the most popular animation library and it is capable of doing complex and advanced animations. You can see animations and micro interactions on pretty much every page of this website.</p>\n<p><img src=\"https://res.cloudinary.com/noezectz/image/upload/v1653108324/SatNaing/ezgif.com-gif-maker_2_hehtlm.gif\" alt=\"animations at satnaing.dev\" title=\"satnaing.dev website\"></p>\n<h2 id=\"outro\">Outro</h2>\n<p>In conclusion, this project gives me a lot of experience and confidence about developing blog site (SSG). Now, I have gained knowledge of git-based CMS and how it interacts with NextJS. I’ve also learned about SEO, dynamic sitemap generation and indexing Google procedures. I will make better projects in the future. So, stay tuned! ✌🏻</p>\n<p>And… last but not least, I would like to say ‘thanks’ to my friend <a href=\"https://www.facebook.com/bon.zai.3910\" title=\"Swann Fevian Kyaw&#x27;s Facebook Account\">Swann Fevian Kyaw</a> (@<a href=\"https://www.facebook.com/ToonHa-102639465752883\" title=\"ToonHa Facebook Page\">ToonHa</a>) who has drawn a beautiful illustration for my hero section of the website.</p>\n<h2 id=\"project-links\">Project Links</h2>\n<ul>\n<li>Website: <a href=\"https://satnaing.dev/\" title=\"https://satnaing.dev/\">https://satnaing.dev/</a></li>\n<li>Blog: <a href=\"https://satnaing.dev/blog\" title=\"https://satnaing.dev/blog\">https://satnaing.dev/blog</a></li>\n<li>Repo: <a href=\"https://github.com/satnaing/my-portfolio\" title=\"https://github.com/satnaing/my-portfolio\">https://github.com/satnaing/my-portfolio</a></li>\n</ul>";

				const frontmatter = {"title":"Test Posting","author":"Sat Naing","pubDatetime":"2022-03-25T16:55:12.000Z","slug":"Test Posting","featured":false,"draft":false,"tags":["Blog"],"description":"Test Post : 포스팅에 익숙해지기 위한 테스트 포스팅"};
				const file = "C:/mltest/bb/anminhyeok032.github.io/src/content/blog/portfolio-website-development.md";
				const url = undefined;
				function rawContent() {
					return "\n> This article is originally from my [blog post](https://satnaing.dev/blog/posts/how-do-i-develop-my-portfolio-and-blog). I put this article to demonstrate how you can write blog posts/articles using AstroPaper theme.\n\nMy experience about developing my first portfolio website and a blog using NextJS and a headless CMS.\n\n![Building portfolio](https://satnaing.dev/_ipx/w_2048,q_75/https%3A%2F%2Fres.cloudinary.com%2Fnoezectz%2Fimage%2Fupload%2Fv1653050141%2FSatNaing%2Fblog_at_cafe_ei1wf4.jpg?url=https%3A%2F%2Fres.cloudinary.com%2Fnoezectz%2Fimage%2Fupload%2Fv1653050141%2FSatNaing%2Fblog_at_cafe_ei1wf4.jpg&w=2048&q=75)\n\n## Motivation\n\nI've been always thinking about launching my own website with my custom domain name (**satnaing.dev**) since my college student life. But that never happened until this project. I've done several projects and works about web application development but I didn't make an effort to do this.\n\nSo, \"what about blog?\" you may ask. Yeah, blog also has been in my project list for some time. I always wanted to make a blog project using some of the latest technologies. However, I've been busy with my works and other projects so that blog project has never been started.\n\nIn these days, I tend to develop my own projects with the focus in good quality rather than quantity. After the project is done, I usually put a proper readme file in the Github repo. But Github repo readme is only suitable for technical aspects (this is just my thought). I want to write down my experiences and challenges. Thus, I decided to make my own blog. Plus, at this point, I have decent experiences and confidence to develop this project.\n\n## Tech Stack\n\nFor the front-end, I wanted to use [React](https://reactjs.org/ \"React Official Website\"). But React alone is not good enough for SEO; and I did have to consider many factors like routing, image optimization etc. So, I chose [NextJS](https://nextjs.org/ \"NextJS Official Website\") as my main front-end stack. And of course TypeScript for type checking. (It's said that you'll love TypeScript when you're used to it 😉)\n\nFor styling, I use [TailwindCSS](https://tailwindcss.com/ \"Tailwind CSS Official Website\"). This is because I love developer experience that Tailwind gives and it has a lot of flexibilities compared to other component UI libraries like MUI or React Bootstrap.\n\nAll contents of this project reside within the GitHub repository. All my blog posts (including this one) are written in Markdown file format since I'm very used to with this. But to write Markdown along with its frontmatter effortlessly, I use [Forestry](https://forestry.io/ \"Forestry Official Website\") headless CMS. It is a git-based CMS that can serve Markdown and other contents. Because of this, I can write my contents either using Markdown or wysiwyg editor. Besides, writing frontmatters with this is a breeze.\n\nImages and assets are uploaded and stored in [Cloudinary](https://cloudinary.com/ \"Cloudinary Official Website\"). I connect Cloudinary via Forestry and manage them directly in the dashboard.\n\nIn conclusion, these are the tech stack I've used for this project.\n\n- Front-end: NextJS (TypeScript)\n- Styling: TailwindCSS\n- Animations: GSAP\n- CMS: Forestry Headless CMS\n- Deployment: Vercel\n\n## Features\n\nThe following are certain features of my portfolio and blog\n\n### SEO Friendly\n\nThe entire project is developed with SEO focus in mind. I've used proper meta tags, descriptions and heading alignments. This website is now indexed by Google.\n\n> You can search this website on google by using keywords like 'sat naing dev'\n\n![searching satnaing.dev on google](https://res.cloudinary.com/noezectz/image/upload/v1648231400/SatNaing/satnaing-on-google_asflq6.png \"satnaing.dev is indexed\")\n\nMoreover, this website will be displayed well when shared to social media due to properly used meta tags.\n\n![satnaing.dev card layout when shared to Facebook](https://res.cloudinary.com/noezectz/image/upload/v1653106955/SatNaing/satnaing-dev-share-on-facebook_1_zjoehx.png \"Card layout when shared to Facebook\")\n\n### Dynamic Sitemap\n\nSitemap plays an important part in SEO. Because of this, every single page of this site should be included in sitemap.xml. I made an auto generated sitemap in my website whenever I create a new content or tags or categories.\n\n### Light & Dark Themes\n\nDue to dark theme trend in recent years, many websites include dark theme out of the box nowadays. Certainly, my website also supports light & dark themes.\n\n### Fully Accessible\n\nThis website is fully accessible. You can navigate around by only using keyboard. I put all a11y enhancement best practices like including alt text in all images, no skipping headings, using semantic HTML tags, using aria-attributes properly.\n\n### Search box, Categories & Tags\n\nAll blog contents can be searched by search box. Moreover, contents can be filtered by categories and tags. In this way, blog readers can search and read what they really want.\n\n### Performance and Lighthouse Score\n\nThis website got very good performance and lighthouse score thanks to proper development and best practices. Here's the lighthouse score for this website.\n\n![satnaing.dev Lighthouse score](https://user-images.githubusercontent.com/53733092/159957822-7082e459-11e9-4616-8f1e-49d0881f7cbb.png \"satnaing.dev Lighthouse score\")\n\n### Animations\n\nInitially I used [Framer Motion](https://www.framer.com/motion/ \"Framer Motion\") to add animations and micro interactions for this website. However, when I tried to use some complex animations and parallax effects, I found it inconvenient to integrate with Framer Motion (Maybe I'm not very good at and used to working with it). Hence, I decided to use [GSAP](https://greensock.com/ \"GSAP Animation Library\") for all of my animations. It is one of the most popular animation library and it is capable of doing complex and advanced animations. You can see animations and micro interactions on pretty much every page of this website.\n\n![animations at satnaing.dev](https://res.cloudinary.com/noezectz/image/upload/v1653108324/SatNaing/ezgif.com-gif-maker_2_hehtlm.gif \"satnaing.dev website\")\n\n## Outro\n\nIn conclusion, this project gives me a lot of experience and confidence about developing blog site (SSG). Now, I have gained knowledge of git-based CMS and how it interacts with NextJS. I've also learned about SEO, dynamic sitemap generation and indexing Google procedures. I will make better projects in the future. So, stay tuned! ✌🏻\n\nAnd... last but not least, I would like to say 'thanks' to my friend [Swann Fevian Kyaw](https://www.facebook.com/bon.zai.3910 \"Swann Fevian Kyaw's Facebook Account\") (@[ToonHa](https://www.facebook.com/ToonHa-102639465752883 \"ToonHa Facebook Page\")) who has drawn a beautiful illustration for my hero section of the website.\n\n## Project Links\n\n- Website: [https://satnaing.dev/](https://satnaing.dev/ \"https://satnaing.dev/\")\n- Blog: [https://satnaing.dev/blog](https://satnaing.dev/blog \"https://satnaing.dev/blog\")\n- Repo: [https://github.com/satnaing/my-portfolio](https://github.com/satnaing/my-portfolio \"https://github.com/satnaing/my-portfolio\")\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"motivation","text":"Motivation"},{"depth":2,"slug":"tech-stack","text":"Tech Stack"},{"depth":2,"slug":"features","text":"Features"},{"depth":3,"slug":"seo-friendly","text":"SEO Friendly"},{"depth":3,"slug":"dynamic-sitemap","text":"Dynamic Sitemap"},{"depth":3,"slug":"light--dark-themes","text":"Light & Dark Themes"},{"depth":3,"slug":"fully-accessible","text":"Fully Accessible"},{"depth":3,"slug":"search-box-categories--tags","text":"Search box, Categories & Tags"},{"depth":3,"slug":"performance-and-lighthouse-score","text":"Performance and Lighthouse Score"},{"depth":3,"slug":"animations","text":"Animations"},{"depth":2,"slug":"outro","text":"Outro"},{"depth":2,"slug":"project-links","text":"Project Links"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
