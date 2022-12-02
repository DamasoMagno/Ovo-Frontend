import Link from "next/link";

import { ArrowLeft, PaperPlaneTilt } from "phosphor-react";

import { Container, Header, PostInput, PostOptions } from "../styles/pages/CreatePost";

export default function CreatePost() {
  return (
    <Container>
      <Header>
        <Link href="/">
          <ArrowLeft color="#FFF"/>
        </Link>
        <h3>Novo Post</h3>
      </Header>

      <PostInput />

      <PostOptions>
        <button className="sendPost">
          <PaperPlaneTilt />
        </button>
      </PostOptions>
    </Container>
  );
}