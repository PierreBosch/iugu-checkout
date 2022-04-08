import CustomThemeProvider from './contexts/ThemeContext';
import GlobalStyle from "./styles/global"


function App() {
  return (
    <CustomThemeProvider>
      <GlobalStyle />
    </CustomThemeProvider>
  )
}

export default App
