<template>
  <div class="min-h-screen bg-[#050d0a] text-white px-5 md:px-16 pt-32 pb-24">
    <div class="max-w-3xl mx-auto">

      <!-- En-tête -->
      <div class="mb-14">
        <p class="font-mono text-[11px] text-[#0c803f] tracking-[0.2em] uppercase mb-3">Légal</p>
        <h1 class="orbitron font-black uppercase text-3xl md:text-4xl leading-tight mb-4">
          Politique de<br>confidentialité
        </h1>
        <div class="flex items-center gap-3">
          <div class="w-12 h-px bg-[#0c803f]/60"></div>
          <span class="font-mono text-xs text-white/30 tracking-widest uppercase">QUORIX · RGPD</span>
        </div>
      </div>

      <!-- Contenu -->
      <div class="space-y-10">

        <div v-for="(article, i) in articles" :key="i"
          class="border-l-2 border-[#0c803f]/20 pl-6 hover:border-[#0c803f]/60 transition-all duration-300">
          <div class="flex items-center gap-3 mb-3">
            <span class="font-mono text-[10px] text-[#0c803f] tracking-[0.15em]">{{ String(i + 1).padStart(2, '0') }}</span>
            <h2 class="orbitron font-bold text-sm uppercase tracking-wide text-white/90">{{ article.title }}</h2>
          </div>
          <div class="text-white/50 text-sm leading-relaxed" v-html="article.content"></div>
        </div>

        <!-- Contact -->
        <div class="border-l-2 border-[#0c803f]/20 pl-6 hover:border-[#0c803f]/60 transition-all duration-300">
          <div class="flex items-center gap-3 mb-3">
            <span class="font-mono text-[10px] text-[#0c803f] tracking-[0.15em]">07</span>
            <h2 class="orbitron font-bold text-sm uppercase tracking-wide text-white/90">Contact</h2>
          </div>
          <p class="text-white/50 text-sm leading-relaxed">
            Pour toute question sur la gestion de vos données personnelles, contactez-nous à
            <a href="mailto:joffrey.studer@gmail.com"
               class="text-[#0c803f] hover:text-white transition font-mono">
              joffrey.studer@gmail.com
            </a>
          </p>
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
    title: 'Données collectées',
    content: 'Les informations que vous fournissez via le formulaire de contact (nom, prénom, email, message) sont strictement confidentielles.'
  },
  {
    title: 'Finalités du traitement',
    content: 'Vos données sont utilisées uniquement pour répondre à vos demandes et améliorer nos services. Elles ne sont <strong class="text-white/70">jamais cédées à des tiers</strong>.'
  },
  {
    title: 'Durée de conservation',
    content: 'Les données sont conservées pendant le temps nécessaire au traitement de votre demande, puis supprimées.'
  },
  {
    title: 'Vos droits',
    content: 'Vous disposez d\'un droit d\'accès, de rectification, d\'opposition et de suppression de vos données. Pour exercer vos droits, contactez <a href="mailto:joffrey.studer@gmail.com" class="text-[#0c803f] hover:text-white transition font-mono">joffrey.studer@gmail.com</a>'
  },
  {
    title: 'Sécurité',
    content: 'Nous mettons en place toutes les mesures nécessaires pour assurer la sécurité de vos données : accès limité, site sécurisé HTTPS, données chiffrées.'
  },
  {
    title: 'Cookies',
    content: 'Ce site peut utiliser des cookies pour assurer son fonctionnement optimal et réaliser des statistiques anonymes de navigation.'
  },
]
</script>