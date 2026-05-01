<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { useHeaderLogic } from '../components/headerScript.ts'

const { scrolled } = useHeaderLogic()

const openCalendly = () => {
  if (window.Calendly) {
    window.Calendly.initPopupWidget({ url: 'https://calendly.com/joffrey-studer' })
  } else {
    console.error('Calendly n\'est pas encore chargé.')
  }
}

onMounted(() => {
  const script = document.createElement('script')
  script.src = 'https://assets.calendly.com/assets/external/widget.js'
  script.async = true
  document.body.appendChild(script)

  // Scroll reveal
  const reveals = document.querySelectorAll('.reveal')
  const io = new IntersectionObserver(entries => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 80)
        io.unobserve(e.target)
      }
    })
  }, { threshold: 0.08 })
  reveals.forEach(el => io.observe(el))
})

declare global {
  interface Window { Calendly: any }
}

const competences = [
  { icon: '/logo_home/vitrine.svg',  label: 'Site Vitrine',  desc: 'Design sur-mesure, SEO inclus' },
  { icon: '/logo_home/ecommerce.svg', label: 'E-Commerce',   desc: 'Boutiques performantes' },
  { icon: '/logo_home/crm.svg',      label: 'CRM',           desc: 'Intégration & formation' },
  { icon: '/logo_home/shield-1.svg', label: 'Sécurité IT',   desc: 'RGPD & durcissement' },
  { icon: '/logo_home/api.svg',      label: 'API',           desc: 'Conception & intégration' },
  { icon: '/logo_home/ai.svg',       label: 'IA & Agents',   desc: 'Automatisation métier' },
]
</script>

