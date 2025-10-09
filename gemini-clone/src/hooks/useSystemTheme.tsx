import { useEffect } from "react";

export default function useSystemTheme() {
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const updateTheme = (e: MediaQueryList | MediaQueryListEvent) => {
      if (e.matches) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    };

    updateTheme(mediaQuery);
    mediaQuery.addEventListener("change", updateTheme);

    // Cleanup
    return () => {
      mediaQuery.removeEventListener("change", updateTheme);
    };
  }, []);
}
