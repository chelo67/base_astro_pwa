import { defineConfig } from 'astro/config'
import AstroPWA from '@vite-pwa/astro'

// https://astro.build/config
export default defineConfig({
  
  vite: {
    logLevel: 'info',
    define: {
      __DATE__: `'${new Date().toISOString()}'`,
    },
    server: {
      fs: {
        // Allow serving files from hoisted root node_modules
        allow: ['../..']
      }
    },
  },
  integrations: [
    AstroPWA({
      name: "Astro pwa",
      short_name: "Astro pwa",
      start_url: "/base_astro_pwa/",
      scope: "/base_astro_pwa/",
      display: "standalone",
      description: "A description for your application",
      lang: " The default language of your application",
      dir: "auto",
      theme_color: "#000000",
      background_color: "#000000",
      orientation: "portrait",
      icons: [
      {
          src: "/icons/icon-72x72.png",
          sizes: "72x72",
          type: "image/png"
        },
        {
          src: "/icons/icon-96x96.png",
          sizes: "96x96",
          type: "image/png"
        },
        {
          src: "/icons/icon-128x128.png",
          sizes: "128x128",
          type: "image/png"
        },
        {
          src: "/icons/icon-144x144.png",
          sizes: "144x144",
          type: "image/png"
        },
        {
          src: "/icons/icon-152x152.png",
          sizes: "152x152",
          type: "image/png"
        },
        {
          src: "/icons/icon-192x192.png",
          sizes: "192x192",
          type: "image/png"
        },
        {
          src: "/icons/icon-384x384.png",
          sizes: "384x384",
          type: "image/png"
        },
        {
          src: "/icons/icon-512x512.png",
          sizes: "512x512",
          type: "image/png"
        }
  ],
  "screenshots": [
      {
          src: "https://www.pwabuilder.com/assets/screenshots/screen1.png",
          sizes: "2880x1800",
          type: "image/png",
          description: "A screenshot of the home page"
      }
  ],
  "related_applications": [
      {
          platform:"windows",
          url: "https://chelo67.github.io/base_astro_pwa/"
      }
  ],
  prefer_related_applications: false,
  shortcuts: [
      {
          name:"The name you would like to be displayed for your shortcut",
          url:"The url you would like to open when the user chooses this shortcut. This must be a URL local to your PWA. For example: If my start_url is /, this URL must be something like /shortcut",
          description:"A description of the functionality of this shortcut"
      }
  ]
    }),
  ],
})
