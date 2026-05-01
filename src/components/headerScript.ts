import { ref, onMounted, onUnmounted } from 'vue';

// Utilitaire active (version sans vue-router, 100% safe)
const isActive = (href: string) => window.location.pathname === href;

// Classe utilitaire pour nav
function Navbar(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

// Classe pour le scroll
const scrolled = ref(false);

// Gestion scroll du header :
const onScroll = () => {
  scrolled.value = window.scrollY > 30;
};

export function useHeaderLogic() {
  onMounted(() => window.addEventListener('scroll', onScroll));
  onUnmounted(() => window.removeEventListener('scroll', onScroll));

  return { isActive, Navbar, scrolled };
}