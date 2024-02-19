export default defineAppConfig({
  alpine: {
    title: 'Anna in travel',
    description: 'I share my experience and knowledge to help you discover the world and make your journey vivid and memorable.',
    keywords: 'Travel, Asia, Thailand, Vladivostok, China, Vietnam',
    image: {
      src: '/aonang.jpg',
      alt: 'Anna in travel',
      width: 400,
      height: 300
    },

    header: {
      position: 'right', // possible value are : | 'left' | 'center' | 'right'
      logo: {
        path: '/logo.svg', // path of the logo
        pathDark: '/logo.svg', // path of the logo in dark mode, leave this empty if you want to use the same logo
        alt: 'Travel' // alt of the logo
      }
    },

    footer: {
      credits: {
        enabled: false, // possible value are : true | false
        repository: 'https://www.github.com/nuxt-themes/alpine' // our github repository
      },
      navigation: true, // possible value are : true | false
      alignment: 'center', // possible value are : 'none' | 'left' | 'center' | 'right'
      message: '' // string that will be displayed in the footer (leave empty or delete to disable)
    },

    socials: {
      twitter: '',
      instagram: '',
      youtube: '@anna-in-travel-guide',
    },

    form: {
      successMessage: 'Message sent. Thank you!'
    },

    backToTop: {
      text: 'Back to top'
    },
    back: {
      text: 'Back',
    }
  }
})
