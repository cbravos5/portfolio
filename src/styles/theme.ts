import { GlobalStyles, MantineTheme, MantineThemeOverride } from "@mantine/core";
import { fonts } from "./fonts";

export const theme: MantineThemeOverride = {
  colorScheme: 'dark',

  fontFamily: fonts.sono.style.fontFamily,

  colors: {
    primary: ['#0C0B2B'],
    secondary: ['#0077C0'],
    tertiary: ['#F2F2F2'],
    support: ['#5D6267']
  },


  globalStyles: ((theme) => ({
    'html, body, #__next': {
      width: '100%',
      height: '100%'
    },

    body: {
      background: theme.fn.linearGradient(180, '#0C0B2B', '#151424')
    }
  })) 
}