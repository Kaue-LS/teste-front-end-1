import "./App.scss";
import DotsProductsProvider from "./components/context/DotProducts";
import OptionsProvider from "./components/context/OptionsContext";
import ProductsProvider from "./components/context/Product";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navBar/NavBar";
import MainPage from "./MainPage";

function App() {
  return (
    <div className="App">
      <ProductsProvider>
      <DotsProductsProvider>
        <OptionsProvider>
          <NavBar></NavBar>
          <MainPage></MainPage>
          <Footer></Footer>
        </OptionsProvider>
      </DotsProductsProvider>
      </ProductsProvider>
    </div>
  );
}

export default App;
