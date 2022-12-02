import { styled } from "../../configs/stitches.config";

export const Container = styled('div', {
  background: '$gray800',
  padding: '1rem 0',
  color: '$gray200',

  display: 'flex',
  flexDirection: 'column',

  '& + div': {
    marginTop: '1rem'
  },

  'header': {
    display: 'flex',
    alignItems: 'center',
    gap: '.85rem',
    padding: '0 1rem 1rem',

    'img': {
      borderRadius: 9999,
      width: '2.5rem',
      height: '2.5rem'
    },

    '.profile': {
      display: 'flex',
      flexDirection: 'column',

      'strong': {
        color: '$purpleMid',
        marginBottom: '.15rem',
        fontWeight: 'bold'
      },

      'span': {
        fontWeight: 'normal',
        fontSize: '.85rem',
        color: '$gray200'
      }
    }
  },

  'p': {
    textAlign: "justify",
    lineHeight: 1.4,
    borderTop: '1px solid $gray500',
    borderBottom: '1px solid $gray500',
    padding: '1rem 1rem',
  },

  'footer': {
    padding: '1rem 1rem 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    'button': {
      background: 'transparent',
      border: 0,
      color: '$gray400',
      fontSize: '1.25rem',

      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  }
});