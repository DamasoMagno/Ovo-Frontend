import { Header } from "../components/Header";
import { Navigation } from "../components/Navigation";
import { Post } from "../components/Post";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Post />
        <Post />
        <Post />
      </main>

      <Navigation />
    </>
  );
}