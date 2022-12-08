import Link from "next/link";
import { ArrowRight } from "phosphor-react";

import { Avatar } from "../Avatar";

import { Container } from "./styles";

interface PostProps {
  post: {
    user: {
      name: string;
      userTag: string;
      avatarUrl: string;
    },
    content: {
      text: string;
      publicated_at: string;
    }
  }
}

export function Post({ post }: PostProps) {
  return (
    <Container>
      <header>
        <Avatar
          src={post.user.avatarUrl}
          alt="Perfil do usuario Damaso Magno"
        />
        <div className="profile">
          <strong>{post.user.name}</strong>
          <span>{post.user.userTag}</span>
        </div>
      </header>

      <p>
        {post.content.text}
      </p>

      <footer>
        <time>Há {post.content.publicated_at}</time>
        <Link href="/post/1123123">
          <ArrowRight />
        </Link>
      </footer>
    </Container>
  );
}