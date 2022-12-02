import { styled } from "../../configs/stitches.config";

export const Container = styled('div', {
  background: '$gray900',
  height: '100vh',
});

export const Header = styled('header', {
  background: '$gray950',
  color: '$white',
  textAlign: 'center',
  display: 'flex',
  alignItems: 'center',
  gap: '.85rem',
  padding: '1.25rem 1rem',
});

export const PostInput = styled('textarea', {
  background: 'transparent',
  resize: 'none',
  color: '$gray100',
  width: '100%',
  height: '75vh',
  outline: 0,
  border: 0,
  padding: '1rem'
});

export const PostOptions = styled('footer', {
  display: 'flex',
  justifyContent: 'flex-end',
  padding: '1rem 1rem 0',
  borderTop: '1px solid $gray600',

  'button': {
    cursor: 'pointer',
    color: '$white',
    border: 0,
    padding: '.85rem',
    fontSize: '1.25rem',
    background: '$gray600',
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'filter .25s',

    '&:hover': {
      filter: 'brightness(90%)'
    }
  },

  '.sendPost': {
    background: '$greenMid',
  }
});