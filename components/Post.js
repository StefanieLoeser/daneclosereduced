import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
//to use Image with an external url, add some config on next.config.js
//for more info, check out these docs https://nextjs.org/docs/basic-features/image-optimization

export default function Post({ post, featuredMedia }) {
  console.log(featuredMedia === null ? featuredMedia : "");
  return (
    <LinkWrapper>
      <Link href={`/posts/${post.slug}`}>
        {featuredMedia && (
          <Image
            src={featuredMedia["source_url"]}
            layout="fill"
            objectFit="contain"
            alt={featuredMedia["alt_text"]}
          />
          //   <FeatureImage
          //     src={featuredMedia["source_url"]}
          //     alt={featuredMedia["alt_text"]}
          //   />
        )}
      </Link>
    </LinkWrapper>
  );
}

const LinkWrapper = styled.div`
  position: relative;
  justify-content: center;
`;

const FeatureImage = styled.img`
  object-fit: scale-down;
  width: 50%;
`;
