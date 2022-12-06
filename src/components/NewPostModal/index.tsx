import * as Modal from "@radix-ui/react-dialog";
import { X } from "phosphor-react";
import { ReactNode } from "react";

import { Overlay, Content, PostContent, CloseButton } from "./styles";

interface NewPostModalProps {
  children: ReactNode;
}

export function NewPostModal({ children }: NewPostModalProps) {
  return (
    <Modal.Root>
      <Modal.Trigger asChild>
        {children}
      </Modal.Trigger>

      <Modal.Portal>
        <Overlay />

        <Content>
          <PostContent>
            <Modal.Title>Faça um novo post</Modal.Title>

            <textarea
              placeholder="Comente aqui seu novo post"
            />

            <footer>
              <button>Postar</button>
            </footer>

            <CloseButton asChild>
              <button>
                <X />
              </button>
            </CloseButton>
          </PostContent>
        </Content>
      </Modal.Portal>
    </Modal.Root>
  );
}