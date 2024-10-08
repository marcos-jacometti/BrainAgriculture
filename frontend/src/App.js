import React, { useState } from "react";
import themeContext from "./assets/styles/theme";
import { GlobalStyle } from "./assets/styles/global";
import AppRoutes from "./routes/Routes";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "./assets/styles/themes/dark";
import { lightTheme } from "./assets/styles/themes/light";

function App() {
  const [mode, setMode] = useState(false);

  return (
    <themeContext.Provider value={[mode, setMode]}>
      <ThemeProvider theme={mode ? darkTheme : lightTheme}>
        <GlobalStyle />
        <AppRoutes />
      </ThemeProvider>
    </themeContext.Provider>
  );
}

export default App;