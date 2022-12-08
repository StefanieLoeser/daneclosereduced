import styled from "styled-components";
import Link from "next/link";
// import { useState } from "react";

export default function RightNav({ posts, open, onSetOpen }) {
  //   const [showModels, setShowModels] = useState(false);

  return (
    <NavListRight
      open={open}
      onClick={() => {
        onSetOpen(!open);
      }}
    >
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
      <li>
        <Link href="/contact">Contact</Link>
      </li>
      {/* <li
        className=""
        showModels={showModels}
        onClick={() => setShowModels(!showModels)}
      >
        Models
        {showModels ? (
          <ul className="modelList">
            {posts.map((post) => {
              return (
                <li className="modelListItem" key={post.id}>
                  <Link href={`/posts/${post.slug}`} legacyBehavior>
                    {post.title.rendered}
                  </Link>
                </li>
              );
            })}
          </ul>
        ) : null}
      </li> */}
    </NavListRight>
  );
}

const NavListRight = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  transform-origin: 1px;
  transition: all 0.3s linear;

  li {
    padding: 18px 10px;
    cursor: pointer;
  }

  /* .modelList {
    display: ${({ showModelList }) => (showModelList ? "none" : "inline")};
    list-style: none;
    /* position: relative;
    left: -7px;
    margin-left: 0;
    padding: 10px 0;
    back 
  }

  .modelListItem {
    padding: 0.6rem;
    font-size: 1rem;
    font-style: italic;
  }

  .modelListItem:hover {
    color: darkgoldenrod;
  } */

  @media (max-width: 768px) {
    z-index: 10;
    flex-flow: column nowrap;
    background-color: #f3fffb;
    opacity: 0.8;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: -15px;
    right: 0;
    height: 100vh;
    width: 250px;
    padding-top: 3.5rem;
    transition: transform 0.3s;

    li {
      font-size: 1.5rem;
    }

    /* .modelListItem {
      padding: 0.6rem;
      font-size: 1rem;
      font-style: italic;
    }

    .modelListItem:hover {
      color: darkgoldenrod;
    } */
  }
`;
