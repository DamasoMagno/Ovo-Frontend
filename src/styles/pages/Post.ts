import { styled } from "../../configs/stitches.config";


export const Header = styled('header', {
  background: '$gray950',
  color: '$white',
  textAlign: 'center',
  padding: '1.25rem 1rem',

  display: 'flex',
  alignItems: 'center',
  gap: '.85rem',
});

export const PostContent = styled('div', {
  padding: '0 1rem',
  marginTop: '1rem',

  '.ownerPost': {
    color: '$white',
    display: 'flex',
    alignItems: 'center',
    gap: '.5rem',

    '> span': {
      width: '2rem',
      height: '2rem'
    },

    'div': {
      display: 'flex',
      flexDirection: 'column',
      ga: '.25rem'
    }
  },

  '.post': {
    margin: '1.25rem 0 1.5rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',

    'p': {
      color: '$white',
      lineHeight: 1.5
    },

    'time': {
      display: 'flex',
      alignItems: 'center',
      color: '$gray400',

      'span:before': {
        width: '2px',
        height: '2px',
        display: 'block',
        content: '',
        borderRadius: '8px',
        margin: '0 .25rem',
        background: '$gray300',
      }
    }
  },

  '.feedback': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '3rem',
    color: '$white',
    fontSize: '1rem',
    padding: '0 0 1rem',

    'div': {
      display: 'flex',
      alignItems: 'center',
      gap: '.4rem'
    }
  }
});

export const Feedback = styled('ul', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2.5rem',
  padding: '1rem 1rem',
  borderTop: '1px solid $gray800',
  borderBottom: '1px solid $gray800',

  'li, button': {
    display: 'flex',
    alignItems: 'center',
    gap: '.5rem',
    fontWeight: 'bold',
    color: '$white'
  },

  'button': {
    background: 'transparent',
    border: 0,
    fontSize: '1rem'
  },

  'a': {
    color: '$white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export const Comments = styled('div', {
  padding: '1rem 1rem',

  '.comment': {
    color: '$white',
    display: 'flex',
    gap: '.85rem',

    '& + div': {
      marginTop: '1.5rem'
    },

    '> span': {
      width: '25%',
      height: '25%',
    },

    '.userComment': {
      'strong': {
        fontSize: '.95rem'
      },
      
      'p': {
        marginTop: '.25rem',
        lineHeight: 1.5,
        fontSize: '.85rem'
      }
    }
  }
});