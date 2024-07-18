import { useContext } from "react";
import { ThemeContext, ThemeProvider } from "./context/ThemeContext";
import './styles.css'

function App() {
  return (
    <ThemeProvider>
      <Home/>
    </ThemeProvider>
  );
}

function Home(){
  const { isDarkMode } = useContext(ThemeContext) 
  return(
    <div className={isDarkMode ? "dark-mode" : "light-mode"}>
      <h1>{isDarkMode ? "Dark Mode" : "Light Mode"}</h1>
      <ThemeToggle />
    </div>
  )
}

const ThemeToggle = () => {
  const {isDarkMode, toogleTheme} = useContext(ThemeContext)

  return (
    <button onClick={toogleTheme}>
      {isDarkMode ? "Switch to Light Mode": "Switch Dark Mode"}
    </button>
  )
}

export default App
