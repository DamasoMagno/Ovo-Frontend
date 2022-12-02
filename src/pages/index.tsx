import Link from "next/link";
import Head from "next/head";

import { House, User, PlusCircle } from "phosphor-react";

import { Header } from "../components/Header";
import { Post } from "../components/Post";

import { Navigation } from "../styles/pages/Home";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ovo - Posts</title>
      </Head>

      <Header />

      <main>
        <Post />
        <Post />
        <Post />
      </main>

      <Navigation>
        <Link href="/">
          <House />
        </Link>
        <Link href="/createPost">
          <PlusCircle />
        </Link>
        <Link href="/profile">
          <User />
        </Link>
      </Navigation>
    </>
  );
}