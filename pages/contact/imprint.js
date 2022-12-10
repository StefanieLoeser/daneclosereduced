import Link from "next/link";
import styled from "styled-components";
import BackHome from "../../components/BackHome";

export default function Imprint() {
  return (
    <>
      <ImprintPageWrapper>
        <h1>Imprint</h1>
        <p>More infos to follow.</p>
      </ImprintPageWrapper>
      <BackHome />
    </>
  );
}

const ImprintPageWrapper = styled.div`
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
    margin: 0.5rem 0;
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }

  .imprint {
    font-weight: 400;
  }
`;