<template>
  <div class="min-h-screen bg-[#050d0a] text-white overflow-x-hidden">

    <!-- ══ HERO ════════════════════════════════════════ -->
    <section class="relative min-h-screen flex items-center px-5 md:px-16 pt-20 pb-12 overflow-hidden mt-46">

      <!-- Fond grille verte -->
      <div class="absolute inset-0 pointer-events-none"
           style="background-image: linear-gradient(rgba(12,128,63,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(12,128,63,0.06) 1px, transparent 1px); background-size: 48px 48px;"></div>

      <!-- Glow central -->
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
           style="background: radial-gradient(circle, rgba(12,128,63,0.12) 0%, transparent 70%); filter: blur(40px);"></div>

      <div class="relative z-10 w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-0 items-center">

        <!-- Texte -->
        <div>
          <!-- Badge -->
          <div class="inline-flex items-center gap-2 border border-[#0c803f]/40 px-3 py-1.5 mb-8">
            <span class="w-1.5 h-1.5 rounded-full bg-[#0c803f] animate-pulse"></span>
            <span class="font-mono text-[11px] text-[#0c803f] tracking-[0.2em] uppercase">Issenheim · Haut-Rhin</span>
          </div>

          <h1 class="orbitron font-black uppercase leading-none mb-4 text-4xl sm:text-5xl lg:text-6xl">
            Joffrey<br>
            <span class="text-[#0c803f]">Studer</span>
          </h1>

          <div class="flex items-center gap-3 mb-6">
            <div class="w-8 h-px bg-[#0c803f]/60"></div>
            <p class="font-mono text-xs text-white/50 tracking-[0.15em] uppercase">
              Architecte Systèmes & Dev Web
            </p>
          </div>

          <p class="text-white/60 leading-relaxed max-w-md mb-10 text-sm md:text-base">
            J'aide les entreprises à franchir un cap en transformant leurs défis IT en leviers de croissance.
            Polyvalence, sécurité, scalabilité — des infrastructures et des sites prêts pour l'avenir.
          </p>

          <div class="flex flex-wrap gap-3">
            <button @click="openCalendly"
              class="bg-[#0c803f] text-white font-semibold text-sm px-6 py-3 hover:bg-[#0a6e35] transition tracking-wide">
              📅 Réserver un appel
            </button>
            <a href="mailto:joffrey.studer@gmail.com"
              class="border border-white/20 text-white/70 font-medium text-sm px-6 py-3 hover:border-[#0c803f] hover:text-white transition">
              Écrire un message
            </a>
          </div>

          <!-- Contacts rapides -->
          <div class="mt-8 flex flex-wrap gap-5 text-xs text-white/30 font-mono">
            <a href="tel:0695770422" class="hover:text-[#0c803f] transition">06 95 77 04 22</a>
            <span class="text-white/10">|</span>
            <a href="mailto:joffrey.studer@gmail.com" class="hover:text-[#0c803f] transition">joffrey.studer@gmail.com</a>
            <span class="text-white/10">|</span>
            <a href="https://www.linkedin.com/in/studerj" target="_blank" class="hover:text-[#0c803f] transition">LinkedIn</a>
          </div>
        </div>

        <!-- Photo -->
        <div class="flex justify-center md:justify-end">
          <div class="relative">
            <!-- Cadre décoratif -->
            <div class="absolute -inset-3 border border-[#0c803f]/20"></div>
            <div class="absolute -inset-6 border border-[#0c803f]/08"></div>
            <!-- Coin vert -->
            <div class="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-[#0c803f]"></div>
            <div class="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-[#0c803f]"></div>

            <img src="/me2.jpg" alt="Joffrey Studer"
              class="w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 object-cover grayscale hover:grayscale-0 transition duration-500" />
          </div>
        </div>
      </div>

      <!-- Scroll hint -->
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-40">
        <div class="w-px h-8 bg-[#0c803f]"></div>
        <div class="w-1.5 h-1.5 rounded-full bg-[#0c803f]"></div>
      </div>
    </section>

    <!-- ══ COMPÉTENCES ══════════════════════════════════ -->
    <section class="px-5 md:px-16 py-24 max-w-6xl mx-auto">

      <div class="mb-14 reveal">
        <p class="font-mono text-[11px] text-[#0c803f] tracking-[0.2em] uppercase mb-3" id="expertise">Expertise</p>
        <h2 class="orbitron font-black uppercase text-2xl md:text-3xl leading-tight">
          Ce que je fais
        </h2>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-white/5">
        <div v-for="(c, i) in competences" :key="i"
          class="reveal bg-[#050d0a] p-6 flex flex-col items-center text-center gap-3 hover:bg-[#0c803f]/5 transition group border-b border-white/5 hover:border-[#0c803f]/30">
          <img :src="c.icon" :alt="c.label" class="w-10 h-10 opacity-60 group-hover:opacity-100 transition invert">
          <div>
            <div class="font-semibold text-sm text-white/90 orbitron mb-1">{{ c.label }}</div>
            <div class="text-white/30 text-xs">{{ c.desc }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- ══ À PROPOS ════════════════════════════════════ -->
    <section class="px-5 md:px-16 py-20 border-t border-white/5">
      <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

        <!-- Texte -->
        <div class="reveal">
          <p class="font-mono text-[11px] text-[#0c803f] tracking-[0.2em] uppercase mb-3">Qui suis-je</p>
          <h2 class="orbitron font-black uppercase text-2xl md:text-3xl leading-tight mb-6" id="about">
            Architecte IT<br>& Développeur Web
          </h2>
          <p class="text-white/60 leading-relaxed mb-4 text-sm">
            Passionné par les systèmes, les réseaux et le développement web, j'ai construit une expertise polyvalente
            qui me permet d'intervenir aussi bien sur l'infrastructure que sur le produit final.
          </p>
          <p class="text-white/60 leading-relaxed mb-8 text-sm">
            Proactif et pédagogue, j'accompagne chaque projet avec une vision orientée résultat — de l'audit
            à la mise en production, en passant par la sécurisation et l'optimisation des systèmes.
          </p>

          <!-- Stack -->
          <div class="flex flex-wrap gap-2">
            <span v-for="tag in ['Vue.js 3', 'TypeScript', 'Tailwind', 'WordPress', 'n8n', 'Linux', 'Docker', 'Réseaux']"
              :key="tag"
              class="font-mono text-[10px] px-2.5 py-1 border border-white/10 text-white/40 hover:border-[#0c803f]/50 hover:text-white/70 transition">
              {{ tag }}
            </span>
          </div>
        </div>

        <!-- Stats -->
        <div class="grid grid-cols-2 gap-px bg-white/5 reveal">
          <div class="bg-[#050d0a] p-8 hover:bg-[#0c803f]/5 transition">
            <div class="orbitron font-black text-3xl text-[#0c803f] mb-1">5+</div>
            <div class="text-white/40 text-xs uppercase tracking-widest font-mono">Ans d'expérience</div>
          </div>
          <div class="bg-[#050d0a] p-8 hover:bg-[#0c803f]/5 transition">
            <div class="orbitron font-black text-3xl text-[#0c803f] mb-1">20+</div>
            <div class="text-white/40 text-xs uppercase tracking-widest font-mono">Projets livrés</div>
          </div>
          <div class="bg-[#050d0a] p-8 hover:bg-[#0c803f]/5 transition">
            <div class="orbitron font-black text-3xl text-[#0c803f] mb-1">68</div>
            <div class="text-white/40 text-xs uppercase tracking-widest font-mono">Haut-Rhin</div>
          </div>
          <div class="bg-[#050d0a] p-8 hover:bg-[#0c803f]/5 transition">
            <div class="orbitron font-black text-3xl text-[#0c803f] mb-1">∞</div>
            <div class="text-white/40 text-xs uppercase tracking-widest font-mono">Curiosité</div>
          </div>
        </div>

      </div>
    </section>

<!-- ══ QUORIX CTA ══════════════════════════════════ -->
<section id="quorix" class="px-5 md:px-16 py-20 border-t border-white/5">
  <div class="max-w-6xl mx-auto reveal">

    <a target="_blank" id="quorix"
      class="group block border border-[#0c803f]/20 hover:border-[#0c803f]/60 bg-[#0c803f]/5 hover:bg-[#0c803f]/10 p-8 md:p-12 transition-all duration-300 hover:-translate-y-1">

      <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">

        <div>
          <p class="font-mono text-[10px] text-[#0c803f]/60 tracking-[0.2em] uppercase mb-3">Mon activité commerciale</p>
          <div class="orbitron font-black text-4xl md:text-5xl text-white tracking-tight mb-3">
            QUORIX
          </div>
          <p class="text-white/50 text-sm max-w-md leading-relaxed">
            Agence web & intelligence artificielle à Issenheim. Création de sites vitrine, e-commerce
            et agents IA pour TPE et PME du Haut-Rhin. Non soumis à la TVA.
          </p>

          <div class="flex flex-wrap gap-2 mt-5">
            <span v-for="tag in ['Sites Vitrine', 'E-Commerce', 'Agents IA', 'Automatisation']" :key="tag"
              class="font-mono text-[10px] px-2.5 py-1 border border-[#0c803f]/20 text-[#0c803f]/70">
              {{ tag }}
            </span>
          </div>
        </div>

        <div class="flex-shrink-0 flex items-center gap-3 text-[#0c803f] font-semibold text-sm group-hover:gap-5 transition-all">
          Découvrir Quorix
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="5" y1="12" x2="19" y2="12"/>
            <polyline points="12 5 19 12 12 19"/>
          </svg>
        </div>

      </div>
    </a>

  </div>
</section>

    <!-- ══ CONTACT ════════════════════════════════════ -->
    <section class="px-5 md:px-16 py-20 border-t border-white/5">
      <div class="max-w-6xl mx-auto text-center reveal">
        <p class="font-mono text-[11px] text-[#0c803f] tracking-[0.2em] uppercase mb-4">Contact</p>
        <h2 class="orbitron font-black uppercase text-2xl md:text-3xl mb-10" id="contact">
          On travaille ensemble ?
        </h2>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button @click="openCalendly"
            class="bg-[#0c803f] text-white font-semibold text-sm px-8 py-4 hover:bg-[#0a6e35] transition w-full sm:w-auto">
            📅 Réserver un appel gratuit
          </button>
          <a href="mailto:joffrey.studer@gmail.com"
            class="border border-white/20 text-white/70 font-medium text-sm px-8 py-4 hover:border-[#0c803f] hover:text-white transition w-full sm:w-auto text-center">
            joffrey.studer@gmail.com
          </a>
        </div>
        <p class="mt-6 text-white/20 font-mono text-xs">Issenheim · Haut-Rhin · Alsace</p>
      </div>
    </section>

  </div>
</template>

<style scoped>
.reveal {
  opacity: 0;
  transform: translateY(18px);
  transition: opacity .6s ease, transform .6s ease;
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
</style>