import "normalize.css"
import { GlobalStyle } from "./GlobalStyle"
import Header from "./components/Header"
import Logo from "./components/Header/Logo"
import Main from "./components/Main"
import InititalMessage from "./components/Main/InitialMessage"
import Snacks from "./components/Main/Snacks"
import SnackBag from "./components/Main/SnackBag"
import { BagProvider } from "./context/BagContext"


function App() {
  return (
    <>
      <GlobalStyle />
      <Header>
        <Logo />
      </Header>
      <Main>
        <InititalMessage />
        <BagProvider>
          <Snacks />
          <SnackBag />
        </BagProvider>
      </Main>
    </>
  )
}

export default App