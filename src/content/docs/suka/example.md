---
title: Example Reference
description: A reference page in my new Starlight docs site.
---

## At its core, Astro embraces five fundamental principles:

Content-driven: Astro shines when showcasing content, making it perfect for content-rich websites.
Server-first: By prioritizing server-rendering, Astro helps websites load faster.
Fast by default: Through pre-rendering to static HTML, you get exceptional load times without extra work.
Easy-to-use: The framework is approachable regardless of your experience level.
Developer-focused: As an open-source project, Astro offers robust tools and community support.
What truly sets Astro apart is its "island architecture" that serves static HTML by default without JavaScript bloat. This approach completely changes how we build for the web, especially when performance matters.

This performance-first philosophy directly impacts business success. According to recent performance research, every 100ms faster a site loads leads to 1% more conversions (earning +$380,000/year). AutoAnything found that making their site 50% faster resulted in 12% more sales, while Furniture Village saw that a 20% faster site led to 10% more conversions.

For developers building content websites, portfolios, blogs, or marketing pages, understanding what Astro is and why to use it offers a compelling alternative to heavier frameworks that often prioritize complex applications over simpler, content-focused solutions. Furthermore, modern frontend developers are increasingly choosing to use headless CMS to enhance flexibility and efficiency in content management, and Astro integrates seamlessly with these systems.

In brief:

Astro.js delivers exceptional performance for content-focused websites through its unique island architecture that minimizes JavaScript shipped to the browser
The framework's partial hydration approach allows developers to choose which components need interactivity, keeping the rest as lightweight HTML
Astro integrates effectively with headless CMS platforms like Strapi 5, enabling the creation of content-driven websites with modern development tools
Developers can integrate components from React, Vue, Svelte, and other frameworks while maintaining Astro's performance benefits
What is Astro.js and Why Use It?
Astro.js is a modern web framework with a specific mission: to build fast, content-focused websites. Unlike many JavaScript frameworks, Astro takes a fundamentally different approach through its server-first architecture.

What makes Astro stand out is that it's a multi-page application (MPA) framework that works with HTML, CSS, and JavaScript. While traditional MPA frameworks often use server-side languages like PHP, Astro provides a JavaScript-based development experience that outputs highly optimized static sites.

The most distinctive feature of Astro is its default "zero JavaScript" approach. By default, Astro doesn't ship any JavaScript to the client; it's only used during the build process. The result is lightning-fast websites that prioritize content delivery without unnecessary client-side JavaScript.

Astro Islands Architecture
Astro introduces "Islands Architecture" (sometimes called partial hydration), which represents a shift in how interactive components reach browsers. Understanding what Astro is and why to use it becomes clear with this innovative approach.

Here's how it works:

The server initially renders the entire page as static HTML.
Only specific interactive components (islands) receive JavaScript.
Each island can be hydrated independently under different conditions.
This approach means your site remains primarily static HTML, with JavaScript loaded only where and when it's actually needed. For example, a comment section might hydrate on interaction, while a header animation might load immediately.

This approach aligns well with the principles of composable architecture, allowing developers to assemble their applications using the best-suited components for each task.