import CustomThemeProvider from './contexts/ThemeContext';
import { Header } from './components/Header';
import GlobalStyle from './styles/global';

function App() {
  return (
    <CustomThemeProvider>
      <GlobalStyle />
      <div className="container">
        <Header />
      </div>
    </CustomThemeProvider>
  );
}

export default App;
