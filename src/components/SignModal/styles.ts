import { styled } from "../../configs/stitches.config";
import * as Modal from "@radix-ui/react-dialog";

export const Trigger = styled(Modal.Trigger, {
  position: 'absolute',
  top: 0
});

export const Overlay = styled(Modal.Overlay, {
  position: 'fixed',
  background: 'rgba(0, 0, 0,  .5)',
  inset: 0
});

export const Content = styled(Modal.Content, {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  background: '#FFF',
  width: '85vw',
  maxWidth: '350px',
  maxHeight: '80vh',
  borderRadius: '16px',
  padding: '3.25rem 0 2.5rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '.wrapper': {
    maxWidth: '80%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',

    'img': {
      width: '8rem',
      height: '8rem'
    },

    'div': {
      marginTop: '1rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '.25rem',

      'p': {
        color: '$gray700',
        lineHeight: 1.5,
        margin: '.25rem 0 1rem'
      },

      'button': {
        padding: '.5rem 0',
        background: '$greenMid',
        fontSize: '1.15rem',
        border: 0,
        borderRadius: '8px',
        color: '$white',
        cursor: 'pointer',
        transition: 'filter .25s',

        '&:hover': {
          filter: 'brightness(90%)'
        }
      }
    }
  },
});

export const CloseButton = styled(Modal.Close, {
  position: 'absolute',
  top: 20,
  right: 20,
  background: 'transparent',
  border: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 22,
  color: '$gray400'
});