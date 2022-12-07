import Link from "next/link";
import styled from "styled-components";
import Image from "next/legacy/image";
//to use Image with an external url, add some config on next.config.js
//for more info, check out these docs https://nextjs.org/docs/basic-features/image-optimization

export default function Post({ post, featuredMedia }) {
  console.log(featuredMedia === null ? featuredMedia : "");
  return (
    <Link href={`/posts/${post.slug}`} legacyBehavior>
      <ImageWrapper>
        {featuredMedia && (
          //   <Image
          //     src={
          //       featuredMedia["media_details"]["sizes"]["medium"]["source_url"]
          //     }
          //     layout="responsive"
          //     objectFit="contain"
          //     alt={featuredMedia["alt_text"]}
          //   />
          <FeatureImage
            src={
              featuredMedia["media_details"]["sizes"]["medium_large"][
                "source_url"
              ]
            }
            alt={featuredMedia["alt_text"]}
          />
        )}
      </ImageWrapper>
    </Link>
  );
}

const ImageWrapper = styled.div`
  position: relative;
  justify-content: center;
  /* width: 30vw; */
`;

const FeatureImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
`;
