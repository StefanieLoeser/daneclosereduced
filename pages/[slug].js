import styled from "styled-components";
import BackHome from "../components/BackHome";

import { getPage, getSlugs } from "../utils/wordpress";

export default function Page({ page }) {
  return (
    <>
      <PageWrapper>
        <h1 className="titleModel">{page.title.rendered}</h1>
        <div
          className="contentWrapper"
          dangerouslySetInnerHTML={{ __html: page.content.rendered }}
        ></div>
      </PageWrapper>
      <BackHome />
    </>
  );
}

export async function getStaticPaths() {
  const paths = await getSlugs("pages");

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const page = await getPage(params.slug);

  return {
    props: {
      page,
    },
    revalidate: 10,
  };
}

const PageWrapper = styled.div`
  margin-left: 2.5rem;
  max-width: 100vw;
  margin-bottom: 2rem;
  position: relative;

  @media (min-width: 320px) {
    max-width: 80vw;
  }

  .titleModel {
    width: fit-content;

    line-height: 3rem;

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
    position: relative;
    /* padding-right: 5vw;
    margin: 0;
    left: 2.5rem; */

    @media (min-width: 768px) {
      left: 0rem;
    }
  }
`;
