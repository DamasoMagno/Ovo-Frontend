import { Avatar } from "../components/Avatar";
import { Navigation } from "../components/Navigation";
import { Post } from "../components/Post";

import { Container, Header } from "../styles/pages/Home";

export default function Home() {
  const posts = [
    {
      id: "12313",
      user: {
        name: "Damaso Magno",
        userTag: "Front End Developer",
        avatarUrl: "https://github.com/DamasoMagno.png"
      },
      content: {
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error doloribus, temporibus modi architecto illum cumque vel rerum unde accusamus. Recusandae, vero. Nemo corporis quidem est. Asperiores optio laboriosam laborum? Earum!",
        publicated_at: "2h"
      }
    },
    {
      id: "12313233",
      user: {
        name: "Damaso Magno",
        userTag: "Front End Developer",
        avatarUrl: "https://github.com/DamasoMagno.png"
      },
      content: {
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error doloribus, temporibus modi architecto illum cumque vel rerum unde accusamus. Recusandae, vero. Nemo corporis quidem est. Asperiores optio laboriosam laborum? Earum!",
        publicated_at: "2h"
      }
    },
    {
      id: "12333d13",
      user: {
        name: "Damaso Magno",
        userTag: "Front End Developer",
        avatarUrl: "https://github.com/DamasoMagno.png"
      },
      content: {
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error doloribus, temporibus modi architecto illum cumque vel rerum unde accusamus. Recusandae, vero. Nemo corporis quidem est. Asperiores optio laboriosam laborum? Earum!",
        publicated_at: "2h"
      }
    }, {
      id: "12333d13",
      user: {
        name: "Damaso Magno",
        userTag: "Front End Developer",
        avatarUrl: "https://github.com/DamasoMagno.png"
      },
      content: {
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error doloribus, temporibus modi architecto illum cumque vel rerum unde accusamus. Recusandae, vero. Nemo corporis quidem est. Asperiores optio laboriosam laborum? Earum!",
        publicated_at: "2h"
      }
    },
  ];

  return (
    <Container>
      <Header>
        <p>Olá, <strong>Damaso</strong></p>

        <Avatar
          src="https://github.com/DamasoMagno.png"
          alt="Perfil do usuario Damaso Magno"
        />
      </Header>

      <main>
        {posts.map(post => (
          <Post post={post} key={post.id} />
        ))}
      </main>

      <Navigation />
    </Container>
  );
}