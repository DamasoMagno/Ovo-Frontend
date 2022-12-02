import { User } from "phosphor-react";

import { Container, ImageAvatar, NoImageAvatar } from "./styles";

interface AvatarProps {
  src?: string;
  alt?: string;
}

export function Avatar({ src, alt }: AvatarProps) {
  return (
    <Container>
      <ImageAvatar
        src={src}
        alt={alt}
      />
      <NoImageAvatar>
        <User color="#FFF" size={24} />
      </NoImageAvatar>
    </Container>
  );
}