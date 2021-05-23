import React from "react";
import styled from "styled-components/macro";
import { MEDIA } from "../../constants";

import Header from "../Header";
import ShoeIndex from "../ShoeIndex";

const App = () => {
  const [sortId, setSortId] = React.useState("newest");

  return (
    <>
      <Header />
      <Main>
        <ShoeIndex sortId={sortId} setSortId={setSortId} />
      </Main>
    </>
  );
};

const Main = styled.main`
  padding: 64px 32px;

  ${MEDIA.tabletMax} {
    padding: 48px 24px;
  }

  ${MEDIA.phoneMax} {
    padding: 36px 18px;
  }
`;

export default App;
