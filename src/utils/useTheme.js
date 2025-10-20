import { ref, onMounted, watch } from "vue";

export function useTheme() {
  const theme = ref("dark");

  // Load theme from localStorage on mount
  onMounted(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      theme.value = savedTheme;
    }
    updateDocumentClass();
  });

  // Watch for theme changes and update localStorage + document class
  watch(theme, (newTheme) => {
    localStorage.setItem("theme", newTheme);
    updateDocumentClass();
  });

  // Update document class for CSS
  const updateDocumentClass = () => {
    document.documentElement.className = theme.value;
  };

  // Toggle between light and dark
  const toggleTheme = () => {
    theme.value = theme.value === "light" ? "dark" : "light";
  };

  return {
    theme,
    toggleTheme,
  };
}
