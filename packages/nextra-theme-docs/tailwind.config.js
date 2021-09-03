const { spacing, fontFamily } = require('tailwindcss/defaultTheme')
const { sky, orange } = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.js', './src/**/*.css'],
  theme: {
    fontFamily: {
      sans: ['Inter', ...fontFamily.sans]
    },
    extend: {
      typography: theme => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
            a: {
              color: theme('colors.blue.500'),
              '&:hover': {
                color: theme('colors.blue.700')
              },
              code: { color: theme('colors.blue.400') }
            },
            'h2,h3,h4': {
              'scroll-margin-top': spacing[32]
            },
            code: { color: theme('colors.pink.500') },
            'blockquote p:first-of-type::before': false,
            'blockquote p:last-of-type::after': false
          }
        },
        dark: {
          css: {
            color: theme('colors.gray.300'),
            a: {
              color: theme('colors.blue.400'),
              '&:hover': {
                color: theme('colors.blue.600')
              },
              code: { color: theme('colors.blue.400') }
            },
            blockquote: {
              borderLeftColor: theme('colors.gray.700'),
              color: theme('colors.gray.300')
            },
            'h1,h2,h3,h4': {
              color: theme('colors.gray.100'),
              'scroll-margin-top': spacing[32]
            },
            hr: { borderColor: theme('colors.gray.700') },
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
  plugins: [require('@tailwindcss/typography')],
  darkMode: 'class'
}
