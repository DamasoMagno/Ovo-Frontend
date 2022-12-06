import { globalCss } from "../configs/stitches.config";

export const GlobalStyles = globalCss({
  '*': {
    padding: 0,
    margin: 0,
    boxSizing: 'border-box'
  },

  'body': {
    background: '$gray900'
  },

  'body, input, textarea, button': {
    fontFamily: '$body',
    fontWeight: '400',
  }
});