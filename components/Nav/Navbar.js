import styled from "styled-components";
import Link from "next/link";
import Burger from "./Burgermenu";
import RightNav from "./RightNav";

export default function Navbar({ posts }) {
  return (
    <Nav>
      <Burger />
      <RightNav posts={posts} />
    </Nav>
  );
}

const Nav = styled.nav`
  width: 100%;
  height: 65px;
  border-bottom: 2px solid #fff;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;

  z-index: 2;

  ul {
    list-style: none;
    display: flex;
    flex-flow: row nowrap;

    li {
      padding: 18px 10px;
    }
  }
`;
