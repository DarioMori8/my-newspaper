import FirstNotice from "./Components/FirstNotice";
import NavBar from "./Components/Navbar";
import SecondaryNavBar from "./Components/SecondaryNavBar";
import MainPage from "./Components/MainPage";
function App() {

    // <> </> serve perchè la funzione rutern non può restituire più di un elemento. Wragmaent serve per aggirare il problema
    return (
      <>
          <FirstNotice />
          <NavBar />
          <SecondaryNavBar/>
          <MainPage/>
      </>

  );
}

export default App;
