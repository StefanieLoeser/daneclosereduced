import Link from "next/link";
import styled from "styled-components";
import BackHome from "../components/BackHome";

export default function About() {
  return (
    <>
      <AboutWrapper>
        <h1>about</h1>
        <p>dane close reduced lorem ipsum</p>
      </AboutWrapper>
      <BackHome />
    </>
  );
}

const AboutWrapper = styled.div`
  max-width: 100%;
  height: fit-content;
  margin-bottom: 2rem;
  padding: 2rem;
  position: relative;
`;
