const { spacing, fontFamily } = require('tailwindcss/defaultTheme')
const { sky, orange } = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.js', './src/**/*.css'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans]
      },
      typography: theme => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
            '&:first-child': {
              marginTop: spacing[2]
            },
            a: {
              '&:hover': {
                color: theme('colors.sky.700')
              },
              code: { color: theme('colors.blue.400') }
            },
            'h2,h3,h4': {
              'scroll-margin-top': spacing[32]
            },
            code: {
              color: theme('colors.pink.500'),
              backgroundColor: theme('colors.gray.50')
            },
            'blockquote p:first-of-type::before': false,
            'blockquote p:last-of-type::after': false
          }
        },
        dark: {
          css: {
            color: theme('colors.gray.300'),
            a: {
              color: theme('colors.sky.400'),
              '&:hover': {
                color: theme('colors.sky.500')
              }
            },
            code: {
              backgroundColor: theme('colors.gray.800')
            },
            blockquote: {
              borderLeftColor: theme('colors.gray.700'),
              color: theme('colors.gray.300')
            },
            'h1,h2,h3,h4': {
              color: theme('colors.gray.100'),
              'scroll-margin-top': spacing[32]
            },
            hr: { borderColor: theme('colors.gray.900') },
            thead: {
              color: theme('colors.gray.100')
            }
            // ol: {
            //   li: {
            //     '&:before': { color: theme('colors.gray.500') }
            //   }
            // },
            // ul: {
            //   li: {
            //     '&:before': { backgroundColor: theme('colors.gray.500') }
            //   }
            // },
            // strong: { color: theme('colors.gray.300') },
            // tbody: {
            //   tr: {
            //     borderBottomColor: theme('colors.gray.700')
            //   }
            // }
          }
        }
      }),
      colors: {
        orange,
        sky,
        dark: '#111'
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
