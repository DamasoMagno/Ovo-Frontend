import { styled } from "../../configs/stitches.config";


export const Header = styled('header', {
  background: '$gray950',
  color: '$white',
  textAlign: 'center',
  display: 'flex',
  alignItems: 'center',
  gap: '.85rem',
  padding: '1.25rem 1rem',
});

export const Post = styled('textarea', {
  background: 'transparent',
  resize: 'none',
  color: '$gray100',
  width: '100%',
  height: '75%',
  fontSize: '1.05rem',
  outline: 0,
  border: 0,
  padding: '1rem',
});

export const PostOptions = styled('footer', {
  position: 'fixed',
  background: '$gray900',
  bottom: 0,
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-end',
  padding: '.85rem 1rem',
  borderTop: '1px solid $gray600',

  'button': {
    cursor: 'pointer',
    color: '$white',
    border: 0,
    padding: '.85rem',
    fontSize: '1.15rem',
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