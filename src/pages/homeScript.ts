import { ref, onMounted, onUnmounted } from 'vue';

// Classe pour le scroll
const homeScroll = ref(false);

// Gestion scroll :
const onScroll = () => {
  homeScroll.value = window.scrollY > 300;
};

export function useHomeLogic() {
  onMounted(() => window.addEventListener('scroll', onScroll));
  onUnmounted(() => window.removeEventListener('scroll', onScroll));

  return { homeScroll };
}