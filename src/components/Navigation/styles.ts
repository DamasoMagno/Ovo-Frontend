import { styled } from "../../configs/stitches.config";


export const Container = styled('footer', {
  background: '$gray950',
  width: '100%',
  position: 'fixed',
  padding: '1rem 1rem',
  bottom: 0,
  left: 0,

  display: 'flex',
  alignContent: 'center',
  justifyContent: 'center',
  gap: '5rem',

  'button': {
    border: 0,
    background: 'transparent',
  },

  'a, button': {
    cursor: 'pointer',
  },

  'a svg, button svg': {
      width: '1.5rem',
      height: '1.5rem',
      color: '$gray300'
    }
});