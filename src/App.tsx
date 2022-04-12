import { Header } from './components/Header';
import OffersProvider from './contexts/OffersContext';
import CustomThemeProvider from './contexts/ThemeContext';
import AppRoutes from './routes';
import GlobalStyle from './styles/global';

function App() {
  return (
    <CustomThemeProvider>
      <GlobalStyle />

      <div className="container">
        <Header />
        <OffersProvider>
          <AppRoutes />
        </OffersProvider>
      </div>
    </CustomThemeProvider>
  );
}

export default App;
