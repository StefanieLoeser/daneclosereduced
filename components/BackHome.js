import Link from "next/link";
import styled from "styled-components";

export default function BackHome() {
  return (
    <Link href="/" legacyBehavior>
      <LinkToHome>‹ back to home</LinkToHome>
    </Link>
  );
}

const LinkToHome = styled.a`
  margin: 2.5rem 2rem;

  @media (min-width: 320px) {
    font-size: 1.8rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
`;
