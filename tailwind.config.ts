// import type { Config } from 'tailwindcss'
// import daisyui from 'daisyui'

// const config: Config = {
//   content: [
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   plugins: [daisyui],
//   daisyui: {
//     themes: ["light", "dark"], // true = tous les thèmes | false = uniquement light + dark | array = thèmes spécifiques
//   },
//   variants: {
//     extend: {
//       scale: ['active'],
//       transform: ['active'],
//       shadow: ['active']
//     }
//   }
// }

// export default config

import type { Config } from 'tailwindcss'
import daisyui from 'daisyui'

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      scale: {
        '95': '0.95',
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light", "dark"],
  },
  variants: {
    extend: {
      scale: ['hover', 'active'],
      transform: ['hover', 'active'],
      shadow: ['hover', 'active']
    }
  }
}

export default config