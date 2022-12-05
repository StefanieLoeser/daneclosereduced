import Link from "next/link";
import Image from "next/image";
//to use Image with an external url, add some config on next.config.js
//for more info, check out these docs https://nextjs.org/docs/basic-features/image-optimization

export default function Model({ model, featuredMedia }) {
  return (
    <div className="card mb-3" style={{ maxWidth: "540px" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <Link href={`/models/${model.slug}`}>
            <a>
              <Image
                src={featuredMedia["media_details"].sizes.medium["source_url"]}
                width={180}
                height={120}
                alt={featuredMedia["alt_text"]}
              />
            </a>
          </Link>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{model.title.rendered}</h5>
            <div
              className="card-text"
              dangerouslySetInnerHTML={{ __html: model.excerpt?.rendered }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
