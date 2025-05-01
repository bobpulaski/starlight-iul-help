// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  base: "/docs/",
  integrations: [
    starlight({
      title: "Документация Quatros",
      locales: {
        root: {
          label: "Русский",
          lang: "ru",
        },
      },
      // social: [
      //   {
      //     icon: "github",
      //     label: "GitHub",
      //     href: "https://github.com/withastro/starlight",
      //   },
      // ],
      sidebar: [
        { slug: "intro" },
        { slug: "builder" },
        { slug: "signs" },
        { slug: "history" },

        // {
        //   label: "Подписи",
        //   autogenerate: { directory: "reference" },
        // },
        // {
        //   label: "История ",
        //   autogenerate: { directory: "suka" },
        // },
      ],
    }),
  ],
});
