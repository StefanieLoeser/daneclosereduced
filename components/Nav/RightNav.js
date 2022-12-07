import styled from "styled-components";
import Link from "next/link";
import { useState } from "react";

export default function RightNav({ posts }) {
  const [showModelList, setShowModelList] = useState(false);

  return (
    <NavListRight>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
      <li>
        <Link href="/contact">Contact</Link>
      </li>
      <li
        showModelList={showModelList}
        onClick={() => setShowModelList(!showModelList)}
      >
        Models
        {showModelList ? (
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
      </li>
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

  .modelList {
    display: ${({ showModelList }) => (showModelList ? "none" : "block")};
  }

  @media (max-width: 768px) {
    z-index: 10;
    display: flex;
    flex-flow: column nowrap;
    background-color: #f3fffb;
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 150px;
    padding-top: 3.5rem;

    .modelListItem {
      padding: 0.5rem;
    }
  }
`;
