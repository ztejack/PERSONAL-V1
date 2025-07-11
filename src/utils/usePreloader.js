import { ref, onMounted } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";

const loading = ref(true);

export function usePreloader(delay = 6000) {
  onMounted(() => {
    setTimeout(() => {
      loading.value = false;
      AOS.init({
        duration: 1000,
        easing: "ease-in-out",
        once: true,
        mirror: false,
      });
    }, delay);
  });

  return { loading };
}
