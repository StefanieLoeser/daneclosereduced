import styled from "styled-components";
import Link from "next/link";
// import { useState } from "react";

export default function NavResponsive({ posts, open, onSetOpen, pages }) {
  //   const [showModels, setShowModels] = useState(false);

  const jsxPages = pages.map((page) => {
    return (
      <li key={page.slug}>
        <Link href={`/${page.slug}`}>{page["title"]?.["rendered"]}</Link>
      </li>
    );
  });

  return (
    <NavMenu
      open={open}
      onClick={() => {
        onSetOpen(!open);
      }}
    >
      <li>
        <Link href="/">Home</Link>
      </li>
      {jsxPages}
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
    </NavMenu>
  );
}

const NavMenu = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  transform-origin: 1px;
  transition: all 0.3s linear;

  li {
    padding: 13px 16px;
    margin: 4px 10px;
    font-weight: 400;
    font-size: 1.3rem;
    /* border: 3px solid #f3fffb;
    border-radius: 3px; */
    cursor: pointer;
  }

  li:hover {
    filter: blur(1px);
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
    background-color: #fff200;
    backdrop-filter: blur(50px);
    opacity: 0.7;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: -15px;
    right: 0;
    height: 100vh;
    width: 220px;
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
