// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        [
          'yandex-metrika-module-nuxt3',
          {
            id: '94075822',
            webvisor: true,
            consoleLog: true,
            clickmap: true,
            useCDN: false,
            trackLinks: true,
            accurateTrackBounce: true,
          }
        ]
    ]
})