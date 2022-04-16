import './App.scss';
import OptionsProvider from './components/context/OptionsContext';
import Footer from './components/footer/Footer';
import NavBar from './components/navBar/NavBar';
import MainPage from './MainPage';

function App() {
  return (
    <div className="App">
      <OptionsProvider>
      <NavBar></NavBar>
      <MainPage></MainPage>
      <Footer></Footer>
      </OptionsProvider>
    </div>
  );
}

export default App;
