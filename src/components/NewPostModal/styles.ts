import { styled } from "../../configs/stitches.config";
import * as Modal from "@radix-ui/react-dialog";


export const Overlay = styled(Modal.Overlay, {
  position: 'absolute',
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
  maxWidth: '500px',
  maxHeight: '80vh',
  borderRadius: '8px',
  padding: '3.25rem 0 2.5rem',
});

export const PostContent = styled('div', {
  padding: '0 1rem',

  display: 'flex',
  flexDirection: 'column',

  'textarea': {
    border: 0,
    outline: 0,
    padding: '.25rem',
    color: '$gray800',
    minHeight: '6rem',
    fontSize: '1.15rem',
    margin: '.5rem 0 1rem',
    resize: 'none',
    scrollbarWidth: 0,
    scrollBehavior: 'unset'
  },

  'footer': {
    display: 'flex',
    justifyContent: 'flex-end',
    borderTop: '1px solid $gray200',
    padding: '1rem 0 0',

    'button': {
      alignSelf: 'flex-end',
      border: 0,
      padding: '.25rem 1.15rem',
      background: '$greenMid',
      color: '$white',
      borderRadius: '4px'
    }
  }
});

export const CloseButton = styled(Modal.Close, {
  position: 'absolute',
  top: 20,
  left: 10,
  background: 'transparent',
  border: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 22,
  color: '$gray400'
});