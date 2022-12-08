import { styled } from "../../configs/stitches.config";

export const Container = styled('div', {
  background: '$black',
  border: '.00011px solid $black'
});

export const Header = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  color: '$white',
  padding: '1rem',
  marginBottom: '1.5rem',

  'p': {
    fontSize: '1.25rem'
  },

  '.profile > img': {
    borderRadius: 99999,
    width: '3rem',
    height: '3rem',
  }
});