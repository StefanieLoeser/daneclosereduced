import styled from "styled-components";

import { getPosts, getMedia } from "../utils/wordpress";

import Post from "../components/Post";

// import models from "../data.json";

// async function fetcherFunc(url) {
//   const res = await fetch(url);
//   return res.json();
// }

// export function getAllModels() {
//   const allModels = models.map((models) => {
//     return { ...models };
//   });
//   return allModels;
// }

export default function Home({ posts }) {
  //   const modelGrid = allModels.map((model) => {
  //     return <img src={model.image.mediaDetails.sizes[0].sourceUrl} />;
  //   });

  const jsxPosts = posts.map((post) => {
    const featuredMedia = post["_embedded"]["wp:featuredmedia"]?.[0];
    return <Post post={post} featuredMedia={featuredMedia} key={post.id} />;
  });

  //   return (
  //     <>
  //       <BodyContainer>
  //         <main>
  //           <TitleDC>dane close</TitleDC>
  //           <TitleRed>reduced</TitleRed>
  //           <GridContainer>{modelGrid}</GridContainer>
  //           {/* <GridContainer>{jsxPosts}</GridContainer> */}
  //         </main>
  //       </BodyContainer>
  //     </>
  //   );

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
  font-size: 5rem;
  line-height: 95px;

  color: #000;

  filter: blur(4px);
`;

const TitleRed = styled(TitleDC)`
  margin-right: 5vw;
  left: 50vw;
  top: 56vh;
`;

const GridContainer = styled.div`
  display: grid;
  width: 90vw;
  grid-template-columns: repeat(5, 1fr);
  align-items: center;
  justify-items: center;

  gap: 10px;
`;
