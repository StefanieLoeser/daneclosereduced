import Link from "next/link";
import styled from "styled-components";
import BackHome from "../../components/BackHome";
import iconIG from "/public/assets/icon-instagram.png";
import iconMail from "/public/assets/icon-mail.png";
import Image from "next/image";

export default function Contact() {
  return (
    <>
      <ContactPageWrapper>
        <h1>Contact</h1>
        <p>
          All models are for sale.
          <br />
          Get in touch if you are interested.
        </p>
        <Link
          className="links"
          href="mailto:owengarethgarethowen@googlemail.com"
        >
          <Image className="icons" src={iconMail} alt="Email Icon" />
          <p>Send me a mail.</p>
        </Link>
        {/* <p>or</p> */}
        <Link className="links" href="https://www.instagram.com/dane_close/">
          <Image className="icons" src={iconIG} alt="Instagram Logo" />
          <p>Follow me on Instagram.</p>
        </Link>
        <Link className="links imprint" href="/contact/imprint">
          Imprint
        </Link>
      </ContactPageWrapper>
      <BackHome />
    </>
  );
}

const ContactPageWrapper = styled.div`
  margin: 2.5rem;
  display: flex;
  flex-flow: column nowrap;
  max-width: 70vh;
  height: fit-content;
  margin-bottom: 2rem;
  position: relative;

  .icons {
    width: 30px;
    height: 30px;
  }

  .links {
    /* margin: 0.5rem 0; */
    display: flex;
    align-items: center;
    gap: 1rem;
    font-weight: 400;
  }

  .links:hover {
    filter: blur(1px);
  }

  .imprint {
    margin-top: 1rem;
  }
  .imprint:hover {
    filter: blur(1px);
  }
`;
