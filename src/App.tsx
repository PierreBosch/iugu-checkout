import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

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
