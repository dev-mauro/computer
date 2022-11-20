import { useState } from "react"

const useDarkMode = () => {

  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(currentState => !currentState);
  }


  return {
    darkMode,
    toggleDarkMode,
  }
}

export { useDarkMode }
