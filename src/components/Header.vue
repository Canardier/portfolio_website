<script lang="ts" setup>
import { useHeaderLogic } from './headerScript.ts'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const { isActive, Navbar, scrolled } = useHeaderLogic()

defineProps<{
  duckLogo: string
  textColor: string
  borderColor: string
}>()

const navigation: { name: string; href: string; external?: boolean }[] = [
  { name: 'Expertise',   href: '/#expertise' },
  { name: 'Qui suis-je', href: '/#about' },
  { name: 'Quorix',      href: '/#quorix' },
  { name: 'Contact',     href: '/#contact' },
]
</script>

<template>
  <Disclosure v-slot="{ open }" as="nav"
    :style="{ '--header-text': textColor, '--accent': borderColor }"
    :class="[
      'fixed top-0 left-0 w-full z-50 transition-all duration-700 overflow-y-hidden',
      scrolled ? 'backdrop-blur shadow-lg' : 'h-120 lg:h-70'
    ]">

    <div :class="[
      'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 transition-all duration-700',
      scrolled ? 'h-26' : 'mt-3 h-29'
    ]">
      <div :class="[
        'relative flex items-center justify-between transition-all duration-700',
        scrolled ? 'h-22 border-b-4 border-[var(--accent)]' : 'h-55 border-b-4 border-[var(--accent)]'
      ]">

        <!-- Burger mobile -->
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden z-100 text-[var(--header-text)]">
          <DisclosureButton
            class="relative inline-flex items-center justify-center rounded-md p-2 hover:bg-gray-700 hover:text-white">
            <span class="sr-only">Ouvrir le menu</span>
            <Bars3Icon v-if="!open" aria-hidden="true" class="w-10 h-10" />
            <XMarkIcon v-else aria-hidden="true" class="w-10 h-10" />
          </DisclosureButton>
        </div>

        <!-- Logo + Nom -->
        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start z-20">
          <div class="flex shrink-0 items-center gap-3">
            <a href="/">
              <img alt="J.Studer" :src="duckLogo" class="h-6 w-auto" />
            </a>
            <a href="/"
               class="orbitron font-bold lg:text-3xl text-sm"
               :style="{ color: 'var(--header-text)' }">
              J.Studer
            </a>
          </div>
        </div>

        <!-- Nav desktop -->
        <div class="hidden sm:flex items-center gap-1 orbitronRegular">
          <a v-for="item in navigation" :key="item.name"
            :href="item.href"
            :target="item.external ? '_blank' : undefined"
            :rel="item.external ? 'noopener noreferrer' : undefined"
            :aria-current="isActive(item.href) ? 'page' : undefined"
            :class="[
              Navbar(
                isActive(item.href)
                  ? 'underline underline-offset-8 decoration-4 decoration-[var(--accent)]'
                  : 'hover:underline hover:underline-offset-8 hover:decoration-4',
                'px-3 py-2 text-sm lg:text-xl font-medium transition'
              ),
              item.name === 'Quorix' ? '!text-[var(--accent)] font-bold' : ''
            ]"
            :style="item.external ? {} : { color: 'var(--header-text)' }">
            {{ item.name }}
          </a>
        </div>

      </div>
    </div>

    <!-- Menu mobile -->
    <DisclosurePanel class="sm:hidden backdrop-blur z-50 text-[var(--header-text)]">
      <div class="space-y-1 px-2 pb-3 pt-2">
        <DisclosureButton v-for="item in navigation" :key="item.name"
          as="a"
          :href="item.href"
          :target="item.external ? '_blank' : undefined"
          :rel="item.external ? 'noopener noreferrer' : undefined"
          :class="[
            Navbar(
              'block rounded-md px-3 py-2 font-medium transition',
              scrolled ? 'translate-x-0' : 'translate-x-35 mt-4'
            ),
            item.external ? '!text-[var(--accent)] font-bold' : ''
          ]">
          {{ item.name }}
        </DisclosureButton>
      </div>
    </DisclosurePanel>

  </Disclosure>
</template>