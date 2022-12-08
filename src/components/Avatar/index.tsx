import * as RadixAvatar from "@radix-ui/react-avatar";
import { User } from "phosphor-react";

import { Container, ImageAvatar } from "./styles";

interface AvatarProps {
  src?: string;
  alt?: string;
}

export function Avatar({ src, alt }: AvatarProps) {
  return (
    <Container>
      <ImageAvatar src={src} alt={alt} />
      <RadixAvatar.Fallback>
        <User color="#FFF" size={24} />
      </RadixAvatar.Fallback>
    </Container>
  );
}