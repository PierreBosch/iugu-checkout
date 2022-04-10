import CustomThemeProvider from './contexts/ThemeContext';
import { Header } from './components/Header';
import GlobalStyle from './styles/global';
import Checkout from './pages/Checkout';
import OffersProvider from './contexts/OffersContext';

function App() {
  return (
    <CustomThemeProvider>
      <GlobalStyle />
      <div className="container">
        <Header />
        <OffersProvider>
          <Checkout />
        </OffersProvider>
      </div>
    </CustomThemeProvider>
  );
}

export default App;
