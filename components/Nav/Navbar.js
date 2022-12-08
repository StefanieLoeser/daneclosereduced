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
  heigth: 0px;
  border-bottom: 0px;

  padding-right: 40px;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media (min-width: 768px) {
    z-index: 2;
    border-bottom: 2px solid #fff;
    height: 60px;
  }
`;
