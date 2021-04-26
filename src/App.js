import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import { Main } from './Components/Main';
import { ThemeContext, themes } from './context/theme-context';

function App() {

  const [theme, setTheme] = useState(themes.dark);

  const toggleTheme = () => {
    if (theme === themes.dark) {
      setTheme(themes.ligth)
    } else {
      setTheme(themes.dark)
    }
  }

  const store = {
    theme: theme,
    toggleTheme
  }

  return (
    <ThemeContext.Provider value={store}>
        <Header />
        <Main />
    </ThemeContext.Provider>
  );
}

export default App;
