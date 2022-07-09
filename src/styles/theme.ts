import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    gray: {
      '900': '#181B23',
      '800': '#1F2029',
      '700': '#47585B',
      '600': '#4B4D63',
      '500': '#616480',
      '400': '#797D9A',
      '300': '#999999',
      '200': '#B3B5C6',
      '100': '#DADADA',
      '50': '#F5F8FA'
    },
    yellow: {
      '500': '#FFBA08'
    }
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins'
  },
  styles: {
    global: {
      body: {}
    }
  }
})
