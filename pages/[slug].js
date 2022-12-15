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
  }
  .contentWrapper {
    position: relative;
    font-size: 1.1rem;
    line-height: 1.5rem;

    @media (min-width: 320px) {
      max-width: 70vw;
    }

    @media (min-width: 767px) {
      max-width: 55vw;
    }

    @media (min-width: 1024px) {
      max-width: 500px;
    }
  }
`;
