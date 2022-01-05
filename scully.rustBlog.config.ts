import { ScullyConfig } from '@scullyio/scully';
import '@scullyio/scully-plugin-puppeteer';
import  { getFlashPreventionPlugin }  from '@scullyio/scully-plugin-flash-prevention';


/** this loads the default render plugin, remove when switching to something else. */



export const config: ScullyConfig = {
  defaultPostRenderers: [getFlashPreventionPlugin(), "seoHrefOptimise"],
  projectRoot: "./src",
  projectName: "rustBlog",
  spsModulePath: 'YOUR OWN MODULE PATH HERE',
  outDir: './dist/static',
  routes: {
    '/blog/:slug': {
      type: 'contentFolder',
      slug: {
        folder: "./blog"
      }
    },
  }
};
