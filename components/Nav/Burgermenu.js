import { useState } from "react";
import styled from "styled-components";
import RightNav from "./RightNav";

export default function Burger({ posts }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <RightNav open={open} posts={posts} onSetOpen={setOpen} />
    </>
  );
}

const StyledBurger = styled.div`
  z-index: 20;
  width: 1.8rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 18px;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  cursor: pointer;

  div {
    width: 2rem;
    height: 0.2rem;
    background-color: ${({ open }) => (open ? "gray" : "#333")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? "0" : "1")};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }

  @media (min-width: 768px) {
    display: none;
    transition: transform 0.3s ease-in-out;
  }
`;
