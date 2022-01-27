import React from "react";
import Router from "./containers/Router";
import ThemeProvider from "./containers/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  );
}

export default App;
