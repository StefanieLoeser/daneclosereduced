import Link from "next/link";
import styled from "styled-components";
import BackHome from "../../components/BackHome";

import { getPost, getSlugs } from "../../utils/wordpress";

export default function PostPage({ post }) {
  return (
    <ModelPageWrapper>
      <h1 className="titleModel">{post.title.rendered}</h1>
      <div
        className="contentWrapper"
        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
      ></div>
      <BackHome />
    </ModelPageWrapper>
  );
}

export async function getStaticPaths() {
  const paths = await getSlugs("posts");

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const post = await getPost(params.slug);

  return {
    props: {
      post,
    },
    revalidate: 10,
  };
}

const ModelPageWrapper = styled.div`
  max-width: 100%;
  height: fit-content;
  margin-bottom: 2rem;
  position: relative;

  @media (min-width: 320px) {
    max-width: 80vw;
  }

  .titleModel {
    width: 100%;

    line-height: 3rem;
    margin-left: 2.5rem;
    filter: blur(1px);

    @media (min-width: 320px) {
      font-size: 3rem;
      filter: blur(2px);
    }

    @media (min-width: 768px) {
      font-size: 1.8rem;
      filter: blur(2px);
    }

    @media (min-width: 768px) {
      font-size: 2rem;
      width: 100%;
      filter: blur(2px);
    }
  }
  .contentWrapper {
    max-width: 60vw;
    padding-right: 5vw;
    margin: 0;
    position: relative;
    left: -2.5rem;

    @media (min-width: 768px) {
      left: 0rem;
    }
  }
`;
