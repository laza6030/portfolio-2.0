const THEME_KEY = "theme";

const listeners = new Set<() => void>();

export function subscribeToTheme(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function getIsDarkMode() {
  return document.documentElement.classList.contains("dark");
}

export function getIsDarkModeOnServer() {
  return false;
}

export function setIsDarkMode(isDarkMode: boolean) {
  document.documentElement.classList.toggle("dark", isDarkMode);
  localStorage.setItem(THEME_KEY, isDarkMode ? "dark" : "light");
  listeners.forEach((listener) => listener());
}

// Runs in <head> before the first paint, to avoid a flash of the light theme.
export const themeInitScript = `try{if(localStorage.getItem("${THEME_KEY}")==="dark")document.documentElement.classList.add("dark")}catch(e){}`;
