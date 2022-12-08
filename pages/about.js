import Link from "next/link";
import styled from "styled-components";

export default function About() {
  return (
    <AboutWrapper>
      <h1>about</h1>
      <p>dane close reduced lorem ipsum</p>
      <Link href="/" className="linkToHome">
        ‹ back to home
      </Link>
    </AboutWrapper>
  );
}

const AboutWrapper = styled.div`
  .linkToHome {
    margin: 2.3rem;
    position: sticky;

    @media (min-width: 320px) {
      font-size: 1.5rem;
    }

    @media (min-width: 768px) {
      font-size: 1.5rem;
    }

    @media (min-width: 1024px) {
      font-size: 1.2rem;
    }
  }
`;
