import React, { useState } from "react";
import useGithub from "../../hooks/github-hooks";

import * as S from "./styled";

const Header = () => {
  const { getUser } = useGithub();
  const [usernameForSearch, setUsernameForSearch] = useState(undefined);

  const submitGetUser = () => {
    if (!usernameForSearch) return;

    return getUser(usernameForSearch);
  };

  return (
    <header>
      <S.Wrapper>
        <input
          onChange={(event) => setUsernameForSearch(event.target.value)}
          type="text"
          placeholder="Digite o username para pesquisar..."
        />
        <button type="submit" onClick={submitGetUser}>
          <span>Buscar</span>
        </button>
      </S.Wrapper>
    </header>
  );
};

export default Header;
