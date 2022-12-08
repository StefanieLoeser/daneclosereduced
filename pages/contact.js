import styled from "styled-components";
import BackHome from "../components/BackHome";

export default function Contact() {
  return (
    <>
      <ContactPageWrapper>
        <h1>Contact</h1>
        <form action="/send-data-here" method="post">
          {/* <label for="first">First name:</label> */}
          <input type="text" id="first" name="first" placeholder="first name" />
          {/* <label for="last">Last name:</label> */}
          <input type="text" id="last" name="last" placeholder="last name" />
          {/* <label for="email">E-Mail:</label> */}
          <input type="text" id="email" name="email" placeholder="email" />
          <textarea
            id="message"
            name="message"
            placeholder="Say hi!"
            rows="5"
            cols="5"
          />
          <button type="submit">Submit</button>
        </form>
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

  form {
    display: flex;
    flex-flow: column nowrap;
    /* padding: 10px; */
    gap: 20px;
  }

  input {
    font-size: 1rem;
    padding: 0.6rem 1rem;
    border: none;
    border-radius: 5px;
  }

  textarea {
    border: none;
    font-size: 1.2rem;
    border-radius: 5px;
    padding: 1rem;
  }

  button {
    height: 3rem;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    background-color: #e8e8e8;
  }
`;
