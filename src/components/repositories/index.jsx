import RepositoryItem from "../repository-item";
import * as S from "./styled";

const Repositories = () => {
  return (
    <S.WrapperTabs
      selectedTabClassName="is-selected"
      selectedTabPanelClassName="is-selected"
    >
      <S.WrapperTabList>
        <S.WrapperTab>Repositories</S.WrapperTab>
        <S.WrapperTab>Starred</S.WrapperTab>
      </S.WrapperTabList>
      <S.WrapperTabPanel>
        <RepositoryItem
          name="repo-1"
          linToRepo="https://github.com/MicaelJr/01-desafio-ignite"
          fullname="MicaelJr/01-desafio-ignite"
        />
      </S.WrapperTabPanel>
      <S.WrapperTabPanel>
        <RepositoryItem
          name="repo-2"
          linToRepo="https://github.com/MicaelJr/02-ignite-components"
          fullname="MicaelJr/02-ignite-components"
        />
      </S.WrapperTabPanel>
    </S.WrapperTabs>
  );
};

export default Repositories;
