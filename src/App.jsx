import Layout from "./components/layout";
import Profile from "./components/profile";
import Repositories from "./components/repositories";
import useGithub from "./hooks/github-hooks";

const App = () => {
  const { githubState } = useGithub();

  return (
    <Layout>
      <>
        {githubState.hasUser ? (
          <>
            <Profile />
            <Repositories />
          </>
        ) : (
          <p>Nenhuma usuário</p>
        )}
      </>
    </Layout>
  );
};

export default App;
