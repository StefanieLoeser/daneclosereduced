import Head from "next/head";
import styled from "styled-components";

import { getPosts, getMedia } from "../utils/wordpress";

import Post from "../components/Post";

export default function Home({ posts }) {
  const jsxPosts = posts.map((post) => {
    const featuredMedia = post["_embedded"]["wp:featuredmedia"]?.[0];
    console.log(featuredMedia);
    return <Post post={post} featuredMedia={featuredMedia} key={post.id} />;
  });

  return (
    <>
      <Head>
        <title>Dane Close Reduced</title>
        <meta name="description" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&family=Open+Sans:wght@300;400&family=Permanent+Marker&family=Rock+Salt&family=Share+Tech&display=swap"
          rel="stylesheet"
        />
      </Head>
      <BodyContainer>
        <main>
          <TitleDC>dane close</TitleDC>
          <TitleRed>reduced</TitleRed>
          <GridContainer>{jsxPosts}</GridContainer>
        </main>
      </BodyContainer>
    </>
  );
}

export async function getStaticProps({ params }) {
  const posts = await getPosts();
  const media = await getMedia();

  return {
    props: {
      posts,
      media,
    },
    revalidate: 10, // In seconds
  };
}

const BodyContainer = styled.div`
  width: 100vw;
  /* height: 100vh; */
  padding: 3rem;
  align-content: center;
`;

const TitleDC = styled.h1`
  position: absolute;
  left: 20vw;
  top: 25vh;

  font-family: "Gloria Hallelujah", sans-serif;
  text-transform: uppercase;
  font-style: normal;
  font-weight: 400;
  font-size: 4.5rem;
  line-height: 95px;

  color: #000;

  filter: blur(4px);
`;

const TitleRed = styled(TitleDC)`
  left: 734px;
  top: 414px;
`;

const GridContainer = styled.div`
  display: grid;
  width: 90vw;
  grid-template-columns: repeat(5, 1fr);
  align-items: center;
  justify-items: center;

  gap: 10px;
`;
