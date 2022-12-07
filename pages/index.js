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
  width: 100vw;
  height: 100vh;
  padding: 3rem;
  overflow: scroll;
  align-items: center;
  justify-self: center;

  /* grid-template-columns: repeat(5, 1fr); */

  @media (min-width: 320px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }

  @media (min-width: 425px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
  }

  @media (min-width: 576px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
  }
`;

const TitleDC = styled.h1`
  position: absolute;
  margin-left: 15vw;
  top: 17vh;

  /* font-family: "Open Sans", sans-serif; */
  font-family: "Cousine", monospace;
  /* font-family: "Share Tech", sans-serif; */
  font-style: normal;
  font-weight: 400;

  color: #000;

  @media (min-width: 320px) {
    font-size: 4rem;
    margin-right: 10vw;
    text-align: right;
    top: 10vh;
    filter: blur(4px);
  }

  @media (min-width: 768px) {
    font-size: 6rem;
    margin-left: 10vw;
    top: 15vh;
    filter: blur(5px);
  }

  @media (min-width: 1024px) {
    font-size: 7rem;
    filter: blur(10px);
  }

  @media (orientation: landscape) {
    margin-left: 10vw;
    top: 10vh;
    filter: blur(5px);
  }
`;

const TitleRed = styled(TitleDC)`
  @media (min-width: 320px) {
    font-size: 4rem;
    top: 60vh;
    filter: blur(4px);
  }

  @media (min-width: 768px) {
    font-size: 7rem;
    margin-left: 10vh;
    top: 60vh;
    filter: blur(5px);
  }

  @media (min-width: 1024px) {
    font-size: 7rem;
    margin-right: 5vw;
    right: 17vw;
    top: 56vh;
  }

  @media (orientation: landscape) {
    margin-left: 50vh;
    top: 50vh;
  }
`;
