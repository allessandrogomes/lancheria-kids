import "normalize.css"
import { GlobalStyle } from "./GlobalStyle"
import Header from "./components/Header"
import Logo from "./components/Header/Logo"
import Main from "./components/Main"
import InititalMessage from "./components/Main/InitialMessage"
import Snacks from "./components/Main/Snacks"


function App() {
  return (
    <>
      <GlobalStyle />
      <Header>
        <Logo />
      </Header>
      <Main>
        <InititalMessage />
        <Snacks />
      </Main>
    </>
  )
}

export default App


{/* <SnackGroup snackGroupName="Bolos">
          <Snack
            snackName="Bolo de Cenoura"
            additionalSnackInformation="Informações Adicionais"
            snackImage="./images/bolo-de-cenoura.png"
            snackNameAlt="Bolo de Cenoura"
            snackPrice={19.99}
          />
          <Snack
            snackName="Bolo de Chocolate"
            additionalSnackInformation="Informações Adicionais"
            snackImage="./images/bolo-de-chocolate.png"
            snackNameAlt="Bolo de Chocolate"
            snackPrice={22.95}
          />
        </SnackGroup>
        <SnackGroup snackGroupName="Doces">
          <Snack
            snackName="Doce de Leite"
            additionalSnackInformation="Informações Adicionais"
            snackImage="./images/doce-de-leite.png"
            snackNameAlt="Doce de Leite"
            snackPrice={7.95}
          />
          <Snack
            snackName="Doce de Banana"
            additionalSnackInformation="Informações Adicionais"
            snackImage="./images/doce-de-banana.png"
            snackNameAlt="Doce de Banana"
            snackPrice={6.95}
          />
        </SnackGroup> */}