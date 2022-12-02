import { styled } from "../../configs/stitches.config";
import * as Avatar from "@radix-ui/react-avatar";

export const Container = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  color: '$white',
  padding: '1rem',
  marginBottom: '1.5rem',

  'p': {
    fontSize: '1.25rem'
  },

  'nav': {
    display: 'flex',
    alignItems: 'center',
    gap: '.5rem',

    '.notification': {
      position: 'relative',
      cursor: 'pointer',

      'svg': {
        width: '1.85rem',
        height: '1.85rem',
      },

      'span': {
        background: 'red',
        borderRadius: '99999px',
        width: '1rem',
        height: '1rem',
        position: 'absolute',
        top: -2.5,
        right: 0,
        display: 'flex',
        padding: '.25rem',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '.75rem'
      }
    },

    '.profile > img': {
      borderRadius: 99999,
      width: '3rem',
      height: '3rem',
    }
  }
});

export const AvatarContainer = styled(Avatar.Root, {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  verticalAlign: 'middle',
  overflow: 'hidden',
  userSelect: 'none',
  width: '45px',
  height: '45px',
  borderRadius: '100%',
});

export const AvatarImage = styled(Avatar.Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit'
});