import { extendTheme } from '@chakra-ui/react';

const config = {
  useSystemColorMode: false,
  initialColorMode: 'light',
};

const theme = extendTheme({
  config,
  layerStyles: {
    bgShadow: {
      backgroundImage: `linear-gradient(0deg,hsla(0,0%,0%,0),hsla(0,0%,0%,.00709) 10.47%,hsla(0,0%,0%,.02755) 19.56%,hsla(0,0%,0%,.06016) 27.58%,hsla(0,0%,0%,.1037) 34.81%,hsla(0,0%,0%,.15697) 41.57%,hsla(0,0%,0%,.21875) 48.13%,hsla(0,0%,0%,.28782) 54.79%,hsla(0,0%,0%,.36296) 61.85%,hsla(0,0%,0%,.44297) 69.61%,hsla(0,0%,0%,.52662) 78.36%,hsla(0,0%,0%,.6127) 88.39%,hsla(0,0%,0%,.7))`,
    },
    textShadow: {
      textShadow: '0 1px 2px rgba(0, 0, 0, 0.25)',
    },
  },
  styles: {
    global: {
      html: {
        '&:focus-within': {
          // scrollBehavior: 'smooth'
        },
      },

      body: {
        color: 'black',
      },

      'b,strong': {
        fontWeight: 'bold',
      },
    },
  },

  fonts: {
    // body: "'Museo Sans', sans-serif;",
    // heading: "'Museo Sans', sans-serif;",
  },

  fontWeights: {
    hairline: 100,
    light: 100,
    thin: 100,
    normal: 400,
    medium: 500,
    semibold: 500,
    bold: 500,
    extrabold: 500,
    black: 500,
  },
});

// typeof window === 'object' && console.log(theme);

export type Theme = typeof theme;

export default theme;
