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
    width: 100%;
    line-height: 3rem;
    font-size: 2rem;
    filter: blur(1px);

    @media (min-width: 767px) {
      font-size: 2.2rem;
      filter: blur(2px);
    }

    @media (min-width: 1024px) {
      font-size: 2rem;
      filter: blur(2px);
    }
  }
  .contentWrapper {
    max-width: 70vw;
    position: relative;
    /* padding-right: 5vw;
    margin: 0;
    left: 2.5rem; */

    @media (min-width: 320px) {
      font-size: 1.1rem;
      line-height: 1.2rem;
      width: ;
    }

    @media (min-width: 767px) {
      font-size: 1.5rem;
    }

    @media (min-width: 1024px) {
      font-size: 2rem;
    }
  }
`;
