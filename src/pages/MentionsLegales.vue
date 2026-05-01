<template>
  <div class="min-h-screen bg-[#050d0a] text-white px-5 md:px-16 pt-32 pb-24">
    <div class="max-w-3xl mx-auto">

      <!-- En-tête -->
      <div class="mb-14">
        <p class="font-mono text-[11px] text-[#0c803f] tracking-[0.2em] uppercase mb-3">Légal</p>
        <h1 class="orbitron font-black uppercase text-3xl md:text-4xl leading-tight mb-4">
          Mentions<br>légales
        </h1>
        <div class="flex items-center gap-3">
          <div class="w-12 h-px bg-[#0c803f]/60"></div>
          <span class="font-mono text-xs text-white/30 tracking-widest uppercase">QUORIX · SIRET 984 192 302 00029</span>
        </div>
      </div>

      <!-- Contenu -->
      <div class="space-y-10">

        <!-- Éditeur -->
        <div class="border-l-2 border-[#0c803f]/20 pl-6 hover:border-[#0c803f]/60 transition-all duration-300">
          <div class="flex items-center gap-3 mb-3">
            <span class="font-mono text-[10px] text-[#0c803f] tracking-[0.15em]">01</span>
            <h2 class="orbitron font-bold text-sm uppercase tracking-wide text-white/90">Éditeur du site</h2>
          </div>
          <div class="text-white/50 text-sm leading-relaxed space-y-1">
            <p><span class="text-white/80 font-semibold">QUORIX</span> — Micro-entreprise</p>
            <p>SIRET : 984 192 302 00029</p>
            <p>Adresse : Issenheim, Haut-Rhin (68500), France</p>
            <p>Responsable de la publication : Joffrey Studer</p>
            <p>Email :
              <a href="mailto:joffrey.studer@gmail.com"
                 class="text-[#0c803f] hover:text-white transition font-mono">
                joffrey.studer@gmail.com
              </a>
            </p>
          </div>
        </div>

        <!-- Hébergement -->
        <div class="border-l-2 border-[#0c803f]/20 pl-6 hover:border-[#0c803f]/60 transition-all duration-300">
          <div class="flex items-center gap-3 mb-3">
            <span class="font-mono text-[10px] text-[#0c803f] tracking-[0.15em]">02</span>
            <h2 class="orbitron font-bold text-sm uppercase tracking-wide text-white/90">Hébergement</h2>
          </div>
          <div class="text-white/50 text-sm leading-relaxed space-y-1">
            <p>Ce site est hébergé sur une infrastructure <span class="text-white/70 font-semibold">auto-gérée</span> par Joffrey Studer.</p>
            <p>Hébergeur : Joffrey Studer — Issenheim, Haut-Rhin (68500), France</p>
            <p>Email :
              <a href="mailto:joffrey.studer@gmail.com"
                 class="text-[#0c803f] hover:text-white transition font-mono">
                joffrey.studer@gmail.com
              </a>
            </p>
          </div>
        </div>

        <!-- Articles dynamiques -->
        <div v-for="(article, i) in articles" :key="i"
          class="border-l-2 border-[#0c803f]/20 pl-6 hover:border-[#0c803f]/60 transition-all duration-300">
          <div class="flex items-center gap-3 mb-3">
            <span class="font-mono text-[10px] text-[#0c803f] tracking-[0.15em]">{{ String(i + 3).padStart(2, '0') }}</span>
            <h2 class="orbitron font-bold text-sm uppercase tracking-wide text-white/90">{{ article.title }}</h2>
          </div>
          <div class="text-white/50 text-sm leading-relaxed" v-html="article.content"></div>
        </div>

      </div>

      <!-- Footer légal -->
      <div class="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <span class="font-mono text-[10px] text-white/20 tracking-widest uppercase">© {{ new Date().getFullYear() }} Quorix — Joffrey Studer</span>
        <a href="/" class="font-mono text-[10px] text-[#0c803f]/60 hover:text-[#0c803f] transition tracking-widest uppercase">
          ← Retour
        </a>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
const articles = [
  {
    title: 'Propriété intellectuelle',
    content: "L'ensemble du contenu (textes, images, graphismes, logo, icônes, etc.) est la propriété exclusive de <strong class=\"text-white/70\">QUORIX</strong>, sauf mentions contraires. Toute reproduction, représentation, modification, publication ou adaptation, totale ou partielle, est interdite sans accord écrit préalable."
  },
  {
    title: 'Responsabilité',
    content: "QUORIX met tout en œuvre pour fournir des informations exactes sur ce site, mais ne saurait être tenu responsable d'erreurs, d'omissions ou de dommages résultant de l'utilisation du site."
  },
  {
    title: 'Données personnelles',
    content: `Les données collectées via le formulaire de contact sont strictement confidentielles et ne sont utilisées que pour traiter les demandes. Vous pouvez exercer vos droits d'accès, de rectification ou de suppression à tout moment par email à <a href="mailto:joffrey.studer@gmail.com" class="text-[#0c803f] hover:text-white transition font-mono">joffrey.studer@gmail.com</a>.`
  },
  {
    title: 'Cookies',
    content: "Ce site peut utiliser des cookies à des fins de statistiques ou de fonctionnement. Vous pouvez à tout moment les désactiver via les paramètres de votre navigateur."
  },
  {
    title: 'Contact',
    content: `Pour toute question, écrivez à <a href="mailto:joffrey.studer@gmail.com" class="text-[#0c803f] hover:text-white transition font-mono">joffrey.studer@gmail.com</a>`
  },
]
</script>