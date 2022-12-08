import { styled } from "../../configs/stitches.config";
import * as Avatar from "@radix-ui/react-avatar";

export const Container = styled(Avatar.Root, {
  overflow: 'hidden',
  userSelect: 'none',
  width: '45px',
  height: '45px',
  borderRadius: '100%',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const ImageAvatar = styled(Avatar.Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: '100%'
});
