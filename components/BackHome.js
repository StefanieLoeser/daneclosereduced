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
  cursor: pointer;
  font-weight: 400;
  font-size: 1.2rem;

  @media (max-width: 420px) {
  }

  @media (max-width: 1024px) {
    font-size: 1.2rem;
  }
`;
