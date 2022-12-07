import styled from "styled-components";

import { getPosts, getMedia } from "../utils/wordpress";

import Post from "../components/Post";

export default function Home({ posts }) {
  const jsxPosts = posts.map((post) => {
    const featuredMedia = post["_embedded"]["wp:featuredmedia"]?.[0];
    return <Post post={post} featuredMedia={featuredMedia} key={post.id} />;
  });

  return (
    <>
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
`;

const GridContainer = styled.div`
  z-index: 1;
  display: grid;
  width: 100vw;
  height: 100vh;
  padding: 3rem;
  overflow: scroll;
  grid-template-columns: repeat(5, 1fr);
  align-items: center;
  justify-self: center;
  gap: 3rem;
`;

const TitleDC = styled.h1`
  position: absolute;
  margin-left: 20vw;
  top: 20vh;

  font-family: "Gloria Hallelujah", sans-serif;
  text-transform: uppercase;
  font-style: normal;
  font-weight: 400;
  font-size: 5.5rem;

  color: #000;

  filter: blur(4px);
`;

const TitleRed = styled(TitleDC)`
  margin-right: 5vw;
  right: 20vw;
  top: 56vh;
`;
