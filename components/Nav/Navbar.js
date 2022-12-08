import styled from "styled-components";
import Burger from "./Burgermenu";

export default function Navbar({ posts }) {
  return (
    <Nav>
      <Burger posts={posts} />
    </Nav>
  );
}

const Nav = styled.nav`
  width: 100%;
  height: 0px;
  border-bottom: 0px;
  background: none;

  padding-right: 2rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media (min-width: 768px) {
    z-index: 2;
    /* border-bottom: 4px dotted #fff; */
    height: 60px;
  }
`;
