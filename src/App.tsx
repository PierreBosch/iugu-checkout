import CustomThemeProvider from './contexts/ThemeContext';
import { Header } from './components/Header';
import GlobalStyle from './styles/global';
import Checkout from './pages/Checkout';

function App() {
  return (
    <CustomThemeProvider>
      <GlobalStyle />
      <div className="container">
        <Header />
        <Checkout />
      </div>
    </CustomThemeProvider>
  );
}

export default App;
