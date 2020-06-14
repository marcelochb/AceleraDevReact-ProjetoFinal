import { useState, useEffect } from "react";
import { PropertsOfUsePersistedTheme } from "./types";
import { themes } from "../../styles/themes";

export const usePersistedTheme = ({
  keyOfLocalStorageToTheme,
  initialTypeOfTheme,
}: PropertsOfUsePersistedTheme) => {
  const [localStateOfTheme, setLocalStateOfTheme] = useState(
    localStorage.getItem(keyOfLocalStorageToTheme) || initialTypeOfTheme
  );

  const toggleTheme = () => {
    const themeToggled =
      localStateOfTheme === "Light" ? themes["Dark"] : themes["Light"];
    themeToggled.forEach((key) => {
      document.documentElement.style.setProperty(
        key.variableNameOfCss,
        key.variableValueOfCss
      );
    });
    setLocalStateOfTheme(localStateOfTheme === "Light" ? "Dark" : "Light");
  };

  useEffect(() => {
    localStorage.setItem(
      keyOfLocalStorageToTheme,
      JSON.stringify(localStateOfTheme)
    );
  }, [keyOfLocalStorageToTheme, localStateOfTheme]);

  return { toggleTheme };
};
