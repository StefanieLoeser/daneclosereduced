import Link from "next/link";
import styled from "styled-components";

import { getPost, getSlugs } from "../../utils/wordpress";

export default function PostPage({ post }) {
  console.log(post.content.rendered);
  return (
    <ModelPageWrapper>
      <h1 className="titleModel">{post.title.rendered}</h1>
      <div
        className="contentWrapper"
        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
      ></div>
      <Link href="/" className="linkToHome">
        ‹ back to home
      </Link>
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
  width: 80vw;
  margin: 0rem;

  .titleModel {
    font-family: "Gloria Hallelujah", sans-serif;
    font-size: 2rem;
    line-height: 3rem;
    margin-left: 2rem;
    filter: blur(1px);
  }
  .contentWrapper {
    max-width: 80vw;
    margin: 0;
  }

  .linkToHome {
    margin: 2.1rem;
    line-height: 2rem;
  }
`;
