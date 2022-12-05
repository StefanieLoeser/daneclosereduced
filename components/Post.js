import Link from "next/link";
import styled from "styled-components";
//to use Image with an external url, add some config on next.config.js
//for more info, check out these docs https://nextjs.org/docs/basic-features/image-optimization

export default function Post({ post, featuredMedia }) {
  return (
    <LinkWrapper>
      <Link href={`/posts/${post.slug}`}>
        {featuredMedia && (
          <FeatureImage
            src={featuredMedia["source_url"]}
            alt={featuredMedia["alt_text"]}
          />
        )}
      </Link>
    </LinkWrapper>
  );
}

const LinkWrapper = styled.div`
  position: relative;
`;

const FeatureImage = styled.img`
  width: 50%;
`;
