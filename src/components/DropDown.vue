<template>
  <div class="w-full max-w-full mx-auto overflow-hidden border-b border-gray-300">
    <button
      class="w-full text-left flex justify-between items-center py-4 text-2xl font-semibold text-black hover:text-gray-700 transition"
      @click="props.onToggle"
    >
      <span class="truncate">{{ props.title }}</span>
      <svg
        :class="['w-6 h-6 flex-shrink-0 transition-transform duration-300', props.isOpen ? 'rotate-180' : 'rotate-0']"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>

    <transition name="fade">
      <div
        v-show="props.isOpen"
        class="pb-4 text-gray-700 text-lg break-words whitespace-pre-line"
      >
        {{ props.description }}
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string
  description: string
  isOpen: boolean
  onToggle: () => void
}>()
</script>


<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}
</style>
