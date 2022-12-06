import Link from "next/link";
import { House, PlusCircle, User } from "phosphor-react";

import { NewPostModal } from "../NewPostModal";

import { Container } from "./styles";

export function Navigation() {
  return (
    <Container>
      <Link href="/">
        <House />
      </Link>

      <NewPostModal>
        <button>
          <PlusCircle />
        </button>
      </NewPostModal>

      <Link href="/">
        <User />
      </Link>
      </Container>
      );
}