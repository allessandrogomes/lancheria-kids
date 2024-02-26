import "normalize.css"
import { GlobalStyle } from "./GlobalStyle"
import Header from "./components/Header"
import Logo from "./components/Header/Logo"
import Main from "./components/Main"
import InititalMessage from "./components/Main/InitialMessage"
import Snacks from "./components/Main/Snacks"
import SnackBag from "./components/Main/SnackBag"
import { ContextBagProvider } from "./context/ContextBag"


function App() {
  return (
    <>
      <GlobalStyle />
      <Header>
        <Logo />
      </Header>
      <Main>
        <InititalMessage />
        <ContextBagProvider>
          <Snacks />
          <SnackBag />
        </ContextBagProvider>
      </Main>
    </>
  )
}

export default App