import { createContext, useEffect, useState } from "react";

// Nous créons ici le context pour utiliser le thème de manière globale.

export const ThemeContext = createContext();

// Afin de prendre en compte les préférences de l'utilisateur, nous utiliserons matchMedia.
const prefersDarkMode = () =>
  // ( prefers-color-scheme fonctionne avec les valeurs dark & ligth )
  window.matchMedia("(prefers-color-scheme: dark)").matches === false;
const ThemeContextProvider = (props) => {
  const [darkMode, setDarkMode] = useState();

  console.log(darkMode);

  // On veux créer le btn pour changer la valeur

  const toggleDark = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("darkMode", JSON.stringify(!darkMode));
    // localStorage , enregistre les données sous forme de paires : clé-valeur ! Ne s'éfface pas lors de la fermeture du navigateur
  };

  // Mise à jour du local storage dans React !
  // Comment mettre à jour le locale storage au montage ?
  useEffect(() => {
    setDarkMode(false);
    const lsDark = JSON.parse(localStorage.getItem("darkMode"));

    if (lsDark) {
      setDarkMode(lsDark);
    } else if (prefersDarkMode()) {
      setDarkMode(true);
    }
  }, []);

  const { children } = props;
  return (
    <ThemeContext.Provider value={{ darkMode, toggleDark }}>
      {children}
    </ThemeContext.Provider>
  );
};
export default ThemeContextProvider;
