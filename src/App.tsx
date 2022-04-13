import { Header } from './components/Header';
import OffersProvider from './contexts/OffersContext';
import PaymentProvider from './contexts/PaymentContext';
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
          <PaymentProvider>
            <AppRoutes />
          </PaymentProvider>
        </OffersProvider>
      </div>
    </CustomThemeProvider>
  );
}

export default App;
