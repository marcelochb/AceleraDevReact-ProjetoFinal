import { useState, useEffect } from "react";
import { PropertsOfUsePersistedTheme } from "../../types/hooks";
import { themes } from "../../styles/themes";

export const usePersistedTheme = ({
  keyOfLocalStorageToTheme,
  initialTypeOfTheme,
}: PropertsOfUsePersistedTheme) => {
  const [localStateOfTheme, setLocalStateOfTheme] = useState(
    localStorage.getItem(keyOfLocalStorageToTheme) || initialTypeOfTheme
  );

  console.log("theme", localStateOfTheme);
  const toggleTheme = () => {
    setLocalStateOfTheme(localStateOfTheme === "Light" ? "Dark" : "Light");
  };

  useEffect(() => {
    const loadTheme = () => {
      const themeToggled =
        localStateOfTheme === "Light" ? themes["Light"] : themes["Dark"];
      themeToggled.forEach((key) => {
        document.documentElement.style.setProperty(
          key.variableNameOfCss,
          key.variableValueOfCss
        );
      });
      localStorage.setItem(keyOfLocalStorageToTheme, localStateOfTheme);
    };
    loadTheme();
  }, [keyOfLocalStorageToTheme, localStateOfTheme]);

  return { toggleTheme, titleOfCurrentTheme: localStateOfTheme };
};
